import React, { useState } from "react";
import './styles/ListPokemon.css';

const ListPokemon = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [queryCount, setQueryCount] = useState(0)

  const fetchPokemonData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results)
        setQueryCount((prevCount) => prevCount + 1)
      })
      .catch((error) => console.log(error))
  }

  const handleReset = () => {
    setPokemonList([])
    setQueryCount(0)
  }

  return (
    <div className="pokemon-container">
      <div className="button-container">
        <div className="button" onClick={fetchPokemonData}>Fetch Pokemon List</div>
        <div className="button" onClick={handleReset}>Reset</div>
      </div>
      <p>Query Count: {queryCount}</p>
      <div className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListPokemon;