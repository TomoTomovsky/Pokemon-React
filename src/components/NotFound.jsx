import React, { useEffect, useState } from "react";

function NotFound() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/404");
        if (!res.ok) throw new Error("Nie udało się pobrać Pokemona #404");
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 60px)", width: "100%", gap: "20px", padding: "20px", backgroundColor: "#242424", color: "#fff", textAlign: "center"}}>
      <h1 style={{ fontSize: "3em", color: "#ff4c4c" }}>Error 404</h1>
      <p>Wygląda na to, że ta strona nie istnieje.</p>

      {pokemon && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            style={{ width: "150px", height: "150px" }} 
          />
          <p style={{ textTransform: "capitalize", marginTop: "5px" }}>{pokemon.name}</p>
        </div>
      )}
    <p>Luxio ma w pokedexie numer 404, ciekawa sprawa nie?</p>
    </div>
  );
}

export default NotFound;
