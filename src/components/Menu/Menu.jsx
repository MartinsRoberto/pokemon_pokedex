import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import MenuFilterGeneration from './MenuFilterGeneration'
import MenuFilterType from './MenuFilterType'

const Menu = ({ setScreen, getPokemonByType, getPokemonByGeneration }) => {
  const [menuActive, setMenuActive] = useState(false)
  const [menuActiveFilter, setMenuActiveFilter] = useState('')
  const [menuBox, setMenuBox] = useState(false)

  const handleMenuActive = () => {
    if(menuActive){
      setMenuActive(false)
      setMenuBox(false)
      setMenuActiveFilter('')
    }
    else{
      setMenuActive(true)
      setMenuBox(true)
    }
  }

  const handleMenuActiveFilter = (value) => {
    setMenuBox(false)
    setMenuActiveFilter(value)
  }

  return (
    <>
      <nav className='fixed bottom-3 right-3 z-50 flex flex-col-reverse items-end'>
        <button className='p-2 bg-gray-950 bg-opacity-90 rounded-full text-white font-bold text-3xl' onClick={handleMenuActive}>
          {menuActive ? <FiX /> : <FiMenu />}
        </button>

        {menuBox && (
          <ul className='text-right'>
            <li>
              <button
                className='mb-3 bg-gray-950 bg-opacity-90 text-white rounded-3xl px-3 py-1'
                onClick={() => handleMenuActiveFilter('generations')}
              >
                All generations
              </button>
            </li>
            <li>
              <button
                className='mb-3 bg-gray-950 bg-opacity-90 text-white rounded-3xl px-3 py-1'
                onClick={() => handleMenuActiveFilter('types')}
              >
                All types
              </button>
            </li>
          </ul>
        )}

        {menuActiveFilter === 'generations' && (
          <MenuFilterGeneration
            setScreen={setScreen}
            getPokemonByGeneration={getPokemonByGeneration}
            setMenuActiveFilter={setMenuActiveFilter}
          />
        )}

        {menuActiveFilter === 'types' && (
          <MenuFilterType
            setScreen={setScreen}
            getPokemonByType={getPokemonByType}
            setMenuActiveFilter={setMenuActiveFilter}
          />
        )}

      </nav>
    </>
  )
}

export default Menu
