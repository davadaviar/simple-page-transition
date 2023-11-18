import React from 'react'
import transition from '../transitions/transition'

const HomePage = () => {
  return (
    <div className='home'>
        <h1 className='font-display text-[150px] w-full text-center absolute z-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-dark'>Home Page</h1>
    </div>
  )
}

export default transition(HomePage);