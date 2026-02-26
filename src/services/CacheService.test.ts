import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CacheService } from './CacheService';

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

vi.stubGlobal('localStorage', localStorageMock);

describe('CacheService', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useRealTimers();
  });

  it('debería guardar y recuperar los datos correctamente si no ha expirado', () => {
    const mockData = { id: '123', model: 'Acer' };
    CacheService.set('test_product', mockData);
    
    const result = CacheService.get('test_product');
    
    expect(result).toEqual(mockData);
  });

  it('debería devolver null y limpiar el localStorage si pasaron más de 60 minutos', () => {
    vi.useFakeTimers();
    
    const mockData = { id: '123', model: 'Acer' };
    CacheService.set('test_product', mockData);

    vi.advanceTimersByTime(3600000 + 1000);

    const result = CacheService.get('test_product');
    
    expect(result).toBeNull();
    expect(localStorage.getItem('test_product')).toBeNull();
  });

  it('debería devolver null si la key no existe', () => {
    const result = CacheService.get('non_existent_key');
    expect(result).toBeNull();
  });
});