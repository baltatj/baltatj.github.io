import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Skeleton, Typography } from "@mui/material";

import "./LandingPage.sass";
import { ImageSlideshow } from "~components";

const LandingPage = ({ ...props }: {}) => {
  return (
    <div className="landing-page" {...props}>
      <Typography variant="h1" component="h1">
        Portfolio
      </Typography>

      <Container className="container" maxWidth="lg">
        <Typography variant="h2" component="h2">
          Vivents
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={12} md={8}>
            <ImageSlideshow />
          </Grid>
          <Grid xs={12} md={4}>
            <p>
              Kompletter Aufbau von neuer Codebasis (WebGL+ HMTL-UI)
              -Kombination 3D-Lightbaking-Workflow-Entwicklung Blender-Addon
              Websocketverbindung CMS-Anbindung Text-/Videochat-Integration
              React-Statemanagement CMS-Styling Blender-Arbeiten UI-Designs in
              Figma/AdobeXD
            </p>
            <p>
              incidunt laborum vero eligendi beatae adipisci! Sunt cum maiores
              illum dolorum error, nulla sequi natus. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Doloremque quisquam excepturi
              dolore ullam quam eius minus officia facere, perspiciatis rerum?
            </p>
          </Grid>
        </Grid>

        <Typography variant="h2" component="h2">
          PufferSphere-SAP-Landscape
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Skeleton variant="rectangular" height={500} />
            <Skeleton variant="rectangular" height={300} />
          </Grid>
          <Grid xs={4}>
            <p>
              Pufferfish-Sphere: Touch Unity Sphere-Projection CMS-Anbindung
            </p>
            <p>
              Webversion: CMS-Anbindung Rendering Character-Animation
              Kamera-Steuerung
            </p>
          </Grid>
        </Grid>

        <Typography variant="h2" component="h2">
          HairModelling-projekt
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Skeleton variant="rectangular" height={500} />
          </Grid>
          <Grid xs={4}>
            <p>C++, OpenGL, GeometryShader</p>
          </Grid>
        </Grid>

        <Typography variant="h2" component="h2">
          PS Vita Rubiks Cube
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Skeleton variant="rectangular" height={500} />
          </Grid>
          <Grid xs={4}>
            <p>C++, PSVita-SDK</p>
          </Grid>
        </Grid>

        <Typography variant="h2" component="h2">
          UE4 Teamprojekt
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Skeleton variant="rectangular" height={500} />
          </Grid>
          <Grid xs={4}>
            <p>
              Unreal-Engine 4, UI/HUD-Programming, Photogrammetry,
              MoCap-Animationen
            </p>
          </Grid>
        </Grid>

        <Typography variant="h2" component="h2">
          Bachelor-Abschlussarbeit
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Skeleton variant="rectangular" height={500} />
          </Grid>
          <Grid xs={4}>
            <p>NPR-Toonshading (Screen Space-Patterns)</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export { LandingPage };
