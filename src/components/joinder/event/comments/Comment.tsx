import React from "react";
import { CommentObject } from "../../../../models/models";
import moment from "moment";
import { RiUserFill } from "react-icons/all";

interface propsParams {
  comment: CommentObject;
  color: string;
}

export default function Comment({ comment, color }: propsParams) {
  const { name, message, time } = comment;

  return (
    <div className="media mb-3 animate__animated animate__fadeIn  ">
      <RiUserFill size={50} color={color} />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">
          {" "}
          {moment(time).fromNow()}
        </small>
        <h6 className="mt-0 mb-1 text-muted">{name}</h6>
        <span>{message}</span>
      </div>
    </div>
  );
}
