import React from "react";
import { useRecoilState } from "recoil";
import { starState } from "../../states/userState";
import FavoriteIcon from "@mui/icons-material/Favorite";
const colors = {
  orange: "#FFBA5A",
  gray: "#a9a9a9",
};

const Star = () => {
  const [currentValue, setCurrentValue] = useRecoilState(starState);
  const [hoverStar, setHoverStar] = React.useState(undefined);
  const handleSelect = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverStar(value);
  };
  const handleMouseLeave = () => {
    setHoverStar(undefined);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <span
            key={index}
            onClick={() => handleSelect(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
          >
            <FavoriteIcon
              style={{
                color:
                  (hoverStar || currentValue) > index
                    ? colors.orange
                    : colors.gray,
              }}
            />
          </span>
        );
      })}
    </div>
  );
};

export default Star;
