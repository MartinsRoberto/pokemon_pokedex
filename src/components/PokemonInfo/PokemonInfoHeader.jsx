import React from 'react'
import colours from '../../data/colors.json'

const PokemonInfoHeader = ({ pokemonInfoData }) => {
  const { name, id, types, sprites } = pokemonInfoData

  const getTypeColor = (type) => {
    return colours[type] || '#000000'
  }

  const mainColor = getTypeColor(types[0].type.name)

  const frontDefaultSprite = sprites.other?.['official-artwork']?.front_default


  return (
    <>
      <div className='w-full flex justify-center items-center -mt-40'>
        <img src={frontDefaultSprite} alt={name} className='z-40 w-48' />
      </div>

      <h4 className='text-gray-700 text-3xl font-semibold capitalize text-center mb-2'>
        {name}
      </h4>
      <span className='mb-5 text-gray-500 text-xl text-center block'>#{String(id).padStart(3, '0')}</span>

      <div className='flex gap-2 justify-center'>
        {types.map((type) => (
          <span
            key={type.type.name}
            className={`rounded-3xl uppercase text-white font-bold w-24 inline-block text-center`}
            style={{ backgroundColor: getTypeColor(type.type.name) }}
          >
            {type.type.name}
          </span>
        ))}
      </div>

      <p className='text-gray-600 my-10 '>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat sit accusantium sequi nostrum unde incidunt? Sed amet officiis ad vero, cumque fugit reiciendis earum, eius neque sunt accusamus cum id.
      </p>
    </>
  )
}

export default PokemonInfoHeader