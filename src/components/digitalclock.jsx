import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 style={{ fontSize: "40px", textAlign: "center" }}>
      {time.toLocaleTimeString()}
    </h2>
  );
}