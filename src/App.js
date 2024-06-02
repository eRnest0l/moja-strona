import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Gra from './pages/Gra.js';
import BMI from './pages/BMI.js';
import Speed from './pages/speed.js';
// import Nawigacja from './components/nawigacja.js';
import Opinie from './pages/opinie.js';
import './styles/_App.scss';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gra" element={<Gra />} />
        <Route path="/speed" element={<Speed />} />
        <Route path="/BMI" element={<BMI />} />
        <Route path="/opinie" element={<Opinie />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
