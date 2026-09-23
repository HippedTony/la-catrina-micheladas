import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const exploreLinks = [
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
];

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand text-white">
      {/** CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={contentVariants}
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
      >
        <motion.div variants={itemVariants} className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">
            La Catrina
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            Más que un vaso,
            <br />
            una experiencia
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Descubre el sabor de México y convierte cada bebida en un momento
            para compartir.
          </p>

          <motion.a
            variants={itemVariants}
            href="#productos"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-brand transition-colors duration-300 hover:bg-accent hover:text-white"
          >
            Conoce nuestros productos
          </motion.a>
        </motion.div>
      </motion.div>

      {/** Footer links */}
      <div className="border-t border-white/15">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={contentVariants}
          className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:px-8"
        >
          {/** Brand */}
          <motion.div variants={itemVariants}>
            <a href="#" className="text-xl font-black tracking-tight">
              LA CATRINA
            </a>

            <p className="mt-4 max-w-xs leading-relaxed text-white/60">
              El sabor de México en cada vaso.
            </p>
          </motion.div>

          {/** Explore */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
              Explora
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-white/80 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/** Social */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
              Síguenos
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-white/80 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      </div>

      {/** Button */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} La Catrina.</span>

          <span>Hecho en México.</span>
        </div>
      </div>
    </footer>
  );
}
