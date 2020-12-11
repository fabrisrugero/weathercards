import React from "react";
import styled from "@emotion/styled";

function dateConverter(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
  ];
  const year = a.getFullYear();
  const day = days[a.getDay()];
  console.log(a.getDay())
  const month = months[a.getMonth()];
  const date = a.getDate() + "-" + month + "-" + year;
  return { date, day };
}

const Container = styled.div`
  text-align: center;
`;

const Day = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.6rem;
`;

const MyDate = styled.h3`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;

const DayOfWeek = ({ dt }) => {
  const { date, day } = dateConverter(dt);
  return (
    <Container>
      <Day>{day}</Day>
      <MyDate>{date}</MyDate>
    </Container>
  );
};

export default DayOfWeek;
