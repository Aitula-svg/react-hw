import styled from "styled-components";
import LogoIcon from "../assets/icons/logo-icon.svg?react";
import SearchIcon from "../assets/icons/search-icon.svg?react";
import CartIcon from "../assets/icons/cart-icon.svg?react";
import LogOutIcon from "../assets/icons/logout-icon.svg?react";

import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <LogoIcon />
      <NavigationHeader>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "unActive")}
          to={"home-page"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "unActive")}
          to={"shop-page"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "unActive")}
          to={"plant-care"}
        >
          Plant Care
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "unActive")}
          to={"blog"}
        >
          Blogs
        </NavLink>
   
      </NavigationHeader>

      <ContainerActions>
        <SearchIcon />
        <CartIcon />
        <StyleBunttonLogin onClick={() => navigate("/sign-in")}>
          <LogOutIcon />
          Login
        </StyleBunttonLogin>
      </ContainerActions>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 53px;
  justify-content: space-between;
  border-bottom: 0.3px solid #46A35880;
  padding: 0px 120px 0 120px ;
  margin-top: 16px;

`;

const NavigationHeader = styled.nav`
  display: flex;
  align-content: center;
  gap: 50px;

  a.active {
    border-bottom: 3px solid #46a358;
  }

  a.unActive {
    border-bottom: none;
  }

  a {
    text-decoration: none;
  }
`;

const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const StyleBunttonLogin = styled.button`
  width: 100px;
  height: 35px;
  background-color: #46A358;
  border-radius: 6px;
  border: none;
  color: white;
  display:flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  font-weight: 500;

`
