import { motion } from "framer-motion";
import React from "react";

const CarouselCard = ({ title, imageURL, index }) => {
  return (
    <motion.div
      id={`carousel-${index}`}
      className="flex flex-col items-stretch justify-center shadow-2xl w-full snap-always snap-start min-w-[391px] max-w-[391px] bg-white"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{
        duration: 3,
      }}
    >
      <div
        className="relative w-full h-[552px] bg-cover bg-no-repeat bg-center flex flex-col self-end justify-end"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <span className="py-11 align-bottom z-10">
          <h4 className="text-center text-[28px] uppercase text-white leading-8 martel-sans-regular font-extrabold">
            {title}
          </h4>
        </span>
        <span className="bg-gradient-to-b from-transparent from-60% to-100% to-black/80 bg-opacity-60 absolute top-0 bottom-0 left-0 right-0" />
      </div>
    </motion.div>
  );
};

export default CarouselCard;
