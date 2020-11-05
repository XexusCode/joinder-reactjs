import React from "react";
import { EditableForm } from "../../components/joinder/event/EditableForm";
import { DateChangeModal } from "../../components/modals/DateChangeModal";
import { MapView } from "../../components/maps/MapView";

export const ActiveEventInfoView = ({
  editable,
  edit,
  handleSaveValue,
  show,
  setShow,
  aEvent,
}: any) => {
  //Change
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
                <MapView />
              </div>
              <div
                className="col-sm-10 col-md-8 order-md-2 col-xs-8 "
                style={{ border: "0px solid gray" }}
              >
                <h3 className="mb-3">Localización: Castellón </h3>

                <DateChangeModal show={show} setShow={setShow} />
                <h5
                  onClick={() => {
                    setShow(true);
                  }}
                  className="mb-3 editable"
                  style={{ color: "#337ab7" }}
                >
                  {aEvent.start_date} - {aEvent.start_date}
                </h5>
                <h6 className="title-price mb-3">2/20</h6>
                <h3 className="mb-3" style={{ marginTop: "0px" }}>
                  Descripción
                </h3>
                <div>
                  <EditableForm
                    edit={edit}
                    editable={editable}
                    handleSaveValue={handleSaveValue}
                  />
                </div>
                <h6 className="title-price mb-3">hola :)</h6>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
