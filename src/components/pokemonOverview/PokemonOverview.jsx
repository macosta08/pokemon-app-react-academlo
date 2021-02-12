import React, { useEffect, useState } from 'react'
import { getListPokemonByType } from '../../Utils/callsPokemonApi';
import { PokeCards } from '../pokeCards/PokeCards';
import { SearchInput } from '../searchInput/SearchInput'

export const PokemonOverview = ({pokemonTypes, setLoading}) => {
	const [dataPokemon, setDataPokemon] = useState({
		arrayPokemon: [],
		error: false,
		messageError: "",
	  });
	
	const [searchType, setSearchType] = useState('');
	const [numPokes, setNumPokes] = useState(0);
	useEffect(() => {
		
		if (pokemonTypes.length > 0 && searchType !== '') {
			setLoading(true);
		  	getListPokemonByType({
				pokemonTypes,
				searchType,
				numPokes,
				setDataPokemon,
		  	});
		  	setLoading(false);
		}

	  }, [pokemonTypes, searchType, numPokes]);

	
	return (
		<div>
			<SearchInput 
				pokemonTypes={pokemonTypes}
				setSearchType={setSearchType}
				setNumPokes={setNumPokes}
			/>
			{dataPokemon.arrayPokemon.length != 0 &&
			<PokeCards dataPokemon={dataPokemon}/>}
		</div>
	)
}
