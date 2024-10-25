import { useParams } from "react-router-dom";
import { PLANTS } from "../utils/constants";
import styled from "styled-components";

export const DetailPage = () => {
  const { plantId } = useParams();

  const currentFind = PLANTS.find((item) => item.id === plantId);
  console.log(currentFind);

  return (
    <StyleConteiner>
      <StyleDivconteiner>
        {currentFind.image.map((item) => (
          <StyledFourimg src={item} />
        ))}{" "}
      </StyleDivconteiner>
      <div>
        <StyledImg src={currentFind.image[0]} />
      </div>
      <StyleText>
        <StyleH1>{currentFind.title}</StyleH1>
        <StyleB>${currentFind.price}</StyleB>
        <StyleButtom></StyleButtom>

        <StyleDescripton>{currentFind.description}</StyleDescripton>
      </StyleText>
    </StyleConteiner>
  );
};

const StyledImg = styled.img`
  width: 444px;
  height: 444px;
`;

const StyleConteiner = styled.div`
  display: flex;
  padding: 97px 180px 0px 121px;
  gap: 52px;
`;

const StyledFourimg = styled.img`
  width: 100px;
  height: 100px;
`;

const StyleDivconteiner = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleH1 = styled.h1`
  font-size: 28px;
`;

const StyleB = styled.b`
  font-size: 22px;
  color: #46a358;
`;

const StyleDescripton = styled.p`
  font-size: 14px;
  color: #727272;
`;

const StyleText = styled.div`
display:flex;
flex-direction:column;
gap:15px;`

const StyleButtom = styled.div`
border-bottom: 0.3px solid #46A35880;
  
`
