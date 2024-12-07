import React, { useState, useEffect } from 'react';

function App() {
  const [light, setLight] = useState('red');
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (light === 'red') {
        setLight('green');
        setTimer(3);
      } else if (light === 'green') {
        setLight('yellow');
        setTimer(2);
      } else {
        setLight('red');
        setTimer(1);
      }
    }, timer * 1000);

    return () => clearInterval(intervalId);
  }, [light, timer]);

  return (
    <div className="traffic-light">
      <div className={`light red ${light === 'red' ? 'on' : ''}`}></div>
      <div className={`light yellow ${light === 'yellow' ? 'on' : ''}`}></div>
      <div className={`light green ${light === 'green' ? 'on' : ''}`}></div>
      <p>{timer} Seconds</p>
    </div>
  );
}

export default App;