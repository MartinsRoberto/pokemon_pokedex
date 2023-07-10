import React from 'react'
import pikachu2 from '../assets/images/pikachu-running.gif'

const LoadingEffect = () => {
  return (
    <div className='flex h-screen items-center justify-center flex-col'>
      <img src={pikachu2} alt="" className='w-40 animate-bounce' />
    </div>
  )
}

export default LoadingEffect