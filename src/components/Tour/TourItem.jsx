import React from "react";
import styled from "styled-components";

const TourItem = ({ id, title, price, imageUrl, description, date }) => {
  return (
    <StyledLi>
      <StyleP>{id}</StyleP>
      <StyleImg src={imageUrl} alt="" />

      <StyleH3>{title}</StyleH3>
      <StyleDIv>
        <b>{price}</b>
        <span>{date}</span>
      </StyleDIv>
      <StyleH1>{description}</StyleH1>

      <StyledBtn>
        {" "}
        <StyledButton>Посмотреть</StyledButton>
      </StyledBtn>
    </StyledLi>
  );
};

export default TourItem;

const StyledLi = styled.li`
  width: 350px;
  height: 450px;
  border: 1px solid black;
  height: fit-content;
`;

const StyleImg = styled.img`
  width: 350px;
  height: 300px;
  border: 1px solid black;
`;

const StyleP = styled.p`
  font-size: 0%;
`;

const StyleH3 = styled.h3`
  font-size: 24px;
  color: black;
  margin-left: 15px;
`;

const StyleDIv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const StyleH1 = styled.h1`
  font-size: 16px;
  padding: 15px;
`;

const StyledBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom:10px
`;

const StyledButton = styled.button`
width:120px;
height:30px;
background-color: black;
color: white;
cursor: pointer;
`
