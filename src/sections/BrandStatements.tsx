import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants = {
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
    x: 40,
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

const flavorVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
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

export default function BrandStatements() {
  return (
    <section id="nosotros" className="bg-brand text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px">
        {/** Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/products/catrina_michelada_original.png"
            alt="Michelada La Catrina"
            className="max-h-150"
          />
        </motion.div>

        {/** Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={itemVariants}
            className="text-sm font-bold uppercase tracking-[0.2em] text-white/70"
          >
            Michelada La Catrina
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-4 font-raleway text-4xl font-black leading-tight md:text-5xl"
          >
            Una michelada.
            <br />
            Una experiencia.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/80"
          >
            Vasos escarchados con sabores únicos y auténticos, listos para
            preparar tu bebida favorita al instante.
          </motion.p>

          <motion.div
            variants={flavorVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["Original", "Chamoy", "Mango", "Sandía"].map((flavor) => (
              <motion.span
                key={flavor}
                variants={flavorVariants}
                className="rounded-full border border-white/30 px-4 py-2 text-sm"
              >
                {flavor}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
