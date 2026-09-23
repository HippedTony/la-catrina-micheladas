export interface Product {
  id: string;
  name: string;
  category: string;
  size: string;
  description: string;
  image: string;
  flavors: string[];
  reverse?: boolean;
}
