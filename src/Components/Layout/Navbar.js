import React from 'react';
import {
  Nav,
  NavL,
  NavAuth,
  NavLinks,
  Logo,
  AuthLinks,
} from '../style/NavbarStyle';

import { Container, Btn1 } from '../style/MainStyle';
import logo from '../../Assets/logo.svg';

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <NavL>
          <Logo>
            <img src={logo} alt='logo' />
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
            <Btn1>
              <p>Sign Up</p>
            </Btn1>
          </AuthLinks>
        </NavAuth>
      </Nav>
    </Container>
  );
};

export default Navbar;
