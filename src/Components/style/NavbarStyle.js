import styled from 'styled-components';

export const Nav = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavL = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 40%;
  justify-content: space-around;
`;

export const NavLinks = styled.div`
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

export const Logo = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;

export const NavAuth = styled.div`
  height: 100%;
  width: 30%;
  display: grid;
  place-items: center;
`;

export const AuthLinks = styled.div`
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
