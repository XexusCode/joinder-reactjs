import { useState } from "react";
import { useDate, useDateParams } from "../modules/home/hooks/useDate";
import { EventObject } from "../models/models";
import { imgUpload } from "../helpers/imgUpload";
import { apiCaller } from "../helpers/apiCaller";
import { useDispatch } from "react-redux";
import { EventMapping } from "../modules/home/mapping/EventMapping";
import { updateActiveEvent } from "../modules/home/eventActions";

export interface UseEventModalParams {
  img: string;
  setImg: (img: string) => void;
  dates: useDateParams;
  eventName: string;
  setEventName: (eventName: string) => void;
  locationValue: string;
  setLocationValue: (location: string) => void;
  nmax: number;
  setNmax: (nmax: number) => void;
  show: boolean;
  setShow: (show: boolean) => void;
  handleChangeImg: (e: any) => void;
  handleEditEvent: () => void;
}

export const useEventModal = (event: EventObject): UseEventModalParams => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(event.img);
  const dates = useDate(
    new Date(parseInt(event.startDate)),
    new Date(parseInt(event.endDate))
  );
  const [eventName, setEventName] = useState(event.title);
  const [locationValue, setLocationValue] = useState(event.location);
  const [nmax, setNmax] = useState(1);
  const [show, setShow] = useState(false);
  const { label }: any = locationValue;

  const handleChangeImg = (e: any) => {
    imgUpload(e.target.files[0]).then((resp) => setImg(resp));
  };

  const handleEditEvent = () => {
    if (locationValue !== null) {
      EventMapping.toEditEvent(
        eventName,
        label,
        nmax,
        dates.dateStart.getTime().toString(),
        dates.dateEnd.getTime().toString(),
        img,
        event
      ).then((newEvent) => {
        apiCaller(`events/${event.id}`, newEvent, "PATCH", true).then(
          (respuesta) => {
            if (respuesta.success) {
              dispatch(updateActiveEvent(newEvent));
            } else {
            }
          }
        );
      });
    }
  };

  return {
    img,
    setImg,
    dates,
    eventName,
    setEventName,
    locationValue,
    setLocationValue,
    nmax,
    setNmax,
    show,
    setShow,
    handleChangeImg,
    handleEditEvent,
  };
};
