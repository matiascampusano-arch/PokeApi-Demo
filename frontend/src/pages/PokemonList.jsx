import PokemonGrid from "../components/PokemonGrid";
import { useState, useEffect } from "react";
import { listPokemons } from "../services/pokeapi";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    listPokemons(page).then((data) => {
      Promise.all(
        data.map((pokemon) => fetch(pokemon.url).then((res) => res.json())),
      ).then((fullData) => {
        setPokemons(fullData);
      });
    });
  }, [page]);
  return (
    <div>
      <h1>Pokemon List</h1>
      <PokemonGrid pokemonList={pokemons} />
      {page > 1 && (
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
          Previous
        </button>
      )}
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
}
