import type { NextPage } from "next";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";

import { homeImages } from "../assets/index";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const SpecialtyData: {
    name: string;
    imgSrc: StaticImageData;
    link: string;
  }[] = [
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
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="  max-w-7xl mx-auto sm:mx-20  ">
        <div className="py-4">
          <p className=" text-2xl text-black font-semibold py-2">Specialists</p>
          <p className="text-gray-500">Consult with top Doctors</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5  place-content-center">
          {SpecialtyData.map((spl, index) => (
            <div
              className=" cursor-pointer"
              key={index}
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                handleSpecialityClick(e, "/speciality/" + spl.name);
              }}
            >
              <Image width={200} height={240} src={spl.imgSrc} alt={spl.name} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
