import { useState } from "react";
import { useDate } from "../modules/home/hooks/useDate";
import { EventObject } from "../models/models";
import { imgUpload } from "../helpers/imgUpload";
import { apiCaller } from "../helpers/apiCaller";
import { useDispatch } from "react-redux";
import { Eventmapping } from "../modules/home/mapping/eventmapping";
import { updateActiveEvent } from "../modules/home/eventActions";

export const useEventModal = (event: EventObject) => {
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
    console.log("prueba");
    if (locationValue !== null) {
      Eventmapping.toEditEvent(
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
              console.log("funciona ?");
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
