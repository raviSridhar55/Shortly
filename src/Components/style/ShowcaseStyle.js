import styled from 'styled-components';

export const ShowcaseContainer = styled.section`
  /* ... */
  height: 400px;
  position: relative;
  margin-bottom: 50px;
`;

export const Card = styled.div`
  /* ... */
  height: 250px;
  width: 345px;
  z-index: 1;
  border-radius: 5px;
  background-color: white;

  :nth-child(1) {
    position: absolute;
    top: 9%;
    z-index: 1;
    left: 5%;
  }
  :nth-child(3) {
    position: absolute;
    bottom: 9%;
    z-index: 1;
    right: 5%;
  }
  :nth-child(2) {
    position: absolute;
    top: 50%;
    right: 50%;
    z-index: 1;
    transform: translate(50%, -50%);
  }

  h2 {
    color: #232127;
    margin-bottom: 10px;
    font-size: 24px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const Content = styled.div`
  /* ... */
  height: 70%;
  width: 80%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Line = styled.div`
  /* ... */
  height: 10px;
  width: 90%;
  background-color: #2acfcf;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Badge = styled.div`
  /* ... */
  height: 90px;
  width: 90px;
  background-color: #3b3054;
  border-radius: 50%;
  position: absolute;
  left: 5%;
  transform: translateY(-50%);
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
