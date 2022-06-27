import React from "react";
import Image from "next/image";
import Link from "next/link";
import medicon_login from "../assets/medicon_login.png";
function Header() {
  return (
    <div className=" h-16 mb-8 w-full bg-red-100 flex flex-row items-center justify-between">
      {" "}
      <div className="">
        <Link href="/">
          <a className="flex flex-row ml-2 md:ml-6 space-x-2">
            <Image
              src={medicon_login}
              width="35"
              height="35"
              className=""
              alt=""
            />
            <p className="xs:text-xs sm:text-xl mt-1 font-bold"> MEDFIT</p>
          </a>
        </Link>
      </div>{" "}
      <div className="md:mr-6 xs:text-xs md:text-2xl font-bold text-primary-pink">
        <h2>Online Consultation</h2>
      </div>
      <div className="mr-2 md:mr-6">
        <button className="px-3 py-1 border rounded-lg hover:text-white hover:bg-primary-pink text-primary-pink border-primary-pink">
          login
        </button>
      </div>
    </div>
  );
}

export default Header;
