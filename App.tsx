import * as React from 'react';
import { useRef, useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const onStart = () => {
    intervalRef.current = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);
  };

  const onPause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const onReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      {count === 0 ? (
        <button
          style={{ width: '80px', backgroundColor: '#7FFF00' }}
          onClick={onStart}
        >
          Start
        </button>
      ) : (
        <button
          style={{ width: '80px', backgroundColor: '#DA291C' }}
          onClick={onPause}
        >
          Pause
        </button>
      )}
      <br />
      <br />
      <button style={{ width: '80px' }} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
