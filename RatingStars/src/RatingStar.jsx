import React, { useState } from "react";

export const RatingStar = ({ starCount = 10 }) => {
  const [starValue, setStarValue] = useState(0);      // saved rating
  const [hoverValue, setHoverValue] = useState(0);    // preview rating

  return (
    <div className="gold flex space-x-1 text-2xl cursor-pointer select-none">
      {Array.from({ length: starCount }, (_, index) => {
        const starNumber = index + 1;

        return (
          <span
            key={index}
            onClick={() => setStarValue(starNumber)}            // click to set rating
            onMouseEnter={() => setHoverValue(starNumber)}      // preview on hover
            onMouseLeave={() => setHoverValue(0)}               // reset preview
            style={{
              color:
                starNumber <= (hoverValue || starValue)
                  ? "gold"
                  : "gray",
              transition: "color 0.2s ease",
            }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};
