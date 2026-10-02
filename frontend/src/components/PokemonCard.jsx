export default function PokemonCard({ pokemon }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "8px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
    </div>
  );
}
