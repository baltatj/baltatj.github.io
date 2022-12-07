import React, { Suspense } from "react";

// Style
import { Link, Typography } from "@mui/material";

import "./Footer.sass";

import XingLogo from "/logos/xing.svg?url";
import LinkedinLogo from "/logos/linkedin.svg?url";

export const Footer = ({ ...props }: {}) => {
  const links = {
    xing: "https://www.xing.com/profile/Jeremy_Baltat/cv",
    linkedin: "https://www.linkedin.com/in/jeremy-baltat-61883466/",
  };
  return (
    <div className="footer">
      <Typography variant="h6">Bei Interesse zum Kontakt:</Typography>

      <ul className="social-links">
        <li>
          <Link href={links.xing} target="_blank">
            <img src={XingLogo} alt="xing-logo" />
          </Link>
        </li>
        <li>
          <Link href={links.linkedin} target="_blank">
            <img src={LinkedinLogo} alt="linkedin-logo" />
          </Link>
        </li>
      </ul>
      <Typography variant="h6">&#169; 2022 - Jeremy Baltat</Typography>
    </div>
  );
};
