import React from "react";
import { CommentObject, UserEventObject } from "../../../../models/models";
import moment from "moment";
import { RiUserFill } from "react-icons/all";
import { useAevent } from "../../../../modules/activeEvent/hooks/useAevent";

interface propsParams {
  comment: CommentObject;
}

export default function Comment({ comment }: propsParams) {
  const { userEvents } = useAevent();
  const { userEventUsername, text, date } = comment;
  let userEvent = userEvents.find(
    (user: UserEventObject) => user.username === userEventUsername
  );

  return (
    <div className="media mb-3 animate__animated animate__fadeIn  ">
      <RiUserFill size={50} color={userEvent.color} />

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
