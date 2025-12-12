import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Lobby from "./components/Lobby.jsx";
import Pokedex from "./components/Pokedex.jsx";
import TeamRandomizer from "./components/TeamRandomizer.jsx";
import NotFound from "./components/NotFound.jsx";
import Favorites from "./components/Favorites.jsx";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/team" element={<TeamRandomizer />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
