import React, { useEffect } from 'react'

const PokemonInfoSubMenu = ({changeInfoScreen, setChangeInfoScreen, mainColor, title}) => {
  
  return (
    <li
      onClick={() => setChangeInfoScreen(title)}
      className='uppercase border-2 border-transparent cursor-pointer flex-1 rounded-3xl px-3 py-2 text-white'
      style={{ backgroundColor: changeInfoScreen === title ? `${mainColor}` : '', color: changeInfoScreen !== title ? `${mainColor}` : `` }}
    >
      {title}
    </li>
  )
}

export default PokemonInfoSubMenu