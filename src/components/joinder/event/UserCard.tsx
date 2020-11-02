import { UserObjects } from "../../../models/models";
import React from "react";
import { AiFillStar, RiUserFill } from "react-icons/all";
import { useUser } from "../../../modules/activeEvent/hooks/useUser";

export const UserCard = (user: UserObjects) => {
  const { uid } = useUser();
  return (
    <div className="pb-3">
      <RiUserFill size={28} color={user.color} /> {user.username}{" "}
      {user.rank === 0 || user.rank === 1 ? (
        <AiFillStar color={user.rank === 0 ? "gold" : "#00aae4"} />
      ) : (
        <span />
      )}
      {uid === user.uid ? <span className="pl-3">[YOU]</span> : <div />}
    </div>
  );
};
