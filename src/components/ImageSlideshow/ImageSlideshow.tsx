import { useEffect, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
// Style
import "./ImageSlideshow.sass";

export const ImageSlideshow = ({ pics }: { pics: Array<string> }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log("selectedIndex: ", selectedIndex);
  }, [selectedIndex]);

  const nextSlide = () => {
    setSelectedIndex(selectedIndex + 1);
  };

  const prevSlide = () => {
    setSelectedIndex(selectedIndex - 1);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #000",
    boxShadow: 24,
  };

  return (
    <div className="image-slideshow">
      <Modal
        className="slideshow-modal"
        open={isModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <button className="close-btn" onClick={() => setModalOpen(false)}>
            X
          </button>
          <Box sx={style} className="image-modal">
            <img src={pics[selectedIndex]} alt="" />
          </Box>
        </>
      </Modal>
      <div className="img-wrapper">
        <img
          src={pics[selectedIndex]}
          alt=""
          onClick={() => {
            setModalOpen(true);
          }}
        />
        <div className="actions">
          <button
            className={`${selectedIndex > 0 ? "" : "hide"}`}
            onClick={() => prevSlide()}
          >
            ◄
          </button>

          <button
            className={`${selectedIndex < pics.length - 1 ? "" : "hide"}`}
            onClick={() => nextSlide()}
          >
            ►
          </button>
        </div>
      </div>
      <div className="progress">
        <div className="progress-dots">
          {Array.from(Array(pics.length)).map((e, i) => {
            return (
              <div
                key={"progress-dot" + i}
                className={`${i} ${i === selectedIndex ? "active" : ""}`}
                onClick={() => {
                  setSelectedIndex(i);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
