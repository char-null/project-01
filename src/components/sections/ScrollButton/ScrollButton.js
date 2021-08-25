import React from "react";
import "./ScrollButton.css";
import { useEffect, useState } from "react";

const ScrollButton = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <div className="buttonimg">&#8679;</div>
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
    </>
  );
};

export default ScrollButton;
