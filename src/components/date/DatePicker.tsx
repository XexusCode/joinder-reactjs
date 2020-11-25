import React from "react";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

interface DatePickerParams {
  date: Date;
  setDate: (date: Date) => void;
  minDate?: number;
}

const DatePicker = ({
  date,
  setDate,
  minDate,
}: DatePickerParams): JSX.Element => {
  const options = {
    minDate,
  };
  return (
    <div>
      <Flatpickr
        data-enable-time
        value={date}
        options={options}
        onChange={(date) => {
          setDate(date[0]);
        }}
      />
    </div>
  );
};

export default DatePicker;
