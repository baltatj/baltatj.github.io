import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Container, Link, Skeleton, Typography } from "@mui/material";
import {
  Footer,
  Header,
  ImageSlideshow,
  ProjectListing,
  TagsList,
} from "~components";

import "./LandingPage.sass";

const LandingPage = ({ ...props }: {}) => {
  return (
    <div
      className="landing-page"
      {...props}
      // onScroll={(e: any) => {
      //   console.log(window.scrollY);
      // }}
    >
      <Header />
      <Container className="intro-container" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <Avatar
              className="avatar-self"
              alt="Myself"
              src="pics/portrait/jb-circle.png"
              sx={{ width: 256, height: 256 }}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="h1" component="h1" color={"#ffd375"}>
              Hi,
            </Typography>

            <Typography variant="h4" component="h4" mb={3}>
              mein Name ist Jeremy Baltat
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              Ich arbeite mit Leidenschaft an Software- und Kunstprojekten.
              Folgende Projekte entstanden während meines Informatikstudium, in
              der Freizeit oder während Firmenanstellungen.
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
              <Link href="/art" underline="hover" color={"#ffd375"}>
                Was ich sonst noch in meiner Freizeit mache.
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container className="container" maxWidth="lg">
        <ProjectListing
          headline="Vivents"
          left={
            <ImageSlideshow
              pics={[
                "pics/vivents/img04.jpg",
                "pics/vivents/img01.jpg",
                "pics/vivents/img02.jpg",
                "pics/vivents/img03.jpg",
                "pics/vivents/img05.jpg",
                "pics/vivents/img06.jpg",
              ]}
            />
          }
          right={
            <>
              <span className="creation-date">// 2020-2022</span>
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
              <Link
                href="https://www.vivents.io/"
                target="_blank"
                underline="hover"
                sx={{ marginTop: "100px" }}
              >
                Vivents-Website
              </Link>
              <TagsList
                tags={[
                  "TypeScript",
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
                "pics/sphere-landscape/img01.jpg",
                "pics/sphere-landscape/img02.jpg",
              ]}
            />
          }
          right={
            <>
              <span className="creation-date">&#47;&#47; 2021 - 2022</span>

              <h3>Das Projekt besteht aus zwei Teilen:</h3>
              <ul className="decorated">
                <li>
                  1. Unity-Applikation Pufferfish Kugeldisplay mit
                  Touch-Steuerung
                </li>
                <li>2. Web-Applikation mit interaktiver 3D-Szene</li>
              </ul>
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

              <hr />
              <h3>Web-Applikation:</h3>
              <ul className="decorated">
                <li>
                  3D-Charaktersteuerung mit Navmesh-Pathfinding in der Szene
                </li>
                <li>
                  Kamerafahrt-Animation bei Wechsel von Zuständen und
                  Interaktion der Welt
                </li>
              </ul>
              <p></p>

              <TagsList
                tags={[
                  "Unity",
                  "Unity-UI-Toolkit",
                  "GraphQL",
                  "ThreeJS",
                  "Perforce",
                ]}
              />
            </>
          }
        />
        <ProjectListing
          headline="Realtime Haar-Generierung"
          left={<ImageSlideshow pics={["pics/procedural-hair/img01.jpg"]} />}
          right={
            <>
              <span className="creation-date">&#47;&#47; 2019</span>

              <p>
                Hausarbeit im Rahmen des Studien-Wahlpflichtfachs "Realtime
                Rendering"
              </p>
              <p>
                Durch Berechnung des Tangent-Space aus Normalen und Binormalen
                der Meshpolygone, werden mit Hilfe eines Geometry-Shaders die
                Polygone tesseliert und Polylines erzeugt. Durch Farbinformation
                aus bemalbarer Textur, werden Länge und Ausrichtung/Krümmung der
                Haare beeinflusst.
              </p>
              <p>
                Die linke Seite des Fensters zeigt die UV-Map des Models, auf
                der mit variierender Brusheinstellung(im IMGUI-Fenster) und
                Mausinteraktion gemalt werden kann.
              </p>
              <p>
                Auf der rechten Seite wird das gerenderte Mesh in Echtzeit mit
                den generierten Haaren gerendert. Kamera und Licht sind über das
                IMGUI-Fenster und Tastatur-Input züsätzlich einstellbar.
              </p>

              <TagsList tags={["Geometry Shaders", "IMGUI", "C++", "OpenGL"]} />
            </>
          }
        />
        <ProjectListing
          headline="PS Vita Rubiks Cube"
          left={<ImageSlideshow pics={["pics/vita/img01.jpg"]} />}
          right={
            <>
              <span className="creation-date">&#47;&#47; 2018</span>

              <p>
                Studentenprojekt im Rahmen des Curriculums, Fach:
                "Spielekonsolenprogrammierung"
              </p>
              <p>
                Umsetzung eines "Rubiks Cube" auf einem Playstation Vita DevKit,
                mit Touch-Steuerung
              </p>
              <p>
                Eigenständige Einarbeitung in die offizielle Dokumentation des
                SDKs, Shaderprogrammierung, Geometrieerzeugung und -verwaltung
                zum interaktiven Drehen/Animieren der Würfelseiten
              </p>

              <TagsList tags={["C++", "PS-Vita SDK"]} />
            </>
          }
        />
        <ProjectListing
          headline="Unreal-Engine 4 3rd-Person Spiel"
          left={
            <ImageSlideshow
              pics={[
                "pics/arms-unloaded/img02.jpg",
                "pics/arms-unloaded/img01.jpg",
                "pics/arms-unloaded/logo-display.jpg",
              ]}
            />
          }
          right={
            <>
              <span className="creation-date">&#47;&#47; 2017 - 2018</span>

              <p>
                Teamprojekt während des Studiums, mit Entwickleranzahl
                variierend: 4-10
              </p>
              <ul className="decorated">
                <li>Co-Teamleitung und -organisation</li>
                <li>UI und HUD Programmierung</li>
                <li>Implementation eines eigenen Inventarsystems</li>
                <li>Beteiligung an Character-Design-Entwicklung</li>
                <li>Logo- und Plakat-Design</li>
                <li>Erstellung von 3D-Assets mit Photogrammetrie</li>
                <li>
                  Aufnahme und Bearbeitung von Character-Animationen im
                  hochschuleigenen Motion-Capture-Studio
                </li>
                <li>
                  Als Aussteller bei Eventveranstaltungen in Frankfurt und Mainz
                  argiert
                </li>
              </ul>

              <TagsList
                tags={[
                  "C++",
                  "Unreal-Engine",
                  "Photogrammetry",
                  "Motion-Capture",
                ]}
              />
            </>
          }
        />
        {/* <ProjectListing
          headline="Bachelor-Abschlussarbeit"
          left={<ImageSlideshow pics={["pics/placeholder.jpg"]} />}
          right={
            <>
              <span className="creation-date">&#47;&#47; 2020</span>

              <p>...</p>

              <TagsList tags={["Unity", "Non-photorealistic rendering"]} />
            </>
          }
        /> */}
      </Container>

      <Footer />
    </div>
  );
};

export { LandingPage };
