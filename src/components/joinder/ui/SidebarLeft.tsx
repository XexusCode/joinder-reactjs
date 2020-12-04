import {slide as Menu} from "react-burger-menu";
import React from "react";
import "./SidebarLeft.scss";
import {UserCard} from "../event/UserCard";
import {UserEventObject} from "../../../models/models";

interface SidebarLeftParams {
    users: Array<UserEventObject>;
    handleRankUp: (username: string) => void;
    handleKickOut: (username: string) => void;
    userRank: number;
}

export const SidebarLeft = ({
                                users,
                                handleKickOut,
                                handleRankUp,
                                userRank,
                            }: SidebarLeftParams): JSX.Element => {
  return (
    <div role="complementary">
      <Menu>
        <h4>Usuarios Activos</h4>
        <hr />
        {users
          .sort((a, b) => (a.rank >= b.rank ? 1 : -1))
          .map((user) => (
            <UserCard
              handleKickOut={handleKickOut}
              handleRankUp={handleRankUp}
              user={user}
              userRank={userRank}
              key={user.username}
            />
          ))}
      </Menu>
    </div>
  );
};
