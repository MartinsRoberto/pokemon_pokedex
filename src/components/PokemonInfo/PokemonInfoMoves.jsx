import React, { useState, useEffect } from 'react';
import colors from '../../data/colors.json';

const PokemonInfoMoves = ({ moves }) => {
  const [movesLevel, setMovesLevel] = useState([]);

  const getTypeColor = (type) => {
    return colors[type] || '#000000';
  };

  useEffect(() => {
    const fetchData = async () => {
      const updatedMovesLevel = [];

      for (let index = 0; index < moves.length; index++) {
        const versionGroupDetails = moves[index].version_group_details;

        for (let i = 0; i < versionGroupDetails.length; i++) {
          const versionName = versionGroupDetails[i].version_group.name;
          const moveName = moves[index].move.name;
          const levelLearned = versionGroupDetails[i].level_learned_at;
          const learnMethod = versionGroupDetails[i].move_learn_method.name;

          if (learnMethod === 'level-up' && versionName === 'sword-shield') {
            const moveUrl = moves[index].move.url;
            const res = await fetch(moveUrl);
            const data = await res.json();
            const moveType = data.type.name;

            updatedMovesLevel.push({ name: moveName, level: levelLearned, type: moveType });
          }
        }
      }

      updatedMovesLevel.sort((a, b) => a.level - b.level);
      setMovesLevel(updatedMovesLevel);
    };

    fetchData();
  }, [moves]);

  return (
    <table className='w-full'>
      <thead>
        <tr className='grid grid-cols-12'>
          <th className='col-span-6'>Name</th>
          <th className='col-span-4'>Type</th>
          <th className='col-span-2'>Level</th>
        </tr>
      </thead>
      <tbody>
        {movesLevel.length > 0 ? (
          movesLevel.map((item) => (
            <tr key={item.name} className='text-gray-600 grid grid-cols-12 text-center py-2'>
              <td className='capitalize col-span-6'>{item.name}</td>
              <td
                className='col-span-4 bg-slate-400 rounded-full uppercase text-sm font-semibold text-white '
                style={{ backgroundColor: getTypeColor(item.type) }}
              >
                {item.type}
              </td>
              <td className='col-span-2'>{item.level}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className='text-gray-500 text-xl text-center'>
              Oops, that Pokémon doesn't learn any moves in the Sword & Shield generation.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default PokemonInfoMoves;
