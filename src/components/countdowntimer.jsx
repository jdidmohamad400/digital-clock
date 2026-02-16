import { useState, useEffect, useRef } from "react";

export default function CountdownTimer() {
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const audioRef = useRef(new Audio("/alarm.mp3"));

  useEffect(() => {
    let interval;

    if (isActive && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev - 1);
      }, 1000);
    }

    if (totalSeconds === 0 && isActive) {
      audioRef.current.play();
      alert("Time is up!");
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, totalSeconds]);

  const startTimer = () => {
    const total = Number(minutes) * 60 + Number(seconds);
    if (total > 0) {
      setTotalSeconds(total);
      setIsActive(true);
    }
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTotalSeconds(0);
    setMinutes("");
    setSeconds("");
  };

  const displayMinutes = Math.floor(totalSeconds / 60);
  const displaySeconds = totalSeconds % 60;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        {displayMinutes}:{displaySeconds.toString().padStart(2, "0")}
      </h2>

      <input
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
      />
      <input
        type="number"
        placeholder="Seconds"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />

      <br /><br />

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
