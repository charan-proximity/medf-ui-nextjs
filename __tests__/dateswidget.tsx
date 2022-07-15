import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DatesWidget from "../components/DatesWidget";

describe(" Date Widget tests", () => {
  const slotBookingDateHeaders = [
    { fullDate: "Tue, 28 June 2022", dayName: "Tue", day: "28" },
    { fullDate: "Wed, 29 June 2022", dayName: "Wed", day: "29" },
    { fullDate: "Thu, 30 June 2022", dayName: "Thu", day: "30" },
    { fullDate: "Fri, 1 July 2022", dayName: "Fri", day: "01" },
    { fullDate: "Sat, 2 July 2022", dayName: "Sat", day: "02" },
    { fullDate: "Sun, 3 July 2022", dayName: "Sun", day: "03" },
    { fullDate: "Mon, 4 July 2022", dayName: "Mon", day: "04" },
  ];
  const selectedDate = slotBookingDateHeaders[0];
  const onDateChange = jest.fn();

  test("should be able to render the dates ", async () => {
    const { debug } = render(
      <DatesWidget
        slotBookingDateHeaders={slotBookingDateHeaders}
        selectedDate={selectedDate}
        onDateChange={onDateChange}
      />
    );
    const listtestems = screen.getAllByRole("listitem");
    expect(listtestems).toHaveLength(slotBookingDateHeaders.length);
    expect(listtestems).toMatchSnapshot();
  });
});
