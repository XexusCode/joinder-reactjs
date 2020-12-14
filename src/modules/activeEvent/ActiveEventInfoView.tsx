import React from "react";
import { EditableForm } from "../../components/joinder/event/EditableForm";
import { DateChangeModal } from "../../components/modals/DateChangeModal";
import MapView from "../../components/maps/MapView";
import moment from "moment";
import { EventObject } from "../../models/models";
import { UseEventModalParams } from "../../customHooks/useEventModal";
import { FaEdit } from "react-icons/all";

interface ActiveEventInfoViewParams {
  edit: boolean;
  editAdmin: boolean
  handleSaveValue: (arg: string, id: number) => void;
  aEvent: EventObject;
  latLngLocation: { lat: number; lng: number };
  eventModal: UseEventModalParams;
}

export const ActiveEventInfoView = ({
  edit,
    editAdmin,
  handleSaveValue,
  eventModal,
  aEvent,
  latLngLocation,
}: ActiveEventInfoViewParams): JSX.Element => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="container border"
            style={{ backgroundColor: "#f8f8f8" }}
          >
            <div className="row">
              <div
                aria-label="Mapa"
                id="product1"
                className="col-sm-12 col-xs-8 col-md-4 order-md-12 item-photo"
              >
                <MapView position={latLngLocation} center={latLngLocation} />
              </div>
              <div
                className="col-sm-10 col-md-8 order-md-2 col-xs-8  "
                style={{ border: "0px solid gray" }}
              >
                <h2 className="mb-3">{`${aEvent.location}`}</h2>
                <DateChangeModal
                  eventModal={eventModal}
                  onHide={() => eventModal.setShow(false)}
                />
                <span className="badge badge-success ">
                  {moment(parseInt(aEvent.startDate)).format(
                    "DD/MM/YYYY [a las] h:mm:ss     "
                  )}
                </span>
                <span className="badge badge-danger ml-5 ">
                  {moment(parseInt(aEvent.endDate)).format(
                    "DD/MM/YYYY [a las] h:mm:ss  "
                  )}
                </span>

                <h3 style={ aEvent.nmax>aEvent.userEvents.length ? {color:'green'} : {color:'red'} } className="title-price mb-3">
                  {aEvent.userEvents.length}/{aEvent.nmax}
                </h3>

                <div>
                  <EditableForm
                    edit={edit}
                    editable={aEvent.description}
                    handleSaveValue={handleSaveValue}
                  />
                </div>
                <br />
              </div>
            </div>
            {
              editAdmin ?  <span className="editable">
              <FaEdit onClick={() => eventModal.setShow(true)} size={30} />
            </span> : null
            }

          </div>
        </div>
      </div>
    </>
  );
};
