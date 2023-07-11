import React, { useEffect, useState } from 'react'
import colours from '../../data/colors.json'
import PokemonInfoHeader from '../PokemonInfo/PokemonInfoHeader'
import PokemonInfoStats from '../PokemonInfo/PokemonInfoStats'
import PokemonInfoMoves from '../PokemonInfo/PokemonInfoMoves'
import PokemonInfoSubMenu from './PokemonInfoSubMenu'

const PokemonInfo = ({ pokemonInfoData, setScreen }) => {
  const [changeInfoScreen, setChangeInfoScreen] = useState('stats')

  console.log(pokemonInfoData)
  const { types } = pokemonInfoData

  const getTypeColor = (type) => {
    return colours[type] || '#000000'
  }

  const mainColor = getTypeColor(types[0].type.name)


  return (
    <div style={{ backgroundColor: mainColor }} className='min-h-screen pb-10 text-zinc-700'>

      <button onClick={() => setScreen('pokemonList')} className='text-white font-bold p-2'>Voltar</button>

      <div className='bg-white max-w-md mx-auto mt-32 rounded-3xl pt-6 px-4 pb-16'>

        <PokemonInfoHeader pokemonInfoData={pokemonInfoData} />

        <ul className='flex justify-between gap-2 text-center mb-5'>
          <PokemonInfoSubMenu changeInfoScreen={changeInfoScreen} setChangeInfoScreen={setChangeInfoScreen} mainColor={mainColor} title="stats" />
          <PokemonInfoSubMenu changeInfoScreen={changeInfoScreen} setChangeInfoScreen={setChangeInfoScreen} mainColor={mainColor} title="moves" />
        </ul>

        {changeInfoScreen == 'stats' && <PokemonInfoStats stats={pokemonInfoData.stats} mainColor={mainColor} />}
        {changeInfoScreen == 'moves' && <PokemonInfoMoves moves={pokemonInfoData.moves} mainColor={mainColor} />}

      </div>
    </div>
  )
}

export default PokemonInfo


