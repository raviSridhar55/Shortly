import styled from 'styled-components';

export const FooterSection = styled.footer`
  /* ... */
  height: 290px;
  background-color: #232127;
`;

export const Foo = styled.div`
  height: 290px;
  width: 100%;

  display: flex;
`;

export const FooterLogo = styled.div`
  height: 100%;
  width: 33%;
  padding: 10px;
  position: relative;
  img {
    position: absolute;
    top: 15%;
  }
`;
export const FooterLinks = styled.div`
  padding: 10px;
  height: 100%;
  width: 47%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const FooterSocial = styled.div`
  padding: 10px;
  height: 100%;
  width: 20%;
  position: relative;
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 150px;

  h3 {
    color: #fff;
    margin-bottom: 20px;
    margin-left: 7px;
    font-size: 18px;
  }
`;
export const Link = styled.div`
  display: flex;

  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: space-around;

  a {
    margin-bottom: 5px;
    color: #cbc8cf;
    text-decoration: none;
    padding: 0 10px;
    transition: 400ms ease all;
    font-weight: 500;
    font-size: 16px;
  }
  a:hover {
    color: #2acfcf;
  }
`;

export const Social = styled.div`
  height: 50px;
  width: 100%;
  position: absolute;
  top: 13%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;

  svg {
    fill: white;
    transition: 300ms all ease-in;
    cursor: pointer;
  }
  svg:hover {
    fill: #2acfcf;
  }
`;
