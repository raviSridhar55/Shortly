import React from 'react';
import InputBox from './InputBox';
import { Main } from '../style/InputBoxStyle';
import { Container } from '../style/MainStyle';

const MainSection = () => {
  return (
    <Main>
      <Container>
        <InputBox />
      </Container>
    </Main>
  );
};

export default MainSection;
