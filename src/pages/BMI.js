import React, { useState } from 'react';
import "../styles/_Globalne-styl.scss";

function BMI() {
  const [masa, setMasa] = useState('');
  const [wzrost, setWzrost] = useState('');
  const [wynik, setWynik] = useState(null);
  const [kategoriaBMI, setKategoriaBMI] = useState('');

  const obliczBMI = () => {
    const masaFloat = parseFloat(masa);
    const wzrostFloat = parseFloat(wzrost) / 100;
    if (!isNaN(masaFloat) && !isNaN(wzrostFloat) && wzrostFloat > 0) {
      const bmi = masaFloat / (wzrostFloat * wzrostFloat);
      setWynik(bmi.toFixed(2));

      if (bmi >= 0 && bmi < 18.5) {
        setKategoriaBMI('Niedowaga');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setKategoriaBMI('Normalne');
      } else if (bmi >= 25 && bmi < 29.9) {
        setKategoriaBMI('Nadwaga');
      } else if (bmi >= 29.9 && bmi < 40) {
        setKategoriaBMI('Otyłość');
      } else {
        setKategoriaBMI('не ври тоже');
      }
    } else {
      setWynik(null);
      setKategoriaBMI('');
    }
  };

  return (
    <div className="container bmi-container">
      <h2>Oblicz BMI</h2>
      <div className="form">
        <label>
          Masa ciała (kg):
          <input type="number" value={masa} onChange={(e) => setMasa(e.target.value)} />
        </label>
        <label>
          Wzrost (cm):
          <input type="number" value={wzrost} onChange={(e) => setWzrost(e.target.value)} />
        </label>
        <button onClick={obliczBMI}>Oblicz BMI</button>
      </div>
      {wynik !== null && (
        <div className="content">
          <p>Twoje BMI wynosi: {wynik}</p>
          <p>Kategoria BMI: {kategoriaBMI}</p>
        </div>
      )}
    </div>
  );
}

export default BMI;
