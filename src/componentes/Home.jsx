import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const nameRef = useRef(null);
  const navigate = useNavigate();

  const handleStartGame = () => {
    const playerName = nameRef.current.value;
    if (playerName) {
      navigate('/game', { state: { playerName } });
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenido a este juego para adivinar un numero</h1>
      <input ref={nameRef} type="text" placeholder="Ingresa tu nombre" />
      <button onClick={handleStartGame}>Comenzar Juego</button>
    </div>
  );
}

export default Home;