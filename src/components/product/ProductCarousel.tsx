import { motion, AnimatePresence } from "framer-motion";
import type { ProductFlavor } from "@/types/products";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

interface ProductCarouselProps {
  flavors: ProductFlavor[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export default function ProductCarousel({
  flavors,
  activeIndex,
  onChange,
}: ProductCarouselProps) {
  const activeFlavor = flavors[activeIndex];

  const goToPrevious = () => {
    const previousIndex =
      activeIndex === 0 ? flavors.length - 1 : activeIndex - 1;

    onChange(previousIndex);
  };

  const goToNext = () => {
    const nextIndex = activeIndex === flavors.length - 1 ? 0 : activeIndex + 1;

    onChange(nextIndex);
  };

  return (
    <div className="relative flex w-full justify-center">
      <div className="relative flex aspect-square w-full max-w-xl items-center justify-center">
        {/** Favor glow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFlavor.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="absolute h-72 w-72 rounded-full blur-3xl"
            style={{
              backgroundColor: `${activeFlavor.color}80`,
            }}
          />
        </AnimatePresence>

        {/** Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={activeFlavor.image}
            src={activeFlavor.image}
            alt={`${activeFlavor.name} - vaso michelado`}
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -30,
              scale: 0.96,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute max-h-100 w-auto max-w-full object-contain"
          />
        </AnimatePresence>
      </div>

      {/** Previous */}
      {flavors.length > 1 && (
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Sabor anterior"
          className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand/20 bg-background/90 text-brand shadow-sm backdrop-blur-sm transition-all duration-300 cursor-pointer hover:border-brand hover:bg-brand hover:text-white"
        >
          <ArrowLeftIcon size={28} />
        </button>
      )}

      {/* Next */}
      {flavors.length > 1 && (
        <button
          type="button"
          onClick={goToNext}
          aria-label="Siguiente sabor"
          className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand/20 bg-background/90 text-brand shadow-sm backdrop-blur-sm transition-all duration-300 cursor-pointer hover:border-brand hover:bg-brand hover:text-white"
        >
          <ArrowRightIcon size={28} />
        </button>
      )}

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
        {flavors.map((flavor, index) => (
          <button
            key={flavor.name}
            type="button"
            onClick={() => onChange(index)}
            aria-label={`Ver sabor ${flavor.name}`}
            className="h-2 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: activeIndex === index ? 24 : 8,
              backgroundColor:
                activeIndex === index ? flavor.color : "currentColor",
              opacity: activeIndex === index ? 1 : 0.25,
            }}
          />
        ))}
      </div>
    </div>
  );
}
