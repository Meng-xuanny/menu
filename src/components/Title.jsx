import React from "react";

const Title = ({ text }) => {
  return (
    <div>
      <h2 className="title ">{text || "Default Menu"}</h2>;
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
