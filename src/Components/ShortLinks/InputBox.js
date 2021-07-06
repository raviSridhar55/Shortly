import React from 'react';
import { InputSection, InputField, Btn2, Form } from '../style/InputBoxStyle';
import BgImg from '../../Assets/bg-shorten-desktop.svg';

const onClick = (e) => {
  console.log('Button This is working');
};
const onSubmit = (e) => {
  e.preventDefault();
  console.log('Form This is working');
};

const InputBox = () => {
  return (
    <InputSection>
      <img src={BgImg} alt='' />
      <InputField>
        <Form onSubmit={onSubmit}>
          <input type='text' placeholder='Shorten a link here...' />
          <Btn2 onClick={onClick} type='submit'>
            Button
          </Btn2>
        </Form>
      </InputField>
    </InputSection>
  );
};

export default InputBox;
