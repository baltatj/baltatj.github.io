import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Style
import { Link, Typography } from "@mui/material";
import { FilterTag, ImageSlideshow, TagsList } from "~components";

import "./Header.sass";

import XingLogo from "/logos/xing.svg?url";
import LinkedinLogo from "/logos/linkedin.svg?url";

export const Header = ({ ...props }: {}) => {
  // useEffect(() => {
  //   console.log(window.scrollY);
  // }, [window.scrollY]);
  const navigate = useNavigate();

  const links = {
    xing: "https://www.xing.com/profile/Jeremy_Baltat/cv",
    linkedin: "https://www.linkedin.com/in/jeremy-baltat-61883466/",
  };

  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <Typography fontWeight={"bold"} variant="h6">
          Jeremy Baltat
        </Typography>
      </div>
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
    </div>
  );
};
