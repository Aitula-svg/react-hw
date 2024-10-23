import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate()
  return (
    <StyledHeader>
      <h1 onClick={()=> navigate ("/")}>Logo</h1>
      <Navigation>
        <Link to="/add-form">AddForm</Link>
        <Link to="/Favorite">Favorite</Link>
        <Link to="/carts">Cart</Link>
        <Link to="/profile">Profile</Link>
      </Navigation>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  padding: 0 40px;

  & > h1 {
    font-size: 32px;
    font-weight: 600;
    color: #000;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export default Header;
