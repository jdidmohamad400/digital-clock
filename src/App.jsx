import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClockPage from "./pages/clockpage";
import TimerPage from "./pages/timerpage";
import AlarmPage from "./pages/alarmpage";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<clockpage />} />
        <Route path="/timer" element={<timerpage />} />
        <Route path="/alarm" element={<alarmpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
