import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h3 style={{ textTransform: "capitalize" }}>{pokemon.name}</h3>
      <p>Typ: {pokemon.types.map(t => t.type.name).join(", ")}</p>
    </div>
  );
}

export default PokemonCard;
