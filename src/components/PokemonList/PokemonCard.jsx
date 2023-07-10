import React from 'react'
import colours from '../../data/colors.json'
import logo2 from '../../assets/images/pokeball_trans.jpg'

const PokemonCard = ({ pokemon, getPokemonById }) => {
  const { id, sprites, name, types } = pokemon

  const getTypeColor = (type) => {
    return colours[type] || '#000000'
  }

  return (
    <li className='border rounded-lg text-center hover:border-black cursor-pointer overflow-hidden hover:scale-105 duration-300' onClick={() => getPokemonById(id)}>
      <div className='relative w-full bg-gray-100 flex justify-center items-center py-2'>
        <img src={sprites.front_default} alt={name} className='' />
        <img src={logo2} alt={name} className='absolute z-30 w-20 opacity-10' />
      </div>
      <div className='p-3'>
        <h6 className=''>#{String(id).padStart(3, '0')}</h6>
        <h4 className='mt-1 mb-3 capitalize font-semibold'>{name}</h4>
        <div className='flex gap-2 justify-center'>
          {types.map((type) => (
            <span
              key={type.type.name}
              style={{ backgroundColor: getTypeColor(type.type.name) }}
              className='rounded-3xl px-2 capitalize text-white w-20 inline-block'
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </li>
  )
}

export default PokemonCard
