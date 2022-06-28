import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import doc from "../assets//DocIcon.jpg";
import SuccessModal from "../components/SuccessModal";
import back_arrow from "../assets/back_arrow.png";
import { BookingInfoType } from "../types";
// import {
//   addDoctorSlots,
//   bookSlot,
//   getDoctorSlots,
//   createRazorPayOrder,
// } from "../services/slots.service";
// import constants from "../helpers/constants";

import { useAppDispatch, useAppSelector } from "../store/redux";
import Image from "next/image";

function Checkout() {
  const { bookingInfo }: { bookingInfo: BookingInfoType | null } =
    useAppSelector((state) => state.booking);
  const router = useRouter();
  console.log(bookingInfo);
  const dispatch = useAppDispatch();
  const [toggleSuccessModal, setToggleSuccessModal] = useState(false);
  //
  const handleClickSubmit = () => {
    setToggleSuccessModal(true);
  };

  const handleClickOk = () => {
    router.push("/");
  };

  return (
    <div className=" max-w-6xl  mx-auto">
      {" "}
      {!toggleSuccessModal && (
        <div>
          {bookingInfo && bookingInfo.doctor && (
            <div className="grid sm:grid-cols-2 xs:grid-cols-1 place-content-center">
              <div className="flex flex-col">
                <div
                  className="  bg-primary-pink rounded-3xl  w-28 font-bold px-2 py-1 space-x-1 text-white flex flex-row"
                  onClick={() => {
                    router.back();
                  }}
                >
                  <Image width={20} height={16} src={back_arrow} />
                  <div> Go Back </div>
                </div>
                <section className="mt-5">
                  <div className="header">
                    <b>Order Summary</b>
                  </div>
                  <div className="flex flex-row space-x-10 items-center h-24  ">
                    <div className="left">
                      <Image
                        width={80}
                        height={75}
                        className="img"
                        src={doc}
                        alt="spl_img"
                      />
                    </div>
                    <div>
                      <div>Dr {bookingInfo.doctorName}</div>
                      <div className="sub-title">
                        {bookingInfo.doctor.degree}
                      </div>
                    </div>
                    <div>₹ {bookingInfo.consultancyFee}.00</div>
                  </div>
                </section>
              </div>
              <div className="flex flex-col justify-start space-y-6 w-96 ">
                <section className="flex flex-row space-x-3 items-center pb-5  border-b-2 border-gray-400 ">
                  <div className="icon">
                    <img
                      src="https://static.cure.fit/assets/images/person.svg"
                      className="css-1s4n3pk-Image e1bck8jo0"
                    />
                  </div>
                  <div className="">
                    <div className="">
                      <b>For whom</b>
                    </div>
                    <div className="">{bookingInfo.patientName} </div>
                  </div>
                </section>

                <section className="flex flex-row space-x-3 items-center pb-5  border-b-2 border-gray-400">
                  <div className="icon">
                    <img
                      src="https://static.cure.fit/assets/images/checkout-date_time.svg"
                      className="css-1s4n3pk-Image e1bck8jo0"
                    />
                  </div>
                  <div className="">
                    <div className="">
                      <b>{bookingInfo.slot.specialty} Online Consultation</b>
                    </div>
                    <div className="sub-title">
                      {bookingInfo.slot.fullDate} |{" "}
                      {bookingInfo.slot.detailText}{" "}
                    </div>
                  </div>
                </section>

                <div className=" space-y-3">
                  <div className="flex flex-row justify-between">
                    <div>MRP</div>
                    <div>₹ {bookingInfo.consultancyFee}.00</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>Total Payable</div>
                    <div>₹ {bookingInfo.consultancyFee}.00</div>
                  </div>
                </div>
                <div className=" flex flex-row justify-center">
                  <button
                    color="primary"
                    type="button"
                    className="bg-primary-pink text-white text-md w-full font-bold rounded-3xl px-20 py-2 "
                    onClick={handleClickSubmit}
                  >
                    Proceed to pay
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <>
        <SuccessModal
          toggleSuccessModal={toggleSuccessModal}
          onClickOk={handleClickOk}
        />
      </>
    </div>
  );
}

export default Checkout;
