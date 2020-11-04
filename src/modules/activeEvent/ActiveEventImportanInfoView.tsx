import React from "react";
import { EditableForm } from "../../components/joinder/event/EditableForm";
import { ActiveEventEditableItemsParams } from "./ActiveEventParams";

export const ActiveEventImportantInfoView = ({
  listOption0,
  listOption1,
  listOption2,
  listOption3,
  handleSaveOption0,
  handleSaveOption1,
  handleSaveOption2,
  handleSaveOption3,
  edit,
}: ActiveEventEditableItemsParams) => {
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
                className="col-sm-10 col-md-8 order-md-2 col-xs-8 "
                style={{ border: "0px solid gray" }}
              >
                <h2 className="mb-3">Cosas Importantes </h2>
                <div
                  className="mb-3"
                  style={{ color: "#337ab7", fontSize: "12" }}
                >
                  <div className="pb-2">
                    <EditableForm
                      edit={edit}
                      editable={listOption0}
                      handleSaveValue={handleSaveOption0}
                    />
                  </div>
                  <div className="pb-2">
                    <EditableForm
                      edit={edit}
                      editable={listOption1}
                      handleSaveValue={handleSaveOption1}
                    />
                  </div>
                  <div className="pb-2">
                    <EditableForm
                      edit={edit}
                      editable={listOption2}
                      handleSaveValue={handleSaveOption2}
                    />
                  </div>
                  <div className="pb-2">
                    <EditableForm
                      edit={edit}
                      editable={listOption3}
                      handleSaveValue={handleSaveOption3}
                    />
                  </div>
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
