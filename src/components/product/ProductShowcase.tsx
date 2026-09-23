import type { Product } from "@/types/products";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface ProductShowcaseProps {
  product: Product;
  reversed?: boolean;
}

export default function ProductShowcase({
  product,
  reversed = false,
}: ProductShowcaseProps) {
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: reversed ? 60 : -60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      x: reversed ? 60 : -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const flavorsVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.08,
      },
    },
  };

  const flavorVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <article className="grid items-center gap-12 py-20 lg:grid-cols-2">
      {/** Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: {},
        }}
        className={`flex justify-center overflow-hidden ${
          reversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <motion.img
          variants={imageVariants}
          src={product.image}
          alt={product.name}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-h-150 w-auto max-w-full object-contain"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: {},
        }}
        className={`${reversed ? "lg:order-1" : "lg:order-2"}`}
      >
        <motion.span
          variants={contentVariants}
          className="text-sm font-bold uppercase tracking-[0.2em] text-brand"
        >
          {product.category}
        </motion.span>

        <motion.h3
          variants={contentVariants}
          className="mt-4 text-4xl font-black text-brand md:text-5xl"
        >
          {product.name}
        </motion.h3>

        <motion.p
          variants={contentVariants}
          className="mt-4 text-brand-dark/70"
        >
          {product.size}
        </motion.p>

        <motion.p
          variants={contentVariants}
          className="mt-6 max-w-lg text-lg leading-relaxed text-brand-dark/80"
        >
          {product.description}
        </motion.p>

        {/** Flavors */}
        <motion.div
          variants={flavorsVariants}
          className="mt-8 flex flex-wrap gap-2"
        >
          {product.flavors.map((flavor) => (
            <motion.span
              key={flavor}
              variants={flavorVariant}
              className="rounded-full border border-brand/20 px-4 py-2 text-sm text-brand"
            >
              {flavor}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </article>
  );
}
