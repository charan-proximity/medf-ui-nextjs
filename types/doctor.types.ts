import { StaticImageData } from "next/image";

export type SpecialityType = {
  name: string;
  type: string;
  about: string;
};

export type SpecialityImageType = {
  name: string;
  imgSrc: StaticImageData;
  link: string;
};

export type DoctorType = {
  id: string;
  name: string;
  consultancyFee: string | number;
  experience: String;
  degree: string;
  location: string;
  dob: string;
  email: string;
  gender: string;
  phone: string;
  registrationNumber: string;
  role: string;
  specialty: string;
  verificationStatus: string;
  workEmail: string;
};
