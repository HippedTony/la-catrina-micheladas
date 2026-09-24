import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants = {
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

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/** Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={itemVariants}
              className="mb-6 block text-sm font-medium uppercase tracking-[0.2em]"
            >
              Vasos michelados
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="max-w-xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
            >
              El sabor de México en cada vaso.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-lg text-lg leading-relaxed"
            >
              Diseñamos vasos que convierten cada michelada en una experiencia
              que se disfruta y se comparte.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="mt-10"
            >
              <a
                href="#productos"
                className="mt-8 inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-accent"
              >
                Conoce nuestros productos
              </a>
            </motion.div>
          </motion.div>

          {/** Product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-center justify-center"
          >
            <motion.img
              src="/catrinas_logo.png"
              alt="Vaso para michelada"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 max-h-150"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
