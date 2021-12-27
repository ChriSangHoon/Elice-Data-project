import React from "react";
import { Menu, MenuItem } from "../../styles/theme";
import { Link } from "react-router-dom";

function MenuWrapper() {
  return (
    <Menu>
      <MenuItem>
        <Link to="/">about</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/movies">영화 소개</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/team">팀 소개</Link>
      </MenuItem>
    </Menu>
  );
}
export default MenuWrapper;
