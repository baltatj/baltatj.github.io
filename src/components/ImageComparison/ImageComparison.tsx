import { useEffect, useRef, useState } from "react";

// Style
import "./ImageComparison.sass";

/**
 * A display of two images for comparison like: before/after, on/off
 * @param left source path of left image
 * @param right source path of right image
 */
export const ImageComparison = ({
  left,
  right,
}: {
  left: string;
  right: string;
}) => {
  /**
   * TODO: Maybe use a slider-element (input-range)?
   */

  const [sliderOffset, setSliderOffset] = useState<number>(50);
  const [isPointerDown, setPointerDown] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const changeOffset = (amount: number) => {
    let nOffset = sliderOffset + amount;
    if (nOffset < 0) nOffset = 0;
    if (nOffset > 100) nOffset = 100;
    setSliderOffset(nOffset);
  };

  const handleHandleSliderUpdate = (e: React.PointerEvent<HTMLDivElement>) => {
    // console.log("x: ", e.pageX);
    if (isPointerDown) {
      let s: DOMRect | undefined =
        containerRef.current?.getBoundingClientRect();
      // console.log("w | h: ", s?.width, s?.height);
      const offsetX = s ? s.left : 0;
      const containerWidth = s ? s.width : 1;
      // console.log("l : ", s?.left, e.pageX - offsetX);
      let percentage = ((e.pageX - offsetX) / containerWidth) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      // console.log("w : ", e.pageX - offsetX, containerWidth);
      // console.log("p : ", percentage);

      setSliderOffset(percentage);
    }
  };

  return (
    <div
      className="image-comparison"
      onPointerDown={() => {
        setPointerDown(true);
      }}
      onPointerUp={(e) => {
        if (isPointerDown) {
          handleHandleSliderUpdate(e);
        }
        setPointerDown(false);
      }}
      onPointerLeave={() => {
        setPointerDown(false);
      }}
      onPointerCancel={() => {
        setPointerDown(false);
      }}
      onPointerMove={handleHandleSliderUpdate}
      ref={containerRef}
    >
      <div className="img-comp">
        <img src={right} alt="" />
      </div>
      <div className="img-comp overlay" style={{ width: `${sliderOffset}%` }}>
        <img src={left} alt="" />
      </div>
      <div className="slider" style={{ left: `${sliderOffset}%` }}></div>
      <div className="actions">
        <button onClick={() => changeOffset(-10)}>&lt;</button>
        <button onClick={() => changeOffset(10)}>&gt;</button>
      </div>
    </div>
  );
};
