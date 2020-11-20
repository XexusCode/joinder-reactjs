import React from "react";
import { CommentObject } from "../../../../models/models";
import moment from "moment";
import { RiUserFill } from "react-icons/all";

interface propsParams {
  comment: CommentObject;
  color: string;
}

export default function Comment({ comment, color }: propsParams) {
  const { userEventUsername, text, date } = comment;

  return (
    <div className="media mb-3 animate__animated animate__fadeIn  ">
      <RiUserFill size={50} color={color} />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">
          {" "}
          {moment(parseInt(date)).fromNow()}
        </small>
        <h6 className="mt-0 mb-1 text-muted">{userEventUsername}</h6>
        <span>{text}</span>
      </div>
    </div>
  );
}
