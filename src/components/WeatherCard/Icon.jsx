import React from "react";
import styled from "@emotion/styled";

const IconImg = styled.img`
  width: 40%;
`;

const Icon = ({ weather }) => {
  const { icon } = weather;
  const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return <IconImg className="icon" src={weatherIcon} alt="Weather Icon" />;
};

export default Icon;
