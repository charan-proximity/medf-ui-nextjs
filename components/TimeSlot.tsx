import React from "react";
import { SlotType, SlotTimeHeadersType } from "../types";
interface ITimeSlotProps {
  slot: SlotType;
  onClickSlot: (slot: SlotType) => void;
}
function TimeSlot({ slot, onClickSlot }: ITimeSlotProps) {
  return (
    <button
      key={slot.id}
      onClick={() => onClickSlot(slot)}
      className={`mx-4 h-8 px-4 py-1 hover:bg-primary-pink hover:text-white border border-primary-pink shadow-md cursor-pointer rounded-3xl ${
        slot.isSelected ? "" : ""
      }`}
    >
      <div className="time-slot-text ">
        <div>{slot.value}</div>
      </div>
    </button>
  );
}

export default TimeSlot;
