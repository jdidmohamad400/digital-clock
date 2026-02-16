import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClockPage from "./pages/clockPage";
import TimerPage from "./pages/timerPage";
import AlarmPage from "./pages/alarmPage";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ClockPage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/alarm" element={<AlarmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
