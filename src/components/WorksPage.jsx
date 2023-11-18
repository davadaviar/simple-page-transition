import React from 'react'
import transition from '../transitions/transition'

const WorksPage = () => {
  return (
    <div className='works'>
        <h1 className='font-display text-[150px] w-full text-center absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-dark'>Works Page</h1>
    </div>
  )
}

export default transition(WorksPage)