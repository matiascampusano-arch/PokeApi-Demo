const ENDPOINT_URL = "https://pokeapi.co/api/v2";

export const listPokemons = async () => {
  try {
    const response = await fetch(`${ENDPOINT_URL}/pokemon`);
    const data = await response.json();
    return data.results;
  } catch {
    console.error("Failed to fetch pokemons");
    return [];
  }
};

export const getPokemon = async (id) => {
  try {
    const response = await fetch(`${ENDPOINT_URL}/pokemon/${id}`);
    const data = await response.json();
    return data;
  } catch {
    console.error(`Failed to fetch pokemon with id: ${id}`);
    return null;
  }
};
