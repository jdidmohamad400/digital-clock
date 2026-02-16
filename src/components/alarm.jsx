import { useState, useEffect, useRef } from "react";

export default function Alarm() {
  const [alarmTime, setAlarmTime] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isTriggered, setIsTriggered] = useState(false);

  const audioRef = useRef(new Audio("/alarm.mp3"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (alarmTime && !isTriggered) {
      const now = currentTime.toTimeString().slice(0, 5);
      if (now === alarmTime) {
        audioRef.current.play();
        alert("Alarm ringing!");
        setIsTriggered(true);
      }
    }
  }, [currentTime, alarmTime, isTriggered]);

  const setAlarm = () => {
    setIsTriggered(false);
    alert("Alarm set!");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{currentTime.toLocaleTimeString()}</h2>

      <input
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
      />

      <br /><br />

      <button onClick={setAlarm}>Set Alarm</button>
    </div>
  );
}
