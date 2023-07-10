import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokeListData, getPokemonById }) => {

  return (
    <ul className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 p-2'>
      {pokeListData.length > 0 && pokeListData.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} getPokemonById={getPokemonById} />)}
    </ul>
  )
}

export default PokemonList