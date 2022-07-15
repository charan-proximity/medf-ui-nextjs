import React, { useEffect, useState } from "react";
import { specialtyImages } from "../../assets/index";
import { useRouter } from "next/router";
import { getUsersWithCondition } from "../../services/auth.service";
import { getSpeciality } from "../../services/specialty.service";
import { setLoading } from "../../store/auth";
import { useAppDispatch, useAppSelector } from "../../store/redux";
import Image, { StaticImageData } from "next/image";
import BookSlot from "../../components/BookSlot";
import {
  DoctorType,
  SlotType,
  SpecialityType,
  BookingInfoType,
} from "../../types";
import DoctorCard from "../../components/DoctorCard";
function SpecialityDetails() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const Specialtyimg: { [key: string]: StaticImageData } = {
    Dermatology: specialtyImages.DermatologySpeciality,
    GeneralPhysician: specialtyImages.GeneralPhysicianSpeciality,
    ENT: specialtyImages.ENTSpeciality,
    Ortho: specialtyImages.OrthoSpeciality,
    Paediatric: specialtyImages.PaediatricSpeciality,
    Sexology: specialtyImages.SexologistSpeciality,
    Urology: specialtyImages.UrologySpeciality,
    PhysioTheraphy: specialtyImages.PhysioTheraphySpeciality,
    Dental: specialtyImages.DentalSpeciality,
    Ophthal: specialtyImages.OphthalSpeciality,
  };

  const [specialtyData, setspecialtyData] = useState<SpecialityType>();
  const [doctorsdata, setDoctorsdata] = useState([]);
  const [isBookingModalShow, setIsBookingModalShow] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorType>();
  const [doctorsSearchdata, setdoctorsSearchdata] = useState<DoctorType[]>();
  const [lazyData, setLazyData] = useState<DoctorType[]>([]);
  const [recCount, setRecCount] = useState(+3);

  const specialityId = router.query.specialityId;

  const handleLoadMore = () => {
    let data = doctorsSearchdata;
    if (data) {
      setLazyData(data.slice(0, recCount + 3));
      setRecCount((count) => count + 3);
    }
  };
  const searchDoctors = (searchTerm: string) => {
    let doctorSearchdata: DoctorType[] = doctorsdata.filter((doctor) => {
      if (searchTerm == "undefined" || searchTerm == null || searchTerm == "") {
        return true;
      } else {
        let { name, consultancyFee, location, degree, specialty, experience } =
          doctor;
        return JSON.stringify({
          name,
          consultancyFee,
          location,
          degree,
          specialty,
          experience,
        })
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }
    });
    setdoctorsSearchdata(doctorSearchdata);
    setLazyData(doctorSearchdata.slice(0, 3));
  };
  const handleToggleBookingModal = () => {
    setIsBookingModalShow((i) => !i);
  };

  const handleBookAppointment = (doctor: DoctorType) => {
    setSelectedDoctor(doctor);
    handleToggleBookingModal();
  };
  const handleBookSlot = () => {
    router.push("/checkout");
  };
  useEffect(() => {
    dispatch(setLoading(true));
    if (specialityId) {
      getSpeciality(specialityId)
        .then((resp) => {
          setspecialtyData(resp);
          dispatch(setLoading(false));
        })
        .catch((err) => {
          dispatch(setLoading(false));
        });
      dispatch(
        getUsersWithCondition({ specialty: specialityId, role: "doctor" })
      ).then((resp) => {
        dispatch(setLoading(false));
        setDoctorsdata(resp);
      });
    }
  }, [specialityId]);

  useEffect(() => {
    if (doctorsdata && doctorsdata.length > 0 && specialityId) {
      searchDoctors("");
    }
  }, [doctorsdata]);

  return (
    <>
      <div className=" max-w-7xl mx-auto">
        {specialtyData ? (
          <div className="grid mx-5 grid-flow-row grid-cols-1 gap-24  md:grid-cols-4 lg:grid-cols-5 ">
            <div className=" md:col-span-2 rounded-3xl ">
              <Image
                src={Specialtyimg[specialtyData.name]}
                alt="spl_img"
                className="rounded-3xl"
              />
            </div>
            <div className=" md:col-span-2  lg:col-span-3 w-full space-y-5">
              <h1 className="text-2xl text-black">{specialtyData.type}</h1>

              <p>About</p>
              <p className="about_text"> {specialtyData.about}</p>

              <div className="w-4/5">
                <div className="flex flex-row  p-0.5 mb-5  border-b-2 border-black ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M6.732 12.229c-3.146 0-5.696-2.506-5.696-5.602 0-3.096 2.55-5.607 5.696-5.607s5.696 2.511 5.696 5.607-2.55 5.602-5.696 5.602zm9.116 2.9l-4.13-4.066a6.526 6.526 0 0 0 1.745-4.436C13.463 2.966 10.45 0 6.732 0S0 2.966 0 6.627c0 3.656 3.014 6.622 6.732 6.622 1.606 0 3.08-.555 4.237-1.48l4.147 4.081c.202.2.53.2.732 0a.503.503 0 0 0 0-.72z"
                        opacity=".4"
                      />
                    </svg>
                  </span>
                  <div
                    id="care_doctor_search_input"
                    className="w-full  outline-none border-none h-auto text-lg  pl-5"
                  >
                    <input
                      className="w-full  outline-none border-none h-auto "
                      placeholder="search by "
                      type="text"
                      onChange={(e) => searchDoctors(e.target.value)}
                    />
                  </div>
                </div>

                {doctorsSearchdata && doctorsSearchdata.length > 0 ? (
                  <div className="  overflow-x-hidden overflow-y-scroll h-80 ">
                    <div className="grid  grid-cols-1">
                      {doctorsSearchdata && (
                        <>
                          {lazyData &&
                            lazyData.map((doctor) => (
                              <DoctorCard
                                key={doctor.id}
                                doctor={doctor}
                                onBookAppointment={handleBookAppointment}
                              />
                            ))}
                          {lazyData &&
                            doctorsSearchdata &&
                            lazyData.length < doctorsSearchdata.length && (
                              <div className=" flex justify-center  w-full ">
                                <div
                                  className=" text-primary-pink  cursor-pointer w-32 h-8 py-1  text-center"
                                  onClick={() => handleLoadMore()}
                                >
                                  <span>Load more..</span>
                                </div>
                              </div>
                            )}
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="norecords">
                    <div className="col">
                      <br />

                      <h2> Doctors Not Available</h2>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {selectedDoctor && (
              <BookSlot
                onBookSlot={handleBookSlot}
                onToggleBookingModal={handleToggleBookingModal}
                isBookingModalShow={isBookingModalShow}
                selectedDoctor={selectedDoctor}
              />
            )}
          </div>
        ) : (
          <div className="norecords">
            <div className="col">
              <br />

              <h2> No Available Doctors</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SpecialityDetails;
