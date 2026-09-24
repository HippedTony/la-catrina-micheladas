export interface ProductFlavor {
  name: string;
  image: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  size: string;
  description: string;
  flavors: ProductFlavor[];
}
