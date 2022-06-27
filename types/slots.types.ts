import { DoctorType } from "./doctor.types";

export type SlotType = {
  SlotDateTime: string;
  detailText: string;
  doctorId: string;
  fullDate: string;
  id: string;
  isBooked: boolean;
  isEditable: boolean;
  isSelected: boolean;
  slotHeader: string;
  specialty: string;
  value: string;
};

export type SlotDateType = {
  day: string;
  dayName: string;
  fullDate: string;
};

export type SlotTimeHeadersType = {
  slotHeader: string;
  isAvailable: boolean;
};

export type BookingInfoType = {
  slot: SlotType;
  patientId: string;
  consultancyFee: string | number;
  prescribtion: string;
  patientName: string;
  doctorName: string;
  patientEmail: string;
  doctor: DoctorType;
};
