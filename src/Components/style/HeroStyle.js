import styled from 'styled-components';

export const HeroSection = styled.section`
  height: 90vh;
  display: flex;
  background: white;
  position: relative;
`;

export const Section1 = styled.section`
  height: 80%;
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Section1Content = styled.article`
  height: 400px;
  width: 500px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;
export const Section2 = styled.section`
  width: 50%;
  height: 80%;

  position: relative;
  img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(15%, -50%);
  }
`;
export const Title = styled.h1`
  text-align: left;
  font-size: 65px;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #232127;
`;
export const Lead = styled.p`
  color: #9e9aa7;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const ShowCaseSection = styled.section`
  display: grid;
  place-items: center;
  height: 250px;
`;

export const ShowcaseBox = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h1 {
    text-transform: capitalize;
    font-size: 35px;
    margin-bottom: 10px;
    color: #232127;
  }

  h2 {
    text-transform: capitalize;
    font-size: 35px;
    margin-bottom: 10px;
    color: white;
  }

  p {
    font-weight: 500;
  }
`;
