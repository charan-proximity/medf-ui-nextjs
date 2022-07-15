import React, { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import {
  DoctorType,
  SlotType,
  SlotDateType,
  SlotTimeHeadersType,
} from "../types";
import { getNextSevenDays, createSlots, getTimeDiff } from "../helpers/helper";
import { setBookingInfo } from "../store/booking";
import { useAppDispatch } from "../store/redux";
import LoadingPage from "./LoadingPage";
import { getDoctorSlots } from "../services/slots.service";
import DatesWidget from "./DatesWidget";
import TimeSlot from "./TimeSlot";
interface IbookSlot {
  onToggleBookingModal: () => void;
  onBookSlot: () => void;
  isBookingModalShow: boolean;
  selectedDoctor: DoctorType;
}
function BookSlot({
  onToggleBookingModal,
  isBookingModalShow,
  selectedDoctor: doctor,
  onBookSlot,
}: IbookSlot) {
  const dispatch = useAppDispatch();
  const slotBookingDateHeaders = getNextSevenDays();
  const [selectedDate, setSelectedDate] = useState(slotBookingDateHeaders[0]);
  let { timeSlotHeaders: timeSlotHeadersOld } = createSlots();
  const [timeSlotHeaders, setTimeSlotHeaders] =
    useState<SlotTimeHeadersType[]>();
  const [slots, setSlots] = useState<SlotType[]>();
  const [loading, setLoading] = useState(false);
  const handleModal = () => {
    onToggleBookingModal();
  };
  // const { currentUser: patient } = useAppSelector((state) =>
  //   sessionStorage.getItem("user")
  //     ? JSON.parse(sessionStorage.getItem("user"))
  //     : state.auth
  // );

  const handleBookSlot = (slot: SlotType) => {
    if (!slot.isBooked) {
      //   setLoading(true);
      // if (!patient) {
      //   dispatch(handleLoginModal(true));
      //   return;
      // }
      slot.isBooked = !slot.isBooked;
      let bookingInfo = {
        slot: { ...slot },
        patientId: "1", //patient.id,
        consultancyFee: doctor?.consultancyFee,
        prescribtion: "",
        patientName: "charan", //patient.name,
        doctorName: doctor?.name,
        patientEmail: "", // patient.email,
        doctor: doctor,
      };
      dispatch(setBookingInfo(bookingInfo));
      onBookSlot();
      //
    }
  };

  const getSlots = ({
    doctorId,
    fullDate,
    isBooked,
  }: {
    doctorId: string;
    fullDate: string;
    isBooked: boolean;
  }) => {
    console.log("*");
    setLoading(true);
    dispatch(
      getDoctorSlots({
        doctorId,
        fullDate,
        isBooked,
      })
    )
      .then((dbSlots) => {
        setLoading(false);
        let newSlots = dbSlots.filter((slot: SlotType) => {
          return getTimeDiff(slot.fullDate + " " + slot.detailText) > 0;
        });
        console.log(newSlots);
        newSlots = newSlots.sort((slot1: SlotType, slot2: SlotType) =>
          getTimeDiff(
            slot1.fullDate + " " + slot1.detailText,
            slot2.fullDate + " " + slot2.detailText
          )
        );
        console.log(newSlots);
        setSlots(newSlots);
        let timeSlotHeadersnew = timeSlotHeadersOld.map((slotHeader) => {
          return {
            slotHeader: slotHeader,
            isAvailable: newSlots.some(
              (slot: SlotType) => slotHeader == slot.slotHeader
            ),
          };
        });

        setTimeSlotHeaders(timeSlotHeadersnew);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleDateChange = (slotDate: SlotDateType) => {
    setSelectedDate(slotDate);
    console.log("date changed", slotDate);
    if (doctor) {
      getSlots({
        doctorId: doctor.id,
        fullDate: slotDate.fullDate,
        isBooked: false,
      });
    }
  };
  useEffect(() => {
    if (doctor)
      getSlots({
        doctorId: doctor.id,
        fullDate: selectedDate.fullDate,
        isBooked: false,
      });
  }, [doctor]);

  useEffect(() => {
    console.log("bookng-modl", isBookingModalShow);
  }, []);
  const onClick = () => {
    console.log("clicked", doctor);
  };
  const onClose = () => {};
  return (
    <React.Fragment>
      <Modal show={isBookingModalShow} onClose={onToggleBookingModal}>
        <Modal.Body>
          <div className=" ">
            <div className="flex flex-row  justify-center w-full">
              <div className="text-2xl font-bold">Choose Your Slot</div>
              <span
                className="absolute right-8 top-9 cursor-pointer"
                onClick={handleModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                >
                  <path
                    fill="#aeaeae"
                    fillRule="evenodd"
                    d="M10.047.335L6 4.386 1.953.335a1.145 1.145 0 0 0-1.618 0 1.14 1.14 0 0 0 0 1.613L4.382 6 .335 10.052a1.14 1.14 0 0 0 0 1.613 1.145 1.145 0 0 0 1.618 0L6 7.614l4.047 4.051c.446.447 1.17.447 1.618 0a1.14 1.14 0 0 0 0-1.613L7.618 6l4.047-4.052a1.14 1.14 0 0 0 0-1.613 1.145 1.145 0 0 0-1.618 0z"
                  />
                </svg>
              </span>
            </div>
            <div className=" relative ">
              <section className="mt-4">
                <DatesWidget
                  slotBookingDateHeaders={slotBookingDateHeaders}
                  onDateChange={handleDateChange}
                  selectedDate={selectedDate}
                />
                <section className="ml-5 text-sm   min-h-[32rem] overflow-y-scroll h-[25rem]  text-gray-800">
                  {loading ? (
                    <LoadingPage />
                  ) : timeSlotHeaders && slots && slots?.length > 0 ? (
                    timeSlotHeaders.map(
                      (tsHeader: SlotTimeHeadersType) =>
                        tsHeader.isAvailable && (
                          <div
                            className="flex flex-row  items-center my-10 "
                            key={tsHeader.slotHeader}
                          >
                            <>
                              <div className="basis-1/6">
                                {tsHeader.slotHeader}
                              </div>

                              <div className="basis-5/6  space-y-4">
                                {slots &&
                                  slots.length > 0 &&
                                  slots.map(
                                    (slot: SlotType) =>
                                      tsHeader.slotHeader ==
                                        slot.slotHeader && (
                                        <TimeSlot
                                          key={slot.id}
                                          onClickSlot={handleBookSlot}
                                          slot={slot}
                                        />
                                      )
                                  )}
                              </div>
                            </>
                          </div>
                        )
                    )
                  ) : (
                    <div className="norecords">
                      <div className="col">
                        <br />

                        <h2> Slots Not Available</h2>
                      </div>
                    </div>
                  )}
                </section>
              </section>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default BookSlot;
