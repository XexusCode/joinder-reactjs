import { UserEventObject } from "../../../models/models";
import React from "react";
import { AiFillStar, CgTrash, FaCrown, RiUserFill } from "react-icons/all";
import { useUser } from "../../../modules/activeEvent/hooks/useUser";

interface UserCardParams {
  user: UserEventObject;
  handleKickOut: (username: string) => void;
  handleRankUp: (username: string) => void;
  userRank: number;
}

export const UserCard = ({
  user,
  handleKickOut,
  handleRankUp,
  userRank,
}: UserCardParams): JSX.Element => {
  const { username } = useUser();

  return (
    <div className="pb-3">
      <span>
        <RiUserFill size={28} color={user.color} /> {user.username}{" "}
        {user.rank === 0 || user.rank === 1 ? (
          <AiFillStar color={user.rank === 0 ? "gold" : "#00aae4"} />
        ) : (
          <span />
        )}
        {userRank <= 2 && username !== user.username ? (
          <span className="pl-3">
            <span
              role="button"
              tabIndex={0}
              onClick={() => handleRankUp(user.username)}
              onKeyDown={() => handleRankUp(user.username)}
              className="crown"
            >
              <FaCrown />
            </span>{" "}
            <span
              role="button"
              tabIndex={-1}
              onClick={() => handleKickOut(user.username)}
              onKeyDown={() => handleKickOut(user.username)}
              className="trash"
            >
              <CgTrash />
            </span>{" "}
          </span>
        ) : (
          <span />
        )}
        {username === user.username ? (
          <span className="pl-3">[YOU]</span>
        ) : (
          <div />
        )}
      </span>
    </div>
  );
};
