import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants: Variants = {
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

export default function BrandExperience() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="experiencia" ref={sectionRef} className="bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        {/** Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <motion.img
            style={{ y }}
            src="/images/products/michelada.webp"
            alt="La Catrina"
            className="w-full max-w-xl object-contain"
          />
        </motion.div>

        {/** Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-xl"
        >
          <motion.span
            variants={itemVariants}
            className="text-sm font-bold uppercase tracking-[0.2em] text-brand"
          >
            El sabor de La Catrina
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-5 text-4xl font-black leading-tight text-brand md:text-5xl lg:text-6xl"
          >
            Sabores deliciosos hechos para cada momento.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-lg leading-relaxed text-brand"
          >
            Creamos experiencias que empiezan con un vaso y terminan en un
            momento para compartir. Descubre sabores únicos, combinaciones
            irresistibles y el toque mexicano que hace diferente a La Catrina.
          </motion.p>

          <motion.a
            href="#productos"
            variants={itemVariants}
            className="mt-8 inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-accent"
          >
            Descubre La Catrina
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
