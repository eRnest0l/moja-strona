import React, { useState, useEffect } from 'react';
import "../styles/_Globalne-styl.scss";

function SzybkoscPisania() {
  const [tekst, setTekst] = useState('');
  const [wpisanyTekst, setWpisanyTekst] = useState('');
  const [czas, setCzas] = useState(0);
  const [szybkosc, setSzybkosc] = useState(0);
  const [pomiarRozpoczety, setPomiarRozpoczety] = useState(false);

  const rozpocznijPomiar = () => {
    setCzas(0);
    setPomiarRozpoczety(true);
  };

  useEffect(() => {
    let timerId;

    if (pomiarRozpoczety) {
      timerId = setInterval(() => {
        setCzas((prevCzas) => prevCzas + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [pomiarRozpoczety]);

  const zakonczPomiar = () => {
    setPomiarRozpoczety(false);

    const iloscZnakow = wpisanyTekst.replace(/\s+/g, '').length;
    const predkosc = iloscZnakow / (czas / 60); // liczba znaków na minutę
    setSzybkosc(predkosc);
  };

  const handleInputChange = (e) => {
    setWpisanyTekst(e.target.value);
  };

  return (
    <div className='container speed-container'>
      <h2>Licznik szybkości pisania</h2>
      <p>Wpisz poniżej tekst, który chcesz przepisać:</p>
      <textarea
        rows="5"
        cols="50"
        value={tekst}
        onChange={(e) => setTekst(e.target.value)}
      />
      <button onClick={rozpocznijPomiar}>Rozpocznij pomiar</button>
      <button onClick={zakonczPomiar}>Zakończ pomiar</button>
      <p>Wpisz tekst poniżej i zacznij pisać:</p>
      <textarea
        rows="5"
        cols="50"
        value={wpisanyTekst}
        onChange={handleInputChange}
        disabled={!pomiarRozpoczety}
      />
      {pomiarRozpoczety && <p>Czas: {czas} sekund</p>}
      {szybkosc > 0 && <p>Szybkość pisania: {szybkosc.toFixed(2)} znaków na minutę</p>}
    </div>
  );
}

export default SzybkoscPisania;
