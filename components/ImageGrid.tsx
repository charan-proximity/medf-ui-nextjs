import React from "react";
import Image, { StaticImageData } from "next/image";
import { SpecialityImageType } from "../types";

interface IImageGridProps {
  SpecialtyData: SpecialityImageType[];
  onImageClick: (e: React.MouseEvent<HTMLElement>, href: string) => void;
}

function ImageGrid({ SpecialtyData, onImageClick }: IImageGridProps) {
  return (
    <>
      <div className="w-full h-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5  place-items-center mx-auto ">
        {SpecialtyData.map((spl: SpecialityImageType, index: number) => (
          <div
            className=" cursor-pointer w-4/5  sm:mb-8"
            key={index}
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              onImageClick(e, "/speciality/" + spl.name);
            }}
          >
            <Image src={spl.imgSrc} alt={spl.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageGrid;
