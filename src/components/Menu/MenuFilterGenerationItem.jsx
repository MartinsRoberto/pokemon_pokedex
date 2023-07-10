import React from 'react'

const MenuFilterGenerationItem = ({ gen, img1, img2, img3, getPokemonByGeneration, setMenuActiveFilter }) => {

  const handleMenuActive = (value) => {
    setMenuActiveFilter('')
    getPokemonByGeneration(value)
  }

  return (
    <li className='mb-3 bg-gray-950 bg-opacity-90 text-white rounded-3xl  px-3 py-1 flex gap-3 items-center cursor-pointer' onClick={() => handleMenuActive(gen)}>
      <h6>Generation {gen}</h6>
      <div className='flex'>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${img1}.png`} alt="" className='w-7' />
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${img2}.png`} alt="" className='w-7' />
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${img3}.png`} alt="" className='w-7' />
      </div>
    </li>
  )
}

export default MenuFilterGenerationItem