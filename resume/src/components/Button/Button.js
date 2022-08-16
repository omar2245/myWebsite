import React from "react";
import { Button } from "@material-ui/core";

import "./Button.css";

const CustomButton = ({ text, icon }) => {
  return (
    <Button
      style={{
        backgroundColor: "#ffcdb2",
        borderRadius: "50px",
      }}
      classname="custom_btn"
      endIcon={icon ? <div className="custom_btn_container">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
