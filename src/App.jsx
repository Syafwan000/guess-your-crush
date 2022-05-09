import { Route, Routes } from 'react-router-dom';
import HowToPlay from './components/HowToPlay';
import Crush from './components/Crush';
import About from './components/About';
import Home from './components/Home';
import Helmet from 'react-helmet';
import './App.css';

function App() {
  return (
    <>
      <Helmet>
        <title>Guess Your Crush</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/start" element={<Crush />}></Route>
        <Route path="/cara-main" element={<HowToPlay />}></Route>
        <Route path="/tentang" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
