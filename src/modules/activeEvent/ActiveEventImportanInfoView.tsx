import React from "react";
import { EditableForm } from "../../components/joinder/event/EditableForm";
import { ItemObject } from "../../models/models";
import { AiOutlineMinusCircle, GoPlus } from "react-icons/all";

export const ActiveEventImportantInfoView = ({
  items,
  handleSaveValue,
  edit,
  handleAddTodo,
  handleDeleteTodo,
}: any) => {
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
                <button
                  onClick={handleAddTodo}
                  type="button"
                  className="btn btn-primary btn-circle"
                >
                  <GoPlus />
                </button>

                <button
                  onClick={handleDeleteTodo}
                  type="button"
                  className="btn btn-danger btn-circle"
                >
                  <AiOutlineMinusCircle />
                </button>
                <div
                  className="mb-3"
                  style={{ color: "#337ab7", fontSize: "12" }}
                >
                  <div className="pb-2">
                    {items.map((item: ItemObject) => (
                      <EditableForm
                        editable={item.text}
                        id={item.id}
                        key={item.id}
                        edit={edit}
                        handleSaveValue={handleSaveValue}
                      />
                    ))}
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
