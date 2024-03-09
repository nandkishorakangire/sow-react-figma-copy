import React from "react";

const GalleryCard = ({ textContent, imageURL, imageName }) => {
  return (
    <div className="flex flex-col items-stretch justify-stretch shadow-2xl w-full max-w-[391px] bg-white">
      <span
        className="relative w-full h-[292px] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <span className="bg-gradient-to-b from-transparent from-60% to-100% to-black/80 bg-opacity-60 absolute top-0 bottom-0 left-0 right-0" />
      </span>
      <span className="px-6 py-8">
        <p className="text-left font-normal text-base text-[#887C68] h-[115px] overflow-auto scrollbar-invisible">
          {textContent}
        </p>
      </span>
      <span className="bg-[#F8F8F8] p-6">
        <h4 className="text-left text-[22px] text-[#887c68] leading-7">
          {imageName}
        </h4>
      </span>
    </div>
  );
};

export default GalleryCard;
