// Style
import { Container, Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FilterTag, ImageSlideshow, TagsList } from "~components";

import "./ProjectListing.sass";

export const ProjectListing = ({
  ...props
}: {
  headline: string;
  left: React.ReactNode | React.ReactNode[];
  right: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <div className="project-listing">
      {/* <Typography variant="h2" component="h2">
        {props.headline}
      </Typography> */}
      <Grid container spacing={2}>
        <Grid xs={12} md={7}>
          {/* LEFT CHILDREN */}
          {props.left}
        </Grid>
        <Grid
          xs={12}
          md={5}
          padding={{ xs: "0 20px 10px 20px", md: "5px 20px 10px 10px" }}
        >
          {/* RIGHT CHILDREN */}
          <Typography variant="h4">{props.headline}</Typography>
          {props.right}
        </Grid>
      </Grid>
    </div>
  );
};
