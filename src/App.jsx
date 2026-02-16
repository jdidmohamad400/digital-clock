import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClockPage from "./pages/ClockPage";
import TimerPage from "./pages/TimerPage";
import AlarmPage from "./pages/AlarmPage";
import Navbar from "./components/Navbar";

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
