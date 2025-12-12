import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", padding: "15px", background: "#eee"
    }}>
      <Link to="/">|Lobby|</Link>
      <Link to="/pokedex">|Pokedex|</Link>
      <Link to="/team">|Losowanie Teamu|</Link>
      <Link to="/favorites">|Ulubione|</Link>

    </nav>
  );
}

export default Header;
