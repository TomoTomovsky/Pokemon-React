import React, { useState } from "react";
import PokemonCard from "./PokemonCard.jsx";

function TeamRandomizer() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(false);

  const randomTeam = async () => {
    setLoading(true);
    setTeam([]);
    try {
      const randomIds = Array.from({ length: 6 }, () => Math.floor(Math.random() * 898) + 1);
      const promises = randomIds.map(id =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
      );
      const teamData = await Promise.all(promises);
      setTeam(teamData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const calcBST = (pokemon) => pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0);

  const totalTeamBST = team.reduce((sum, p) => sum + calcBST(p), 0);

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", width: "100%", gap: "20px", padding: "20px", boxSizing: "border-box"}}>
      <h2>Losowanie 6 Pokémonów</h2>
      <button onClick={randomTeam} style={{ padding: "10px 20px" }}>
        Losuj Team
      </button>

      {loading && <p>Losowanie...</p>}

      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px"}}>
        {team.map(p => (
          <div key={p.id} style={{ textAlign: "center" }}>
            <PokemonCard pokemon={p} />
            <p>BST: {calcBST(p)}</p>
          </div>
        ))}
      </div>

      {team.length > 0 && <p style={{ fontWeight: "bold", marginTop: "10px" }}>BST całego teamu: {totalTeamBST}</p>}
    </div>
  );
}

export default TeamRandomizer;
