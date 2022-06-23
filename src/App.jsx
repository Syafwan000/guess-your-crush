import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HowToPlay from './components/HowToPlay';
import Crush from './components/Crush';
import About from './components/About';
import Home from './components/Home';
import Helmet from 'react-helmet';
import Loading from './assets/loading-bar.gif';
import './App.css';

function App() {
  // const [preload, setPreload] = useState(true);
  // const [waitLoad, setWaitLoad] = useState(true);

  // setTimeout(function() {
  //   setWaitLoad(false);
  // }, 2000);

  // setTimeout(function() {
  //   setPreload(false);
  // }, 4000);

  // if(preload) {
  //   return (
  //     <>
  //       <Helmet>
  //         <title>GuessYourCrush</title>
  //       </Helmet>
  //       <div className="preload">
  //         {waitLoad === true ?
  //           <div className="preload-content">
  //             <h1 className="preload-title">GuessYour<span className="preload-change">Crush</span></h1>
  //             <p className="preload-desc">"Tebak nama siapapun"</p>
  //             <img width="80" src={Loading} alt="Loading..." />
  //           </div>          
  //           :
  //           <div className="animate__animated animate__delay-1s animate__slow animate__fadeOut">
  //             <h1 className="preload-title">GuessYour<span className="preload-change">Crush</span></h1>
  //             <p>──────</p>
  //           </div>
  //         }
  //       </div>
  //     </>
  //   )
  // }

  return (
    <>
      <Helmet>
        <title>GuessYourCrush</title>
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
