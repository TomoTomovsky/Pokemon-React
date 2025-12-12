import { useState } from "react";

export function usePokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemon = async (query) => {
    if (!query.trim()) {
      setError("Pole nie może być puste.");
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const q = query.toLowerCase();
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);

      if (!res.ok) {
        setError("Nie znaleziono takiego Pokemona.");
        return null; 
      }

      const data = await res.json();
      setPokemon(data);
      return data; 
    } catch {
      setError("Wystąpił problem z połączeniem.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { pokemon, loading, error, fetchPokemon, setPokemon };
}
