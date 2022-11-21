// SVG
// import IconX from "./static/icons/icon-x.svg";
// Style
import { Link } from "@mui/material";
import { tagLabels } from "~types";
import "./FilterTag.sass";

export const FilterTag = ({ label }: { label: tagLabels }) => {
  return (
    <button className="filter-tag">
      <span className="label">{label}</span>
    </button>
  );
};
