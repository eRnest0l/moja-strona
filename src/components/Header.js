import React from 'react';
import '../styles/_Header.scss';
// import { Link } from 'react-router-dom';
import Nawigacja from './nawigacja';

const Header = () => (
  <header className="header">
    <h1>Witam na turquoise website!</h1>
    <nav>
    <Nawigacja />
    </nav>
  </header>
);

export default Header;
