import React from "react";
import TourItem from "./TourItem";
import styled from "styled-components";

export const TourList = ({ tours = [] }) => {
  return (
    <StyledUl>
      {tours.map((item) => (
        <TourItem key={item.id} {...item} />
      ))}
    </StyledUl>
  );
};


const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 20px;
`
