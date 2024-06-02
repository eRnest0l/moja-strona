import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/_nawigacja.scss";

function Nawigacja() {
  return (
    <nav>
      <ul>
        <li><Link to="/" className='link-navig'>Strona główna</Link></li>
        <li><Link to="/gra" className='link-navig'>Papier Kamień Nożyczki!</Link></li>
        <li><Link to="/BMI" className='link-navig'>Nowa funkcja! Sprawdz swój BMI już teraz!</Link></li>
        <li><Link to="/speed" className='link-navig'>Speed</Link></li>
        <li><Link to="/opinie" className='link-navig'>Opinie</Link></li>
      </ul>
    </nav>
  );
}

export default Nawigacja;
