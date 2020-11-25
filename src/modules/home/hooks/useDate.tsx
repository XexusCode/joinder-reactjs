import { useState } from "react";

interface useDateParams {
  dateStart: Date;
  setDateStart: (date: Date) => void;
  dateEnd: Date;
  setDateEnd: (date: Date) => void;
  eventStartDate?: Date;
  eventEndDate?: Date;
}

export const useDate = (startDate?: Date, endDate?: Date): useDateParams => {
  const [dateStart, setDateStart] = useState(startDate || new Date());
  const [dateEnd, setDateEnd] = useState(endDate || new Date());
  return { dateStart, setDateStart, dateEnd, setDateEnd };
};
