type ProductCategory = "accessories" | "pants" | "hat";

export interface Product {
  id?: string;
  name: string;
  price: number;
  discount: number;
  weight: number;
  length: number;
  width: number;
  category: ProductCategory;
}

export interface ProductModel {
  id?: string;
  name?: string | null;
  photos?: (File | string)[] | null;
  picture?: File | string | null;
  qty?: number | null;
  index?: number | null;
}

export interface ProductDetail {
  material: string;
  caseDetail: string;
  movement: string;
  dial: string;
  hand: string;
  importantNote: string;
}

export interface AllProductData extends Product, ProductDetail {
  model: ProductModel[];
}
export interface ProductDescription extends Product, ProductDetail {}
