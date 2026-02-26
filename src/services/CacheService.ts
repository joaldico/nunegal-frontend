import { CACHE_EXPIRATION_MS } from "../constants/constants";
import type { CacheItem } from "../models/CacheItem";

export const CacheService = {
  set: <T>(key: string, data: T): void => {
    const item: CacheItem<T> = {
      data,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  },

  get: <T>(key: string): T | null => {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) return null;

    try {
      const item: CacheItem<T> = JSON.parse(itemStr);
      const now = Date.now();

      if (now - item.timestamp > CACHE_EXPIRATION_MS) {
        localStorage.removeItem(key);
        return null;
      }

      return item.data;
    } catch (error) {
      console.error("Error parsing localStorage item", error);
      localStorage.removeItem(key);
      return null;
    }
  },

  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
};
