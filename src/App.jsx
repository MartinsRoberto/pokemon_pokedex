import React, { useEffect, useState } from 'react'
import PokemonInfo from './components/PokemonInfo/PokemonInfo'
import PokemonList from './components/PokemonList/PokemonList'
import LoadingEffect from './components/LoadingEffect'
import Menu from './components/Menu/Menu'
import { fetchData, fetchDataById, fetchDataByType, fetchDataByGeneration } from './hooks/FetchData'

const App = () => {
  const [pokeListData, setPokeListData] = useState([])
  const [pokemonInfoData, setPokemonInfoData] = useState()
  const [loading, setLoading] = useState(false)

  const [screen, setScreen] = useState('pokemonList')

  useEffect(() => {

    const fetchDataFromAPI = async () => {
      setLoading(true)
      const pokemonList = await fetchData()
      setLoading(false)

      setPokeListData(pokemonList)
    }

    fetchDataFromAPI()

  }, []);

  const getPokemonByType = async (type) => {
    setLoading(true)
    const data = await fetchDataByType(type)
    setLoading(false)

    setPokeListData(data)
    setScreen('pokemonList')
  }

  const getPokemonByGeneration = async (generation) => {
    setLoading(true)
    const data = await fetchDataByGeneration(generation)
    setLoading(false)

    setPokeListData(data)
    setScreen('pokemonList')
  }

  const getPokemonById = async (id) => {
    setLoading(true)
    const data = await fetchDataById(id)
    setLoading(false)

    setPokemonInfoData(data)
    setScreen('pokemonInfo')
  }
  return (
    <main className=''>
      {loading ? <LoadingEffect /> :
        <>
          {screen == 'pokemonInfo' && <PokemonInfo pokemonInfoData={pokemonInfoData} setScreen={setScreen} />}

          {screen == 'pokemonList' && <PokemonList pokeListData={pokeListData} getPokemonById={getPokemonById} />}

          <Menu setScreen={setScreen} getPokemonByType={getPokemonByType} getPokemonByGeneration={getPokemonByGeneration} />
        </>
      }

    </main>
  )
}

export default App
