import React from "react";
import styled from "@emotion/styled";
import weatheImg from "../../img/04n@4x.png";

const Icon = (props) => {
  const Icon = styled.img`
    width: 40%;
  `;

  return <Icon className="icon" src={weatheImg} alt="Weather Icon" />;
};

export default Icon;
