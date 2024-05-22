import React, { useEffect, useState } from 'react';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
  
    useEffect(() => {
      const fetchPokemonList = async () => {
        try {
          const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setPokemonList(data);
        } catch (error) {
          console.error('Error fetching Pokemon list:', error);
        }
      };
  
      fetchPokemonList();
    }, []);
  
    const handlePokemonDetails = (pokemon) => {
      setSelectedPokemon(pokemon);
    };
  
    return (
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id} className="pokemon">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.image} alt={pokemon.name} />
            <div className="pokemon-types">
              {pokemon.apiTypes.map((type) => (
                <img key={type.id} src={type.image} alt={type.name} />
              ))}
            </div>
            <button onClick={() => handlePokemonDetails(pokemon)}>infos</button>
          </div>
        ))}
        {selectedPokemon && <Pokemon pokemon={selectedPokemon} />}
      </div>
    );
}
  
  export default PokemonList;