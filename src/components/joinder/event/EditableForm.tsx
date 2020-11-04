import React from "react";
// @ts-ignore
import EasyEdit from "react-easy-edit";
import { GoCheck, GoX } from "react-icons/all";
import "./EventCard.scss";
import { ActiveEventEditableParams } from "../../../modules/activeEvent/ActiveEventParams";

export const EditableForm = ({
  editable,
  edit,
  handleSaveValue,
}: ActiveEventEditableParams) => {
  return (
    <EasyEdit
      className="easy-edit-not-allowed"
      type="text"
      value={editable}
      onSave={handleSaveValue}
      onCancel={() => {}}
      allowEdit={edit}
      saveButtonLabel={<GoCheck />}
      cancelButtonLabel={<GoX />}
      attributes={{ name: "awesome-input", id: 1 }}
    />
  );
};
