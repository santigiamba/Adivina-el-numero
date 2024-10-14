import React from 'react';

function Feedback({ feedback }) {
  return (
    <div style={{ marginTop: '20px', fontSize: '24px', color: feedback === '¡Correcto!' ? 'green' : 'red' }}>
      {feedback}
    </div>
  );
}

export default Feedback;
