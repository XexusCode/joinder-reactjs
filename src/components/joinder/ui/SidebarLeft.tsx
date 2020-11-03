import { slide as Menu } from "react-burger-menu";
import React from "react";
import "./SidebarLeft.scss";
import { UserCard } from "../event/UserCard";
import { UserObjects } from "../../../models/models";

interface SidebarLeftParams {
  users: Array<UserObjects>;
  handleRankUp: () => void;
  handleKickOut: () => void;
  userRank: number;
}

export const SidebarLeft = ({
  users,
  handleKickOut,
  handleRankUp,
  userRank,
}: SidebarLeftParams) => {
  return (
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
            key={user.uid}
          />
        ))}
    </Menu>
  );
};
