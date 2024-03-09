import React, { useCallback, useState } from "react";
import CarouselCard from "../cards/CarouselCard";
import { AnimatePresence, motion } from "framer-motion";

const numOfImages = 3;

const ImageCarousel = ({ carouselData = [] }) => {
  const [startIndex, setStartIndex] = useState(0);

  const prevImage = useCallback(() => {
    setStartIndex((i) => {
      console.log("startIndex:", i - 1);
      if (carouselData.length && i - 1 >= 0) return i - 1;
      return i;
    });
  }, [carouselData.length]);

  const nextImage = useCallback(() => {
    setStartIndex((i) => {
      console.log("startIndex:", i + 1);
      if (carouselData.length && i + numOfImages < carouselData.length)
        return i + 1;
      return i;
    });
  }, [carouselData.length]);

  return (
    <div className="w-full">
      <div className="relative flex flex-row items-center justify-stretch w-full">
        <span
          className="py-4 px-5 bg-white absolute left-0 z-10 text-3xl w-max shadow-lg cursor-pointer"
          onClick={prevImage}
        >
          <svg
            width="11"
            height="17"
            viewBox="0 0 11 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 14.6323L4.20108 8.29028L11 1.94822L8.90688 0L0 8.29028L8.90688 16.5806L11 14.6323Z"
              fill="#64615B"
            />
          </svg>
        </span>
        <motion.div
          className="flex flex-row overflow-auto snap-x scroll-px-8 px-8 snap-proximity scrollbar-invisible gap-[52px] w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{
            duration: 1,
          }}
        >
          <AnimatePresence>
            {carouselData
              ?.slice(startIndex, startIndex + numOfImages)
              ?.map((data, index) => (
                <CarouselCard
                  index={index}
                  title={data.title}
                  imageURL={data.image}
                />
              ))}
          </AnimatePresence>
        </motion.div>
        <span
          className="py-4 px-5 bg-white absolute right-0 z-10 text-3xl w-max shadow-lg cursor-pointer"
          onClick={nextImage}
        >
          <svg
            width="11"
            height="17"
            viewBox="0 0 11 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14.6321L6.79892 8.29016L0 1.94819L2.09312 0L11 8.29016L2.09312 16.5803L0 14.6321Z"
              fill="#64615B"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ImageCarousel;
