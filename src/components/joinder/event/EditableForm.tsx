import React from "react";
// @ts-ignore
import EasyEdit from "react-easy-edit";
import { GoCheck, GoX } from "react-icons/all";
import "./EventCard.scss";

export const EditableForm = ({ value, edit, setValue }: any) => {
  const save = (value: any) => {
    setValue(value);
  };
  const cancel = () => {
    alert("Cancelled");
  };

  return (
    <EasyEdit
      className="easy-edit-not-allowed"
      type="text"
      value={value}
      onSave={save}
      onCancel={cancel}
      allowEdit={edit}
      saveButtonLabel={<GoCheck />}
      cancelButtonLabel={<GoX />}
      attributes={{ name: "awesome-input", id: 1 }}
    />
  );
};
