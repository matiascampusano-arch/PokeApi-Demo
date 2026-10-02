import "./PokemonCard.css";

export default function PokemonCard({ pokemon }) {
  return (
    <article className="pokemon-card">
      <span className="pokemon-card__number">
        #{String(pokemon.id).padStart(3, "0")}
      </span>
      <div className="pokemon-card__artwork">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          loading="lazy"
        />
      </div>
      <h2 className="pokemon-card__name">{pokemon.name}</h2>
      <div className="pokemon-card__types" aria-label="Types">
        {pokemon.types.map((typeInfo) => (
          <span className="pokemon-card__type" key={typeInfo.type.name}>
            {typeInfo.type.name}
          </span>
        ))}
      </div>
      <dl className="pokemon-card__stats">
        <div>
          <dt>Height</dt>
          <dd>{pokemon.height}</dd>
        </div>
        <div>
          <dt>Weight</dt>
          <dd>{pokemon.weight}</dd>
        </div>
        <div>
          <dt>Base EXP</dt>
          <dd>{pokemon.base_experience ?? "—"}</dd>
        </div>
      </dl>
    </article>
  );
}
