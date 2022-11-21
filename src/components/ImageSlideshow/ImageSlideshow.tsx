import { useEffect, useState } from "react";

// Style
import "./ImageSlideshow.sass";

export const ImageSlideshow = ({ pics }: { pics: Array<string> }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

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
          ◄
        </button>
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
        <button
          className={`${selectedIndex < pics.length - 1 ? "" : "hide"}`}
          onClick={() => nextSlide()}
        >
          ►
        </button>
      </div>

      <img src={pics[selectedIndex]} alt="" />
    </div>
  );
};
