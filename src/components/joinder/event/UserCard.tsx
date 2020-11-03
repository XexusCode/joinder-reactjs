import { UserObjects } from "../../../models/models";
import React from "react";
import { AiFillStar, CgTrash, FaCrown, RiUserFill } from "react-icons/all";
import { useUser } from "../../../modules/activeEvent/hooks/useUser";

interface UserCardParams {
  user: UserObjects;
  handleKickOut: () => void;
  handleRankUp: () => void;
}

export const UserCard = ({
  user,
  handleKickOut,
  handleRankUp,
}: UserCardParams) => {
  const { uid, rank } = useUser();

  return (
    <div className="pb-3">
      <span>
        <RiUserFill size={28} color={user.color} /> {user.username}{" "}
        {user.rank === 0 || user.rank === 1 ? (
          <AiFillStar color={user.rank === 0 ? "gold" : "#00aae4"} />
        ) : (
          <span />
        )}
        {rank <= 2 && uid != user.uid ? (
          <span className="pl-3">
            <span onClick={handleRankUp} className="crown">
              <FaCrown />
            </span>{" "}
            <span onClick={handleKickOut} className="trash">
              <CgTrash />
            </span>{" "}
          </span>
        ) : (
          <span />
        )}
        {uid === user.uid ? <span className="pl-3">[YOU]</span> : <div />}
      </span>
    </div>
  );
};
