import React from "react";
import { ButtonType } from "~enums";
import Button from "@mui/material/Button";

import "./LandingPage.sass";

const LandingPage = ({ ...props }: {}) => {
  return (
    <div className="landing-page" {...props}>
      <h1>Portfolio</h1>
    </div>
  );
};

export { LandingPage };
