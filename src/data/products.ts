import type { Product } from "@/types/products";

export const products: Product[] = [
  {
    id: "michelada-la-catrina",
    name: "Michelada La Catrina",
    category: "Vaso para michelada",
    size: "32 oz",
    description:
      "Vaso escarchado con nuestra mezcla de chile en polvo, listo para preparar micheladas al instante.",
    image: "/images/products/michelada-original.png",
    flavors: ["Mango", "Original", "Chamoy", "Sandía", "Pepino"],
  },
  {
    id: "palomita-la-catrina",
    name: "Palomita La Catrina",
    category: "Vaso para bebidas",
    size: "24 oz",
    description:
      "Vaso escarchado listo para preparar bebidas tipo Paloma o cócteles sin alcohol.",
    image: "/images/products/palomazo.png",
    flavors: ["Limón", "Fresa", "Piña Colada", "Pepino", "Blueberry"],
    reverse: true,
  },
  {
    id: "rim-dip-la-catrina",
    name: "Rim Dip La Catrina",
    category: "Escarchador",
    size: "284 g",
    description:
      "Escarchador artesanal para micheladas, frutas o botanas, elaborado con mezclas únicas de chiles, tamarindo y sabores frutales.",
    image: "/images/products/rim-dip-chamoy.png",
    flavors: [
      "Mango",
      "Chamoy",
      "Sandía",
      "Blueberry",
      "Fresa",
      "Piña",
      "Pepino Enchilado",
    ],
  },
  {
    id: "la-catrinita",
    name: "La Catrinita",
    category: "Vaso escarchado",
    size: "24 oz",
    description:
      "Vaso escarchado en la boquilla, acompañado de chile en polvo y una banderilla de tamarindo o sabor frutal.",
    image: "/images/products/catrinita.webp",
    flavors: ["Mango", "Chamoy", "Manzana Verde", "Blueberry", "Fresa"],
    reverse: true,
  },
];
