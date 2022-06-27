import moment from "moment";

type DateType = string | Date;
export function createSlots() {
  let timeSlots = {
    timeSlotHeaders: ["9AM-12PM", "12PM-3PM", "3PM-6PM", "6PM-9PM"],
    timeSlots: [
      {
        value: "09:00",
        detailText: "09:00 AM",
        isSelected: false,
        slotHeader: "9AM-12PM",
      },
      {
        value: "09:30",
        detailText: "09:30 AM",
        isSelected: false,
        slotHeader: "9AM-12PM",
      },
      {
        value: "10:00",
        detailText: "10:00 AM",
        isSelected: false,
        slotHeader: "9AM-12PM",
      },
      {
        value: "10:30",
        detailText: "10:30 AM",
        isSelected: false,
        slotHeader: "9AM-12PM",
      },
      {
        value: "11:00",
        detailText: "11:00 AM",
        isSelected: false,
        slotHeader: "9AM-12PM",
      },
      {
        value: "11:30",
        detailText: "11:30 AM",
        isSelected: false,
        slotHeader: "9AM-12PM",
      },

      {
        value: "12:00",
        detailText: "12:00 PM",
        isSelected: false,
        slotHeader: "12PM-3PM",
      },
      {
        value: "12:30",
        detailText: "12:30 PM",
        isSelected: false,
        slotHeader: "12PM-3PM",
      },
      {
        value: "01:00",
        detailText: "01:00 PM",
        isSelected: false,
        slotHeader: "12PM-3PM",
      },
      {
        value: "01:30",
        detailText: "01:30 PM",
        isSelected: false,
        slotHeader: "12PM-3PM",
      },
      {
        value: "02:00",
        detailText: "02:00 PM",
        isSelected: false,
        slotHeader: "12PM-3PM",
      },
      {
        value: "02:30",
        detailText: "02:30 PM",
        isSelected: false,
        slotHeader: "12PM-3PM",
      },

      {
        value: "03:00",
        detailText: "03:00 PM",
        isSelected: false,
        slotHeader: "3PM-6PM",
      },
      {
        value: "03:30",
        detailText: "03:30 PM",
        isSelected: false,
        slotHeader: "3PM-6PM",
      },
      {
        value: "04:00",
        detailText: "04:00 PM",
        isSelected: false,
        slotHeader: "3PM-6PM",
      },
      {
        value: "04:30",
        detailText: "04:30 PM",
        isSelected: false,
        slotHeader: "3PM-6PM",
      },
      {
        value: "05:00",
        detailText: "05:00 PM",
        isSelected: false,
        slotHeader: "3PM-6PM",
      },
      {
        value: "05:30",
        detailText: "05:30 PM",
        isSelected: false,
        slotHeader: "3PM-6PM",
      },

      {
        value: "06:00",
        detailText: "06:00 PM",
        isSelected: false,
        slotHeader: "6PM-9PM",
      },
      {
        value: "06:30",
        detailText: "06:30 PM",
        isSelected: false,
        slotHeader: "6PM-9PM",
      },
      {
        value: "07:00",
        detailText: "07:00 PM",
        isSelected: false,
        slotHeader: "6PM-9PM",
      },
      {
        value: "07:30",
        detailText: "07:30 PM",
        isSelected: false,
        slotHeader: "6PM-9PM",
      },
      {
        value: "08:00",
        detailText: "08:00 PM",
        isSelected: false,
        slotHeader: "6PM-9PM",
      },
      {
        value: "08:30",
        detailText: "08:30 PM",
        isSelected: false,
        slotHeader: "6PM-9PM",
      },
    ],
  };
  return timeSlots;
}

export const getTimeDiff = (day1: DateType, day2?: DateType) => {
  const today = day2 && day2 != "today" ? moment(day2) : moment();
  const someday = moment(day1);
  const diff = someday.diff(today, "minutes");
  return diff - 10;
};

export const getDateTimestamp = (day1: DateType) => {
  const someday = moment(day1);
  return someday;
};

export const isNullorUndefined = (obj: DateType) => {
  return !(typeof obj !== "undefined" && obj !== null);
};

export const getNextSevenDays = () => {
  var aryDates = [];
  var daysToAdd = 6;
  var startDate = new Date();
  for (var i = 0; i <= daysToAdd; i++) {
    var currentDate = new Date();
    currentDate.setDate(startDate.getDate() + i);
    var fullDate =
      DayAsString(currentDate.getDay()) +
      ", " +
      currentDate.getDate() +
      " " +
      MonthAsString(currentDate.getMonth()) +
      " " +
      currentDate.getFullYear();
    var dayName = DayAsString(currentDate.getDay());
    var day =
      currentDate.getDate() < 10
        ? "0" + currentDate.getDate()
        : "" + currentDate.getDate();
    var datObj = { fullDate, dayName, day };
    aryDates.push(datObj);
  }

  return aryDates;
};

function MonthAsString(monthIndex: number) {
  var d = new Date();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  return month[monthIndex];
}

function DayAsString(dayIndex: number) {
  var weekdays = new Array(7);
  weekdays[0] = "Sun";
  weekdays[1] = "Mon";
  weekdays[2] = "Tue";
  weekdays[3] = "Wed";
  weekdays[4] = "Thu";
  weekdays[5] = "Fri";
  weekdays[6] = "Sat";

  return weekdays[dayIndex];
}
