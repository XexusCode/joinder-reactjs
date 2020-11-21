import React from "react";
import { EditableForm } from "../../components/joinder/event/EditableForm";
import { DateChangeModal } from "../../components/modals/DateChangeModal";
import MapView from "../../components/maps/MapView";
import moment from "moment";
import { EventObject } from "../../models/models";

interface ActiveEventInfoViewParams {
  edit: boolean;
  handleSaveValue: (arg: string, id: number) => void;
  show: boolean;
  setShow: (arg: boolean) => void;
  aEvent: EventObject;
  latLngLocation: { lat: number; lng: number } | any;
}

export const ActiveEventInfoView = ({
  edit,
  handleSaveValue,
  show,
  setShow,
  aEvent,
  latLngLocation,
}: ActiveEventInfoViewParams) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="container border"
            style={{ backgroundColor: "#f8f8f8" }}
          >
            <div className="row">
              <div
                id="product1"
                className="col-sm-2 col-xs-4 col-md-4 order-md-1 item-photo"
              >
                <MapView position={latLngLocation} center={latLngLocation} />
              </div>
              <div
                className="col-sm-10 col-md-8 order-md-2 col-xs-8 "
                style={{ border: "0px solid gray" }}
              >
                <h3 className="mb-3">Localización: {aEvent.location} </h3>

                <DateChangeModal show={show} setShow={setShow} />
                <h5
                  onClick={() => {
                    setShow(true);
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
                </h5>
                <h6 className="title-price mb-3">
                  {aEvent.userEvents.length}/{aEvent.nmax}
                </h6>
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
