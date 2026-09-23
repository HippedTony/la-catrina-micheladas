import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

const navItems = [
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 bg-background/95 backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? "border-b border-brand/10 shadow-sm" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          {/** Logo */}
          <a
            href="#"
            className="font-black tracking-tight text-brand"
            aria-label="La Catrina - Inicio"
          >
            LA CATRINA
          </a>

          {/** Desktop nabigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden items-center gap-8 lg:flex"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                variants={itemVariants}
                href={item.href}
                className="group relative text-sm font-medium text-brand-dark/80 transition-colors duration-300 hover:text-brand"
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </motion.div>

          {/** Desktop CTA */}
          <motion.a
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            href="#productos"
            className="hidden rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-accent lg:inline-flex"
          >
            Conone nuestros productos
          </motion.a>

          {/** Mobile button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative flex h-10 w-10 items-center justify-center text-brand lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">
              {menuOpen ? "Cerrar menú" : "Abrir menú"}
            </span>

            <div className="flex w-5 flex-col gap-1.5">
              <motion.span
                animate={
                  menuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.2 }}
                className="block h-px w-full bg-current"
              />

              <motion.span
                animate={{
                  opacity: menuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
                className="block h-px w-full bg-current"
              />

              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.2 }}
                className="block h-px w-full bg-current"
              />
            </div>
          </button>
        </nav>

        {/** Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden lg:hidden"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-6 border-t border-brand/10 py-8"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    variants={itemVariants}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-lg font-bold text-brand"
                  >
                    {item.label}
                  </motion.a>
                ))}

                <motion.a
                  variants={itemVariants}
                  href="#productos"
                  onClick={handleLinkClick}
                  className="inline-flex w-fit rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                >
                  Conoce nuestros productos
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
