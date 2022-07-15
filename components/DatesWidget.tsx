import React from "react";
import { SlotDateType } from "../types";

interface IDatesWidgetProps {
  slotBookingDateHeaders: SlotDateType[];
  onDateChange: (date: SlotDateType) => void;
  selectedDate: SlotDateType;
}

function DatesWidget({
  slotBookingDateHeaders,
  onDateChange,
  selectedDate,
}: IDatesWidgetProps) {
  const selectedDayClass = "text-primary-pink  p-0.5";
  const selectedDateClass = "bg-primary-pink text-white p-2 rounded-full ";
  return (
    <div className=" h-20  overflow-hidden  shadow-xl ">
      <ul className="flex p-2 flex-row justify-between mx-10 items-center h-full ">
        {slotBookingDateHeaders.map((head: SlotDateType) => (
          <li
            className=""
            key={head.fullDate}
            onClick={() => onDateChange(head)}
          >
            <div className="text-xs flex flex-col ">
              <div
                className={` ${
                  selectedDate.dayName == head.dayName ? selectedDayClass : ""
                }`}
              >
                {head.dayName}
              </div>
              <div
                className={` ${
                  selectedDate.day == head.day
                    ? selectedDateClass
                    : "mt-2.5 pt-0.5"
                }`}
              >
                <p className=""> {head.day}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DatesWidget;
