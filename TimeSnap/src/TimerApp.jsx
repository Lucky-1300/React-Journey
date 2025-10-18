import React, { useState, useEffect, useRef } from 'react';


function TimerApp() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="timer-wrapper">
      <div className="timer-box">
        <h1 className="timer-title">⏱️ Timer</h1>
        <div className="timer-display">{seconds}s</div>

        <div className="button-area">
          <button onClick={handleStart} disabled={isRunning} className="btn start">Start</button>
          <button onClick={handleStop} disabled={!isRunning} className="btn stop">Stop</button>
          <button onClick={handleReset} className="btn reset">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default TimerApp;
