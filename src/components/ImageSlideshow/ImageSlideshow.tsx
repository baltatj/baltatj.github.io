import { useEffect, useState } from "react";

// Style
import "./ImageSlideshow.sass";

export const ImageSlideshow = ({}: {}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [images, setImages] = useState([
    "static/pics/slideshow01/01.jpg",
    "static/pics/slideshow01/02.jpg",
  ]);

  useEffect(() => {
    console.log("selectedIndex: ", selectedIndex);
  }, [selectedIndex]);

  const nextSlide = () => {
    setSelectedIndex(selectedIndex + 1);
  };

  const prevSlide = () => {
    setSelectedIndex(selectedIndex - 1);
  };

  return (
    <div className="image-slideshow">
      <div className="actions">
        <button
          className={`${selectedIndex > 0 ? "" : "hide"}`}
          onClick={() => prevSlide()}
        >
          Left
        </button>
        <div className="progress-dots">
          {Array.from(Array(images.length)).map((e, i) => {
            return (
              <div
                key={"oeiaoei" + i}
                className={`${i} ${i === selectedIndex ? "active" : ""}`}
              ></div>
            );
          })}
        </div>
        <button
          className={`${selectedIndex < images.length - 1 ? "" : "hide"}`}
          onClick={() => nextSlide()}
        >
          Right
        </button>
      </div>

      <img src={images[selectedIndex]} alt="" />
    </div>
  );
};
