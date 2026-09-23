import { galleryImages } from "@/data/galleryImages";
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

const galleryVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(100% 0% 0% 0%)",
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Gallery() {
  return (
    <section className="bg-background">
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
            Hecho para compartir
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-4xl font-black leading-tight text-brand md:text-5xl lg:text-6xl"
          >
            El sabor se disfruta mejor juntos
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-dark/70"
          >
            Una buena bebida comienza con el sabor, pero se convierte en una
            experiencia cuando se comparte
          </motion.p>
        </motion.div>

        {/** Gallery */}
        <motion.div
          variants={galleryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid auto-rows-55 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.src}
              variants={imageVariants}
              className={`relative overflow-hidden rounded-2xl ${image.className ?? ""}`}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
