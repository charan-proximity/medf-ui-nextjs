import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DoctorCard from "../components/DoctorCard";

describe(" Date Widget tests", () => {
  const doctor = {
    id: "66ZDjBMv2DWcvLT4s9wxwo2uwmy1",
    registrationNumber: "GDBJ3222",
    verificationStatus: "verified",
    experience: "5 years",
    role: "doctor",
    degree: "MBBS",
    name: "Medfit Doctor",
    phone: "",
    email: "appmedfitdoctor@gmail.com",
    dob: "",
    gender: "",
    specialty: "GeneralPhysician",
    workEmail: "",
    consultancyFee: "700",
    location: "Bangalore",
  };
  const onBookAppointment = jest.fn();
  test("should be able to render without fail ", async () => {
    const { debug } = render(
      <DoctorCard doctor={doctor} onBookAppointment={onBookAppointment} />
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(/Dr. Medfit Doctor/i);
    expect(screen.getByRole("heading")).toHaveTextContent(/700/);
    expect(screen.getByText(/MBBS/i)).toBeInTheDocument();
    expect(screen.getByText(/5 years/i)).toBeInTheDocument();
  });
});
