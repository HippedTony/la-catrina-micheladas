import { benefits } from "@/data/benefits";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const headerVariants: Variants = {
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

const cardsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const numberVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
};

export default function WhyLaCatrina() {
  return (
    <section className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/** Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <motion.span
            variants={itemVariants}
            className="text-sm font-bold uppercase tracking-[0.2em] text-brand"
          >
            ¿Qué nos hace diferentes?
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-4xl font-black leading-tight text-brand md:text-5xl lg:text-6xl"
          >
            Más que un vaso,
            <br />
            una experiencia.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-dark/70"
          >
            En La Catrina creamos productos que combinan sabor, practicidad y
            una presentación que hace especial cada bebida.
          </motion.p>
        </motion.div>

        {/** Benefits */}
        <motion.div
          variants={cardsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20 grid gap-px overflow-hidden rounded-2xl bg-brand/10 md:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit) => (
            <motion.article
              key={benefit.number}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group bg-white p-8 transition-colors duration-300 hover:bg-brand"
            >
              <motion.span variants={numberVariants} className="text-sm font-black text-accent">
                {benefit.number}
              </motion.span>

              <h3 className="mt-12 text-2xl font-black text-brand transition-colors duration-300 group-hover:text-white">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-relaxed text-brand-dark/60 transition-colors duration-300 group-hover:text-white/70">
                {benefit.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
