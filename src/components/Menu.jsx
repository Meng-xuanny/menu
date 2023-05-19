import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((m) => (
        <MenuItem key={m.id} {...m} />
      ))}
    </div>
  );
};

export default Menu;
