import React from "react";
import { slide as Menu } from "react-burger-menu";
import { UserCard } from "../event/UserCard";

const SidebarLeft = () => {
  return (
    <Menu>
      <UserCard username="eqwe" uid="qwe" color="321qewqw" rank="qwefewq" />
      {/*<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>*/}
    </Menu>
  );
};

export default SidebarLeft;
