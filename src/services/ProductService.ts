import { api } from "../api/axiosClient";
import type {
  AddToCartPayload,
  CartResponse,
  Product,
  ProductDetail,
} from "../models/Product";
import { CacheService } from "./CacheService";

const CACHE_KEYS = {
  PRODUCTS: "ITX_PRODUCTS_LIST",
  PRODUCT_DETAIL: (id: string) => `ITX_PRODUCT_${id}`,
};

export const ProductService = {
  getProducts: async (): Promise<Product[]> => {
    const cachedProducts = CacheService.get<Product[]>(CACHE_KEYS.PRODUCTS);

    if (cachedProducts) {
      console.log("Serving products from cache");
      return cachedProducts;
    }

    console.log("Fetching products from API");
    const { data } = await api.get<Product[]>("/api/product");
    CacheService.set(CACHE_KEYS.PRODUCTS, data);
    return data;
  },

  getProductById: async (id: string): Promise<ProductDetail> => {
    const key = CACHE_KEYS.PRODUCT_DETAIL(id);
    const cachedDetail = CacheService.get<ProductDetail>(key);

    if (cachedDetail) {
      return cachedDetail;
    }

    const { data } = await api.get<ProductDetail>(`/api/product/${id}`);
    CacheService.set(key, data);
    return data;
  },

  addToCart: async (payload: AddToCartPayload): Promise<CartResponse> => {
    const { data } = await api.post<CartResponse>("/api/cart", payload);
    return data;
  },
};
