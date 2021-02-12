import axios from "axios";
export const getPokemonTypes = async ({ setPokemonTypes }) => {
  try {
    const url = `https://pokeapi.co/api/v2/type/`;
    const res = await axios.get(url);
    setPokemonTypes(res.data.results);
  } catch {
    console.error("error");
  }
};
