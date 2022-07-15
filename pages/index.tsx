import type { NextPage } from "next";
import Head from "next/head";
import { SpecialityImageType } from "../types/index";
import { homeImages } from "../assets/index";
import { useRouter } from "next/router";
import ImageGrid from "../components/ImageGrid";
import Image from "next/image";
const Home: NextPage = () => {
  const SpecialtyData: SpecialityImageType[] = [
    { name: "Dermatology", imgSrc: homeImages.Dermatology, link: "" },
    { name: "GeneralPhysician", imgSrc: homeImages.GenPhysician, link: "" },
    { name: "ENT", imgSrc: homeImages.ENT, link: "" },
    { name: "Ortho", imgSrc: homeImages.Ortho, link: "" },
    { name: "Paediatric", imgSrc: homeImages.Paediatric, link: "" },
    { name: "Sexology", imgSrc: homeImages.Sexologist, link: "" },
    { name: "Urology", imgSrc: homeImages.Urology, link: "" },
    { name: "PhysioTheraphy", imgSrc: homeImages.PhysioTheraphy, link: "" },
    { name: "Dental", imgSrc: homeImages.Dental, link: "" },
    { name: "Ophthal", imgSrc: homeImages.Ophthal, link: "" },
  ];
  const router = useRouter();

  const handleSpecialityClick = (
    e: React.MouseEvent<HTMLElement>,
    href: string
  ) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <main className=" max-w-6xl min-h-full container mx-auto">
      <div className="py-4 text-center md:text-left ">
        <p className=" text-2xl text-black font-semibold py-2">Specialists</p>
        <p className="text-gray-500">Consult with top Doctors</p>
      </div>
      <ImageGrid
        SpecialtyData={SpecialtyData}
        onImageClick={handleSpecialityClick}
      />
    </main>
  );
};

export default Home;
