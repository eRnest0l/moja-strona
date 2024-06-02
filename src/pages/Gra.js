// import React, { useState } from 'react';
// import "../styles/_Globalne-styl.scss";

// function Gra() {
//   const [wyborGracza, setWyborGracza] = useState(null);
//   const [wyborKomputera, setWyborKomputera] = useState(null);
//   const [wynik, setWynik] = useState(null);

//   const opcje = ['kamień', 'papier', 'nożyce'];

//   const handleWybor = (wybor) => {
//     const wyborKomputera = opcje[Math.floor(Math.random() * 3)];

//     setWyborGracza(wybor);
//     setWyborKomputera(wyborKomputera);

//     if (wybor === wyborKomputera) {
//       setWynik('Remis!');
//     } else if (
//       (wybor === 'kamień' && wyborKomputera === 'nożyce') ||
//       (wybor === 'papier' && wyborKomputera === 'kamień') ||
//       (wybor === 'nożyce' && wyborKomputera === 'papier')
//     ) {
//       setWynik('Wygrałeś!');
//     } else {
//       setWynik('Przegrałeś! TT');
//     }
//   };

//   return (
//     <div className='gra-container'>
//       <h2>Gra w papier, kamień, nożyce</h2>
//       <div className='przycisk-container'>
//         <p>Wybierz jedną z opcji:</p>
//         <button onClick={() => handleWybor('kamień')}>Kamień</button>
//         <button onClick={() => handleWybor('papier')}>Papier</button>
//         <button onClick={() => handleWybor('nożyce')}>Nożyce</button>
//       </div>
//       {wynik && (
//         <div className='content'>
//           <p>Twój wybór: {wyborGracza}</p>
//           <p>Wybór komputera: {wyborKomputera}</p>
//           <p>Wynik: {wynik}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Gra;

import React, { useState } from 'react';
// import Nawigacja from './Nawigacja';
import "../styles/_Globalne-styl.scss";

function Gra() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const choices = ['kamień', 'papier', 'nożyce'];

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computer);
    determineWinner(choice, computer);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult('Remis!');
    } else if (
      (user === 'kamień' && computer === 'nożyce') ||
      (user === 'papier' && computer === 'kamień') ||
      (user === 'nożyce' && computer === 'papier')
    ) {
      setResult('Wygrana!');
    } else {
      setResult('Przegrana!');
    }
  };

  return (
    <div>
      <div className="container gra-container">
        <h2>Gra: Kamień, Papier, Nożyce</h2>
        <div className="content">
          <div>
            <button onClick={() => handleUserChoice('kamień')}>Kamień</button>
            <button onClick={() => handleUserChoice('papier')}>Papier</button>
            <button onClick={() => handleUserChoice('nożyce')}>Nożyce</button>
          </div>
          <p>Twój wybór: {userChoice}</p>
          <p>Wybór komputera: {computerChoice}</p>
          <p>Wynik: {result}</p>
        </div>
      </div>
    </div>
  );
}

export default Gra;
