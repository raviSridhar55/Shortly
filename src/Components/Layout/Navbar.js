import React from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.svg";

const Nav = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavL = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 40%;
  justify-content: space-around;
`;

const NavLinks = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  a {
    color: #9e9aa7;
    text-decoration: none;
    padding: 0 10px;
    transition: 400ms ease all;
  }

  a:hover {
    color: #232127;
  }
`;

const Logo = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;

const NavAuth = styled.div`
  height: 100%;
  width: 30%;
  display: grid;
  place-items: center;
`;

const AuthLinks = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  a {
    color: #9e9aa7;
    text-decoration: none;
    padding: 0 10px;
    transition: 400ms ease all;
  }

  a:hover {
    color: #232127;
  }
`;

const Signup = styled.button`
  color: white;
  background-color: #2acfcf;
  padding: 10px 15px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 400ms ease all;
  :hover {
    opacity: 0.6;
  }

  p {
    color: white;
    font-size: 18px;
    text-decoration: none;
    padding: 0 10px;
    transition: 400ms ease all;
    font-weight: 700;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavL>
        <Logo>
          <a href='/'>
            <img draggable={false} src={logo} alt='logo' />
          </a>
        </Logo>
        <NavLinks>
          <a href='#!'>Features</a>
          <a href='#!'>Pricing</a>
          <a href='#!'>Resources</a>
        </NavLinks>
      </NavL>
      <NavAuth>
        <AuthLinks>
          <a href='#!'>Login</a>
          <Signup>
            <p>Sign Up</p>
          </Signup>
        </AuthLinks>
      </NavAuth>
    </Nav>
  );
};

export default Navbar;
