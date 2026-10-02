import PokemonGrid from "../components/PokemonGrid";
import { useState, useEffect } from "react";
import { listPokemons } from "../services/pokeapi";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    listPokemons().then((data) => {
      Promise.all(
        data.map((pokemon) => fetch(pokemon.url).then((res) => res.json())),
      ).then((fullData) => {
        setPokemons(fullData);
      });
    });
  }, []);
  return (
    <div>
      <h1>Pokemon List</h1>
      <PokemonGrid pokemonList={pokemons} />
    </div>
  );
}
