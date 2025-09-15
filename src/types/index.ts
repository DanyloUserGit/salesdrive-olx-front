export interface Param {
  name: string;
  "#text": string;
}

export interface Product {
  price: number;
  currencyId: string;
  name: string;
  categoryId: string;
  vendor?: string;
  description?: string;
  url?: string;
  pictures: string[];
  param: Param[];
  id: string;
  available: boolean;
}
