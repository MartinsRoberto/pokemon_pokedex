import React from 'react'
import colors from '../../data/colors.json'
import bug from '../../assets/images/pokemons_types/bug.png'
import dark from '../../assets/images/pokemons_types/dark.png'
import dragon from '../../assets/images/pokemons_types/dragon.png'
import electric from '../../assets/images/pokemons_types/electric.png'
import fairy from '../../assets/images/pokemons_types/fairy.png'
import fighting from '../../assets/images/pokemons_types/fighting.png'
import fire from '../../assets/images/pokemons_types/fire.png'
import flying from '../../assets/images/pokemons_types/flying.png'
import ghost from '../../assets/images/pokemons_types/ghost.png'
import grass from '../../assets/images/pokemons_types/grass.png'
import ground from '../../assets/images/pokemons_types/ground.png'
import ice from '../../assets/images/pokemons_types/ice.png'
import normal from '../../assets/images/pokemons_types/normal.png'
import poison from '../../assets/images/pokemons_types/poison.png'
import psychic from '../../assets/images/pokemons_types/psychic.png'
import rock from '../../assets/images/pokemons_types/rock.png'
import steel from '../../assets/images/pokemons_types/steel.png'
import water from '../../assets/images/pokemons_types/water.png'

const MenuFilterType = ({ setScreen, getPokemonByType, setMenuActiveFilter }) => {
  const arr = Object.entries(colors)

  const handleMenuActive = (value) => {
    setMenuActiveFilter('')
    getPokemonByType(value)
  }

  return (
    <ul className='grid grid-cols-2 gap-3 md:grid-cols-1 bg-gray-950 bg-opacity-90 rounded-3xl p-3 mb-3'>
      {arr.map((item) => {
        const [type, color] = item
        const typeImage = getTypeImage(type)

        return (
          <li
            key={type}
            className='cursor-pointer rounded-3xl  px-3 py-1 flex items-center gap-3'
            style={{ backgroundColor: color }}
            onClick={() => handleMenuActive(type)}
          >
            <img src={typeImage} alt={type} className='w-5' />
            <span className='capitalize'>{type}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default MenuFilterType

function getTypeImage(type) {
  switch (type) {
    case 'bug':
      return bug
    case 'dark':
      return dark
    case 'dragon':
      return dragon
    case 'electric':
      return electric
    case 'fairy':
      return fairy
    case 'fighting':
      return fighting
    case 'fire':
      return fire
    case 'flying':
      return flying
    case 'ghost':
      return ghost
    case 'grass':
      return grass
    case 'ground':
      return ground
    case 'ice':
      return ice
    case 'normal':
      return normal
    case 'poison':
      return poison
    case 'psychic':
      return psychic
    case 'rock':
      return rock
    case 'steel':
      return steel
    case 'water':
      return water
    default:
      return ''
  }
}
