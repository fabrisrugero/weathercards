import React from "react";
import Icon from "./Icon";
import DayOfWeek from "./DayOfWeek";
import Condition from "./Condition";
import styled from "@emotion/styled";

const calcTemp = (temp) => {
  let highColor, lowColor, color;
  if (temp >= 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    color = "HOT";
  } else {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    color = "COLD";
  }
  return { highColor, lowColor, color };
};

const getBG = (colors) => {
  const { highColor, lowColor, color } = colors;
  switch (color) {
    default:
      return "";
    case "HOT":
      return `linear-gradient(
        to top,
        rgba(255, ${highColor}, 0),
        rgba(255, ${lowColor}, 0)
      );`;
    case "COLD":
      return `linear-gradient(
        to top,
        rgba(0, ${highColor}, 255),
        rgba(0, ${lowColor}, 255)
      );`;
  }
};

const WeatherCard = ({ stats }) => {
  console.log(stats);
  const { temp, weather, dt } = stats;
  const { day } = temp;
  const Card = styled.div`
    width: 200px;
    height: 240px;
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
    align-items: center;
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-around;
    background: ${getBG(calcTemp(day))};
  `;
  return (
    <Card>
      <DayOfWeek dt={dt} />
      <Icon weather={weather[0]} />
      <Condition temp={temp} weather={weather[0]} />
    </Card>
  );
};

export default WeatherCard;
