import React from "react";
import { EditableForm } from "../../components/joinder/event/EditableForm";
import { DateChangeModal } from "../../components/modals/DateChangeModal";
import MapView from "../../components/maps/MapView";
import moment from "moment";
import { EventObject } from "../../models/models";

interface ActiveEventInfoViewParams {
  edit: boolean;
  handleSaveValue: (arg: string, id: number) => void;
  aEvent: EventObject;
  latLngLocation: { lat: number; lng: number };
  eventModal: any;
}

export const ActiveEventInfoView = ({
  edit,
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
                className="col-sm-10 col-md-8 order-md-2 col-xs-8 "
                style={{ border: "0px solid gray" }}
              >
                <h2 className="mb-3">{`${aEvent.location}`}</h2>

                <DateChangeModal
                  eventModal={eventModal}
                  onHide={() => eventModal.setShow(false)}
                />
                <button
                  onKeyDown={() => {
                    eventModal.setShow(true);
                  }}
                  onClick={() => {
                    eventModal.setShow(true);
                  }}
                  className="mb-3 editable"
                  style={{ color: "#337ab7" }}
                >
                  {moment(parseInt(aEvent.startDate)).format(
                    "DD/MM/YYYY [a las] h:mm:ss  "
                  )}{" "}
                  -{" "}
                  {moment(parseInt(aEvent.endDate)).format(
                    "DD/MM/YYYY [a las] h:mm:ss  "
                  )}
                </button>
                <h3 className="title-price mb-3">
                  {aEvent.userEvents.length}/{aEvent.nmax}
                </h3>
                <h3 className="mb-3" style={{ marginTop: "0px" }}>
                  Descripción
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
          </div>
        </div>
      </div>
    </>
  );
};
