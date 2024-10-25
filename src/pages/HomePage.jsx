import styled from "styled-components";
import { PLANTS } from "../utils/constants";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/home-page/${id}`);
  };

  return (
    <StyleUl>
      {PLANTS.map((plant) => (
        <StyledLi key={plant.id} onClick={() => handleNavigate(plant.id)}>
          <StyledImageOne src={plant.image[0]} alt="" />
          <StyleP>{plant.title}</StyleP>

          <StyleB>${plant.price.toFixed(2)}</StyleB>
        </StyledLi>
      ))}
    </StyleUl>
  );
};

const StyledLi = styled.li`
 display: flex;
 flex-direction: column;
 gap: 10px;
  height: fit-content;
  width: 258px;
  
`;

const StyledImageOne = styled.img`
  width: 258px;
  height: 300px;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(84, 157, 70, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(84, 157, 70, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(84, 157, 70, 0.2);
`;

const StyleUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 70px 480px 0 120px;
  list-style: none;
  gap: 70px 30px;
  padding-bottom:100px;
`;

const StyleP = styled.p`
  font-size: 16px;
  color: #3d3d3d;
`;

const StyleB = styled.b`
  font-size: 18px;
  color: #46a358;
`;
