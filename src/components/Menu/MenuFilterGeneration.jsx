import React from 'react';
import MenuFilterGenerationItem from './MenuFilterGenerationItem';

const MenuFilterGeneration = ({ getPokemonByGeneration, setMenuActiveFilter }) => {
  const genHelper = [
    { gen: '1', poke1: '1', poke2: '4', poke3: '7' },
    { gen: '2', poke1: '152', poke2: '155', poke3: '158' },
    { gen: '3', poke1: '252', poke2: '255', poke3: '258' },
    { gen: '4', poke1: '387', poke2: '390', poke3: '393' },
    { gen: '5', poke1: '495', poke2: '498', poke3: '501' },
    { gen: '6', poke1: '650', poke2: '653', poke3: '656' },
    { gen: '7', poke1: '722', poke2: '725', poke3: '728' },
    { gen: '8', poke1: '810', poke2: '813', poke3: '816' },
    { gen: '9', poke1: '906', poke2: '909', poke3: '912' },
  ];

  return (
    <ul className="">
      {genHelper.map((genData) => (
        <MenuFilterGenerationItem
          key={genData.gen}
          gen={genData.gen}
          img1={genData.poke1}
          img2={genData.poke2}
          img3={genData.poke3}
          getPokemonByGeneration={getPokemonByGeneration}
          setMenuActiveFilter={setMenuActiveFilter}
        />
      ))}
    </ul>
  );
};

export default MenuFilterGeneration;
