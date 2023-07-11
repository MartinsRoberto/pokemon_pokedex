import React from 'react'
import colours from '../../data/colors.json'

const PokemonInfoHeader = ({ pokemonInfoData }) => {
  const { name, id, types, sprites, height, weight } = pokemonInfoData

  const getTypeColor = (type) => {
    return colours[type] || '#000000'
  }

  const frontDefaultSprite = sprites.other?.['official-artwork']?.front_default
  const frontShinySprite = sprites.other?.['official-artwork']?.front_shiny
  

  return (
    <>
      <div className='w-full flex justify-center items-center -mt-40'>
        <img src={frontDefaultSprite} alt={name} className='z-40 w-44' />
        <img src={frontShinySprite} alt={name} className='z-40 w-44' />
      </div>

      <h4 className='text-3xl font-semibold capitalize text-center mb-2'>
        {name}
      </h4>
      <span className='mb-5 text-xl text-center block'>#{String(id).padStart(3, '0')}</span>

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

      <p className='my-10 '>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat sit accusantium sequi nostrum unde incidunt? Sed amet officiis ad vero, cumque fugit reiciendis earum, eius neque sunt accusamus cum id.
      </p>

      <ul className='mb-5 flex flex-col gap-3'>
        <li>Height: {height / 10} m</li>
        <li>Weight: {weight / 10} kg</li>
      </ul>
    </>
  )
}

export default PokemonInfoHeader