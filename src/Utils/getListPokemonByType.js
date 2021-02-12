import axios from "axios";
export const getListPokemonByType = async ({
  pokemonTypes,
  searchType,
  setDataPokemon,
}) => {
  const pokemonType = pokemonTypes.find((type) => type.name === searchType);
  const isValidType = !!pokemonType;

  if (isValidType) {
    try {
      const url = pokemonType.url;
      const res = await axios.get(url);
      setDataPokemon({
        arrayPokemon: res.data.pokemon,
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
