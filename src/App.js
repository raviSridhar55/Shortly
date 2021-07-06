import './App.css';
import { GlobalStyle } from './Components/style/MainStyle';
import Navbar from './Components/Layout/Navbar';
import Hero from './Components/Layout/Hero';
import MainSection from './Components/ShortLinks/MainSection';
function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <MainSection />
    </div>
  );
}

export default App;
