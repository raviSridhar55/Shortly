import styled from 'styled-components';

export const Main = styled.div`
  height: 400px;
  transform: translateY(-25%);
`;

export const InputSection = styled.section`
  /* ... */
  height: 180px;
  background: #35323e;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;

  img {
    height: 100%;
    border-radius: 15px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const InputField = styled.article`
  position: absolute;
  width: 90%;
  height: 40%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Btn2 = styled.button`
  height: 90%;
  width: 20%;
  border: none;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  input {
    height: 90%;
    width: 70%;
    border: none;
    border-radius: 7.5px;
    padding-left: 10px;
  }
`;
