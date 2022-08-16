import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">Omar Yu</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by <span>Omar Yu</span>
          <br />
          Clone idea from{" "}
          <a href="https://themeforest.net/user/tavonline" target="_blank">
            Tavonline
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
