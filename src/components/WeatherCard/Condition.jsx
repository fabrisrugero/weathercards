import React from "react";
import styled from "@emotion/styled";

const Temp = styled.h1`
  font-family: "Fira Sans", sans-serif;
  font-size: 2rem;
  font-weight: 200;
`;

const State = styled.h3`
  font-family: "Merriweather", sans-serif;
  font-size: 1.2rem;
`;

const Condition = ({ temp, weather }) => {
  const { day } = temp;
  const { main } = weather;
  return (
    <>
      <Temp>{`${day} °C`}</Temp>
      <State>{main}</State>
    </>
  );
};

export default Condition;
