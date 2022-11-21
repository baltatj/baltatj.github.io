import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Link, Skeleton, Typography } from "@mui/material";
import {
  FilterTag,
  ImageSlideshow,
  ProjectListing,
  TagsList,
} from "~components";

import "./LandingPage.sass";

const LandingPage = ({ ...props }: {}) => {
  return (
    <div className="landing-page" {...props}>
      <div className="header">
        <span>Header</span>
        <ul className="socials">
          <li>
            <Link
              target={"_blank"}
              href="https://www.xing.com/profile/Jeremy_Baltat/cv"
            >
              Xing
            </Link>
          </li>
          <li>
            <Link
              target={"_blank"}
              href="https://www.linkedin.com/in/jeremy-baltat-61883466/"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
      <Typography variant="h1" component="h1">
        Portfolio
      </Typography>

      <Container className="container" maxWidth="lg">
        <ProjectListing
          headline="Vivents"
          left={
            <ImageSlideshow
              pics={[
                "static/pics/vivents/img01.jpg",
                "static/pics/vivents/img02.jpg",
                "static/pics/vivents/img03.jpg",
                "static/pics/vivents/img04.jpg",
                "static/pics/vivents/img05.jpg",
                "static/pics/vivents/img06.jpg",
              ]}
            />
          }
          right={
            <>
              <p>
                Produktentwicklung einer Event-/Seminarplatform als
                Web-Applikation mit interaktiven 3D-Szenen
              </p>
              <ul className="decorated">
                <li>Direkte Mitarbeit von ab Start des Projekts.</li>
                <li>
                  Teilnehmer können via Text und Videochat miteinander
                  kommunizieren.
                </li>
                <li>
                  Anschauen von Video(live)streams innerhalb der 3D-Szene
                  möglich.
                </li>
                <li>
                  In Zusammenarbeit mit 3D-Artist-Kollegen eine
                  Workflow-Entwicklung für das Lightbaking der 3D-Modelle zur
                  Leistungsoptimierung. Zur Vereinfachung der Workflowschritte
                  wurde ein eigenes Blender-Addon entwickelt.
                </li>
              </ul>

              <span className="creation-date">Created: 2020-2022</span>
              <TagsList
                tags={[
                  "JS/TS",
                  "React",
                  "Websocket",
                  "REST",
                  "GraphQL",
                  "Directus CMS",
                  "Webpack",
                  "Python",
                  "WebGL",
                  "ThreeJS",
                  "Blender",
                  "Figma",
                  "18n",
                  "Git",
                  "CSS/SASS",
                ]}
              />
            </>
          }
        />
        <ProjectListing
          headline="Sphere-Landscape"
          left={
            <ImageSlideshow
              pics={[
                "static/pics/sphere-landscape/img01.jpg",
                "static/pics/sphere-landscape/img02.jpg",
              ]}
            />
          }
          right={
            <>
              <h3>Das Projekt besteht aus zwei Teilen:</h3>
              <p>
                <ul className="decorated">
                  <li>
                    1. Unity-Applikation Pufferfish Kugeldisplay mit
                    Touch-Steuerung
                  </li>
                  <li>2. Web-Applikation mit interaktiver 3D-Szene</li>
                </ul>
              </p>
              <p>
                Beide Applikationen haben eine Anbindung an ein CMS, das vom
                Kunden eigenständig mit Inhalten gepflegt werden kann.
                {/* Webversion: CMS-Anbindung Rendering Character-Animation
              Kamera-Steuerung */}
              </p>
              <hr />

              <h3>Unity-Applikation:</h3>
              <p>
                Weiterleitung von Touch-Daten der Kugel mithilfe des
                TUIO-Protokolls. Implementierung von Touch-Steuerung zur
                3D-Navigation in der Szene und Wechseln von 2D-Inhalten im UI
              </p>
              <p>
                Mathematische Kugelprojektion("Azimuthal equidistant
                projection") zur Darstellung der 3D-Szene auf dem Kugeldisplay:{" "}
                <br /> Cubemap-Kamera -&gt; Azimuthal projection-plane
              </p>

              <p></p>
              <hr />
              <h3>Web-Applikation:</h3>
              <p>3D-Charaktersteuerung mit Navmesh-Pathfinding in der Szene</p>

              <span className="creation-date">Created: 2021-2022</span>
              <TagsList
                tags={["Unity", "Unity-UI-Toolkit", "GraphQL", "ThreeJS"]}
              />
            </>
          }
        />

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
