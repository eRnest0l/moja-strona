import React, { useState } from 'react';
import "../styles/_Globalne-styl.scss";

function Opinie() {
  const [opinie, setOpinie] = useState([]);
  const [nowaOpinia, setNowaOpinia] = useState('');

  const dodajOpinie = () => {
    setOpinie([...opinie, nowaOpinia]);
    setNowaOpinia('');
  };

  return (
    <div className='container opinie-container'>
      <h2>Opinie prawdziwych użytkowników:</h2>
      <ul><li>bardzo dobra strona</li>
      
      </ul>
      <h2>Wasze opinie:</h2>
      <div className='content'>
      <ul>
        {opinie.map((opinia, index) => (
          <li key={index}>{opinia}</li>
        ))}
      </ul>
      </div>
      <textarea value={nowaOpinia} onChange={(e) => setNowaOpinia(e.target.value)}></textarea>
      <div className='przycisk-container'>
      <button onClick={dodajOpinie}>Dodaj opinię</button>
      </div>
    </div>
  );
}

export default Opinie;
