const getPokemonByName = async (pokemonName) => {
  try {
    const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const pokemonData = await response.json();
    return pokemonData;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return null;
  }
};

getPokemonByName('Gruikui')
  .then((pokemon) => {
    if (pokemon) {
      console.log('Pokemon:', pokemon);
      
    } else {
      console.log('Pokemon non trouvé.');
    }
  });
