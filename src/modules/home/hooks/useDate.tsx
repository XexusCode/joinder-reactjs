import { useState } from "react";

export const useDate = () => {
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  return { dateStart, setDateStart, dateEnd, setDateEnd };
};
