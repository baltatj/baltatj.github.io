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
      <Typography variant="h2" component="h2">
        {props.headline}
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={12} md={8}>
          {/* LEFT CHILDREN */}
          {props.left}
        </Grid>
        <Grid xs={12} md={4}>
          {/* RIGHT CHILDREN */}
          {props.right}
        </Grid>
      </Grid>
    </div>
  );
};
