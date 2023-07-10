import React from 'react'

const PokemonInfoStats = ({ stats, mainColor }) => {

  const statNameMapping = {
    'hp': 'HP',
    'attack': 'ATK',
    'defense': 'DEF',
    'special-attack': 'SPA',
    'special-defense': 'SPD',
    'speed': 'SPE'
  }

  const getStatName = (statName) => {
    return statNameMapping[statName]
  }

  return (
    <ul>
      {stats.map((stat) => (
        <li key={stat.stat.name} className='flex gap-3 items-center'>
          <span className='text-right w-8 font-bold' style={{ color: mainColor }}>{getStatName(stat.stat.name)}</span>
          <span className='flex-1 relative'>
            <span className='absolute left-0 -top-1 h-2 w-full bg-gray-300 z-10 rounded-full'></span>
            <span className='absolute left-0 -top-1 h-2 z-40 rounded-full' style={{ backgroundColor: mainColor, width: `${(stat.base_stat / 200) * 100}%` }} ></span>
          </span>
          <span className='w-8 text-gray-600'>{stat.base_stat}</span>
        </li>
      ))}
    </ul>
  )
}

export default PokemonInfoStats
