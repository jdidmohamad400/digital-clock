import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#222" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Clock
      </Link>
      <Link to="/timer" style={{ color: "white", marginRight: "20px" }}>
        Timer
      </Link>
      <Link to="/alarm" style={{ color: "white" }}>
        Alarm
      </Link>
    </nav>
  );
}