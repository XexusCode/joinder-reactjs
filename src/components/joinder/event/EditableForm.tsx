import React from "react";

import EasyEdit from "react-easy-edit";
import { GoCheck, GoX } from "react-icons/all";
import "./EventCard.scss";
import { ActiveEventEditableParams } from "../../../modules/activeEvent/ActiveEventParams";
export const EditableForm = ({
  id,
  editable,
  edit,
  handleSaveValue,
}: ActiveEventEditableParams): JSX.Element => {
  return (
    <div className="animate__animated animate__fadeIn">
      <EasyEdit
        className="easy-edit-not-allowed"
        type="text"
        value={editable}
        onSave={(value: string) => {
          if (id != null) {
            handleSaveValue(value, id);
          } else {
            handleSaveValue(value, (id = 0));
          }
        }}
        allowEdit={edit}
        saveButtonLabel={<GoCheck />}
        cancelButtonLabel={<GoX />}
        attributes={{ name: "awesome-input", id: 1 }}
      />
    </div>
  );
};
