import type { Product } from "@/types/products";

export const products: Product[] = [
  {
    id: "michelada-la-catrina",
    name: "Michelada La Catrina",
    category: "Vaso para michelada",
    size: "32 oz",
    description:
      "Vaso escarchado con nuestra mezcla de chile en polvo, listo para preparar micheladas al instante.",
    flavors: [
      {
        name: "Original",
        image: "/images/products/catrina_michelada_original.png",
        color: "#251216"
      },
      {
        name: "Chamoy",
        image: "/images/products/catrina_michelada_chamoy.png",
        color: "#fc0722",
      },
      {
        name: "Mango",
        image: "/images/products/catrina_michelada_mango.png",
        color: "#B17201",
      },
      {
        name: "Sandía",
        image: "/images/products/catrina_michelada_sandia.png",
        color: "#1C401A",
      },
      {
        name: "Pepino",
        image: "/images/products/catrina_michelada_pepino.png",
        color: "#1A631C",
      },
    ] 
  },
  {
    id: "palomita-la-catrina",
    name: "Palomita La Catrina",
    category: "Vaso para bebidas",
    size: "24 oz",
    description:
      "Vaso escarchado listo para preparar bebidas tipo Paloma o cócteles sin alcohol.",
    flavors: [
      {
        name: "Limón",
        image: "/images/products/catrina_palomita_limon.png",
        color: "#6c7421"
      },
      {
        name: "Fresa",
        image: "/images/products/catrina_palomita_fresa.png",
        color: "#aa4451",
      },
      {
        name: "Piña Colada",
        image: "/images/products/catrina_palomita_pcolada.png",
        color: "#F59E0B",
      },
      {
        name: "Pepino",
        image: "/images/products/catrina_palomita_pepino.png",
        color: "#1A631C",
      },
      {
        name: "Mora Azul",
        image: "/images/products/catrina_palomita_pepino.png",
        color: "#1A631C",
      },]
  },
];
