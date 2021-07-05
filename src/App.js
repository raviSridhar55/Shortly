import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './Components/Layout/Navbar';

const GlobalStyle = createGlobalStyle`
  * {
padding: 0;
margin:0;
box-sizing:border-box;
  }
   body {
    background-color: #eee;
    font-family: 'poppins', sans-serif; 
    color : #9e9aa7;
    font-size: 18px;
    color: #333;
    font-weight: 700;
   }
`;

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0 10px;
`;

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Container>
        <Navbar />
      </Container>
    </div>
  );
}

export default App;
