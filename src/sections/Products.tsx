import ProductShowcase from "@/components/product/ProductShowcase";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const headerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const productsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Products() {
  return (
    <section id="productos" className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl"
        >
          <motion.span
            variants={itemVariants}
            className="text-sm font-bold uppercase tracking-[0.2m] text-brand"
          >
            Nuestra colección
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-4xl font-black text-brand md:text-5xl"
          >
            Sabores para cada ocasión.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-brand-dark/70"
          >
            Descubre nuestra línea de productos y encuentra tu forma favorita de
            disfrutar una bebida diferente.
          </motion.p>
        </motion.div>

        <motion.div
          variants={productsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20"
        >
          {products.map((product, index) => (
            <ProductShowcase
              key={product.id}
              product={product}
              reversed={index % 2 === 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
