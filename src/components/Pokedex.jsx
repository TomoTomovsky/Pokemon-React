import React, { useState, useContext, useEffect } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext.jsx";
import PokemonCard from "./PokemonCard.jsx";
import { usePokemon } from "../hooks/usePokemon";

function Pokedex() {
  const [pokemonIndex, setPokemonIndex] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  const { toggleFavorite, favorites } = useContext(FavoritesContext);
  const { pokemon, loading, error, fetchPokemon } = usePokemon();

  useEffect(() => {
    fetchPokemon(pokemonIndex.toString());
  }, [pokemonIndex]);

  const handleNext = () => setPokemonIndex(prev => prev + 1);
  const handlePrev = () => setPokemonIndex(prev => (prev > 1 ? prev - 1 : 1));

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return; 
    const data = await fetchPokemon(searchInput.trim());
    if (data) setPokemonIndex(data.id); 
    setSearchInput("");
  };

  const isFavorite = pokemon && favorites.find(p => p.id === pokemon.id);

  return (
    <div className="pokedex-container">
      <form onSubmit={handleSearch} className="pokedex-form">
        <input
          type="text"
          placeholder="Wpisz nazwę Pokemona"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Szukaj</button>
      </form>

      {loading && <p>Ładowanie pokemona...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {pokemon && (
        <>
          <div className="cards-container">
            <PokemonCard pokemon={pokemon} />
          </div>
          <button 
            onClick={() => toggleFavorite(pokemon)}
            style={{padding: "8px 12px", borderRadius: "5px", border: "none", backgroundColor: isFavorite ? "#ff4c4c" : "#646cff", color: "#fff", cursor: "pointer"}}
          >
            {isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
          </button>
        </>
      )}

      <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <button onClick={handlePrev} disabled={pokemonIndex === 1}>Poprzedni</button>
        <button onClick={handleNext}>Następny</button>
      </div>

      {pokemon && <p>Pokémon #{pokemonIndex}</p>}
    </div>
  );
}

export default Pokedex;
