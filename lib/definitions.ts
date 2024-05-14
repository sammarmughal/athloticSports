// lib/definitions.ts
export interface Product {
  sku_id: number;
  product_name: string;
  description: string;
  price: number;
  quantity_available: number;
  category_id: number;
  image_url: string;
}
