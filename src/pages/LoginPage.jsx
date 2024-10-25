import styled from "styled-components";
import { BiImage } from "react-icons/bi";

export const LoginPage = () => {
  return (
    <>
      <StyleH4>Personal Information</StyleH4>

      <StyledDivFirst>
        <StyledThreeInputs>
          <StyleLabel htmlFor="name">
            First Name <StyleSpan>*</StyleSpan>
          </StyleLabel>
          <StyleInputOne type="text" name="name" />
          <StyleLabel htmlFor="adress">
            Email address <StyleSpan>*</StyleSpan>
          </StyleLabel>
          <StyleInputOne type="text" name="adress" />
          <StyleLabel htmlFor="username">
            Username <StyleSpan>*</StyleSpan>
          </StyleLabel>
          <StyleInputOne type="text" name="username" />
        </StyledThreeInputs>
        <StyledDivFour>
          <StyledLast>
            <StyleLabel htmlFor="lastname">
              Last Name <StyleSpan>*</StyleSpan>
            </StyleLabel>
            <StyleInputOne type="text" name="lastname" />
          </StyledLast>
          <StyleDivNum>
            <StyledDivFour>
              <label>Phone Number <StyleSpan>*</StyleSpan></label>
            </StyledDivFour>
            <StyleInputs>
              <StyleSelect>
                <option value="kg">+996</option>
                <option value="ru">+7</option>
              </StyleSelect>

              <StyleInputNum />
            </StyleInputs>
          </StyleDivNum>
          <StyledDivBtn>
            <div>
            <StyleP>Photo</StyleP>
            <StyleQuare>
          

              <BiImage className="image" />
            </StyleQuare>
            

            </div>
            <StyledDivFor>
            
            <StyledChange>Change</StyledChange>
            <StyledRemove>Remove</StyledRemove>
            </StyledDivFor>
          </StyledDivBtn>
          
          
        </StyledDivFour>

      </StyledDivFirst>
    </>
  );
};

const StyleLabel = styled.label`
  display: flex;
  
  
`;

const StyleInputOne = styled.input`
  width: 417px;
  height: 40px;
  border: 1px solid #eaeaea;
`;

const StyledDivFirst = styled.div`
  display: flex;
  gap: 45px;
  padding: 20px 0 0 0;
  justify-content: center;
`;

const StyledDivFour = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyleSelect = styled.select`
  width: 78px;
  height: 40px;
  font-size: large;
  padding-left: 10px;
  border: 1px solid #eaeaea;
`;

const StyleDivNum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyleInputs = styled.div`
  display: flex;
  gap: 15px;
`;

const StyleInputNum = styled.input`
  width: 329px;
  height: 40px;
  border: 1px solid #eaeaea;
`;

const StyleQuare = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaeaea;
  
  
  .image {
    font-size: 20px;
    color: green;
  }
`;

const StyledDivBtn = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 10px;
  
`;

const StyledChange = styled.button`
  width: 98px;
  height: 40px;
  background-color: #46a358;
  color: #ffffff;
  border: none;
  font-size: 14px;
  border-radius: 3px;
`;

const StyledRemove = styled.button`
  width: 98px;
  height: 40px;
  border: none;
  background-color: white;
  font-size: 14px;
`;

const StyledThreeInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyleH4 = styled.h4`
  margin-left: 360px;
  padding-top: 100px;
`;

const StyledDivFor = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 10px;
`

const StyleP = styled.p`
  padding-bottom: 5px;
`

const StyleSpan = styled.span`
  color: red;
  margin-left: 30px;
` 

const StyledLast = styled.div`
display:flex;
flex-direction:column;
gap:15px;`