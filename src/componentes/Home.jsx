import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const nameRef = useRef(null);
  const navigate = useNavigate();

  const startGame = () => {
    const playerName = nameRef.current.value;
    navigate('/game', { state: { playerName } });
  };

  return (
    <div className="home-container">
      <h1>Bienvenido al Juego de Adivina el Número</h1>
      <input 
        type="text" 
        ref={nameRef} 
        placeholder="Ingresa tu nombre" 
        className="name-input" 
      />
      <button onClick={startGame} className="start-button">
        Comenzar Juego
      </button>
    </div>
  );
}

export default Home;
