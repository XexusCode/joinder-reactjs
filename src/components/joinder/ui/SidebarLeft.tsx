import { slide as Menu } from "react-burger-menu";
import React from "react";
import "./SidebarLeft.scss";
import { UserCard } from "../event/UserCard";
import { UserObjects } from "../../../models/models";

interface SidebarLeftParams {
  users: Array<UserObjects>;
}

export const SidebarLeft = ({ users }: SidebarLeftParams) => {
  return (
    <Menu>
      <h4>Usuarios Activos</h4>
      <hr />
      {users
        .sort((a, b) => (a.rank >= b.rank ? 1 : -1))
        .map((user) => (
          <UserCard key={user.uid} {...user} />
        ))}
    </Menu>
  );
};
