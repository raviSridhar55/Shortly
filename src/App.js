import './App.css';
import { GlobalStyle } from './Components/style/MainStyle';
import Navbar from './Components/Layout/Navbar';
import Hero from './Components/Layout/Hero';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
