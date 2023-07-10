import React from 'react'

const fetchData = async () => {

  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    const data = await response.json()

    const pokemonList = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        const details = await res.json()
        return details
      })
    )
    
    return pokemonList
  } catch (error) {
    console.error('Erro ao buscar dados dos pokémons:', error)
  }
}

const fetchDataById = async (id) => {

  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
  const pokemonData = await response.json()

  return pokemonData

}

const fetchDataByType = async (type) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0')
  const data = await response.json()

  const pokemonList = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url)
      const details = await res.json()
      return details
    })
  )

  const filteredPokemons = pokemonList.filter((pokemon) => {
    return pokemon.types.some((typeObj) => typeObj.type.name === type)
  })

  return filteredPokemons
}

const fetchDataByGeneration = async (gen) => {
  gen = +gen
  let limit = 151
  let offset = 0

  switch (gen) {
    case 1:
      limit = 151
      offset = 0
      break
    case 2:
      limit = 100
      offset = 151
      break
    case 3:
      limit = 135
      offset = 251
      break
    case 4:
      limit = 107
      offset = 386
      break
    case 5:
      limit = 156
      offset = 493
      break
    case 6:
      limit = 72
      offset = 649
      break
    case 7:
      limit = 88
      offset = 721
      break
    case 8:
      limit = 89
      offset = 809
      break
    case 9:
      limit = 84
      offset = 905
      break
    default:
      limit = 0
      offset = 0
      break
  }


  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  const data = await response.json()

  const pokemonList = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url)
      const details = await res.json()
      return details
    })
  )

  return pokemonList
}
export { fetchData, fetchDataById, fetchDataByType, fetchDataByGeneration }
