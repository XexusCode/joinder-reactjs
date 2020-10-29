import React from "react";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

interface iDatePicker {
  date: Date;
  setDate: (d: Date) => void;
}

const DatePicker = ({ date, setDate }: iDatePicker) => (
  <div>
    <Flatpickr
      data-enable-time
      value={date}
      onChange={(d) => {
        setDate(d[0]);
      }}
    />
  </div>
);

export default DatePicker;
