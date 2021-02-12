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

export const getListPokemonByType = async ({
  pokemonTypes,
  searchType,
  numPokes,
  setDataPokemon,
}) => {
  const pokemonType = pokemonTypes.find((type) => type.name === searchType);
  const isValidType = !!pokemonType;

  if (isValidType) {
    try {
      const url = pokemonType.url;
      const res = await axios.get(url);
      setDataPokemon({
        arrayPokemon: res.data.pokemon.splice(0, numPokes),
        error: false,
        messageError: "",
      });
    } catch {
      console.error("error");
    }
  } else {
    setDataPokemon({
      arrayPokemon: [],
      error: true,
      messageError: `Pokemon Type "${searchType}" does not exists`,
    });
  }
};

export const getPokeImg = async ({ url, setpokePicture }) => {
  try {
    const res = await axios.get(url);
    setpokePicture(res.data.sprites.front_shiny);
  } catch {
    console.error("error");
  }
};
