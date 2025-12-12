import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext.jsx";
import PokemonCard from "./PokemonCard.jsx";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", gap: "20px"}}>
      <h2>Ulubione Pokemony</h2>

      {favorites.length === 0 && <p>Brak ulubionych pokemonów.</p>}

      <div style={{display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center"}}>
        {favorites.map(p => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
