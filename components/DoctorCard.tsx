import React from "react";
import { specialtyImages } from "../assets";
import { DoctorType } from "../types";
import Image from "next/image";
interface IDoctorCardProps {
  doctor: DoctorType;
  onBookAppointment: (doctor: DoctorType) => void;
}

function DoctorCard({ doctor, onBookAppointment }: IDoctorCardProps) {
  return (
    <div className=" my-1" key={doctor.id}>
      <div className=" xl:mx-10 py-6 rounded-xl shadow-md overflow-hidden border border-gray-300">
        <div className="grid grid-cols-1 grid-flow-row gap-4 lg:grid-cols-4 space-x-5">
          <div className="w-24  lg:w-28 mx-4 object-cover">
            <Image src={specialtyImages.docIcon} alt="spl_img" />
          </div>
          <div className="lg:col-span-3 space-y-2">
            <h5 className="flex flex-row justify-between text-xl  text-gray-800   font-bold ">
              {"Dr."} {doctor.name}{" "}
              <span className="mx-5"> ₹ {doctor.consultancyFee} </span>
            </h5>
            <p className="text-gray-500 ">
              {doctor.experience} | {doctor.degree}
            </p>
            <p className="text-gray-500 flex flex-row">
              <span className="mt-1 mr-1">
                <svg
                  width="12px"
                  height="18px"
                  viewBox="0 0 12 18"
                  version="1.1"
                >
                  <g
                    id="Assets"
                    stroke="black"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(-352.000000, -1707.000000)"
                  >
                    <g
                      id="Location"
                      transform="translate(343.000000, 1701.000000)"
                    >
                      <rect
                        id="Rectangle-13"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                      ></rect>
                      <g
                        id="location-copy"
                        transform="translate(9.000000, 6.000000)"
                      >
                        <g id="thin-0535_navigation_location_drop_pin_map">
                          <g id="Group">
                            <path
                              d="M5.80881319,16.0576267 C5.89739601,15.920012 5.98905078,15.7767237 6.0834142,15.6282044 C6.75815568,14.5662232 7.43284776,13.4558008 8.06173321,12.3529305 C8.39793411,11.7633382 8.71223224,11.1909832 9.00058047,10.6409138 C10.1885002,8.37477117 10.8676966,6.60820266 10.8676966,5.67282259 C10.8676966,2.95804699 8.60673105,0.75 5.80888773,0.75 C3.01102631,0.75 0.75,2.9580649 0.75,5.67282259 C0.75,6.60820473 1.42918739,8.37477379 2.61709161,10.6409175 C2.90543595,11.1909869 3.21972983,11.763342 3.55592619,12.3529343 C4.18480313,13.4558046 4.85948607,14.5662271 5.53421841,15.6282083 C5.62857967,15.7767262 5.72023235,15.9200131 5.80881319,16.0576267 Z"
                              id="Shape"
                              stroke="black"
                              strokeWidth="1.5"
                            ></path>
                            <circle
                              id="Oval"
                              fill="black"
                              cx="6"
                              cy="6"
                              r="2"
                            ></circle>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              {doctor.location}
            </p>

            <button
              className="text-primary-pink text-sm text-center  
                                        font-bold border rounded-3xl shadow-lg px-5 py-2 mt-4 bg-white "
              onClick={() => onBookAppointment(doctor)}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
