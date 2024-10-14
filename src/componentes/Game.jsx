import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Feedback from './Feedback';

function Game() {
  const { state } = useLocation();
  const playerName = state?.playerName || 'Jugador';
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    if (guessNumber === randomNumber) {
      setFeedback('¡Correcto!');
      setIsCorrect(true);
    } else if (guessNumber < randomNumber) {
      setFeedback('Muy bajo');
    } else {
      setFeedback('Muy alto');
    }
    setAttempts([...attempts, guessNumber]);
    setGuess('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>¡Hola, {playerName}! Adivina el número entre 1 y 100</h1>
      <div 
        style={{
          width: '200px', 
          height: '200px', 
          margin: '20px auto', 
          border: '2px solid black', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '50px'
        }}>
        {isCorrect ? randomNumber : '?'}
      </div>
      <input 
        type="number" 
        value={guess} 
        onChange={(e) => setGuess(e.target.value)} 
        placeholder="Tu adivinanza" 
      />
      <button onClick={handleGuess}>Adivinar</button>
      <Feedback feedback={feedback} />
      <div>
        <h2>Intentos: {attempts.length}</h2>
        <ul>
          {attempts.map((attempt, index) => (
            <li key={index}>Intento {index + 1}: {attempt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Game;
