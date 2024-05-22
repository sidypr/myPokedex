import React, { useState } from 'react';
import './App.css';
import PokemonList from './component/PokemonList';
import SearchBar from './component/SearchBar';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
  <SearchBar />
      <PokemonList />
      
    </div>
  );
}

export default App;
