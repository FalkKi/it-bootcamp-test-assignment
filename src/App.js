
import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import HomeContainer from './components/Home/HomeContainer';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
