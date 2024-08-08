'use client'
import {create} from 'zustand'
import { useBoxStore } from '../constance/boxes'
import React from 'react'
import { count } from 'console'

// interface BoxState {
//     count: number; 
//     handleCount: (count: number) => void
//     handleCountDown: (count: number) => void
// }

const Counter = () => {
    const toggle = useBoxStore(state => state.toggle)
    const modal = useBoxStore(state => state.modal)
    const counted = useBoxStore(state => state.count)
    const handleCount = useBoxStore(state => state.handleCount)
    const handleCountDown = useBoxStore(state => state.handleCountDown)
  return (
    <div>
      { modal && 
      <p className='text-[200px]'>{counted}</p>
      }
      <div>
        <button onClick={toggle}>Toggle</button>
      </div>
        {/* <div>
        {counted}
        </div> */}
    <div>
        <button onClick={handleCount}>Up +</button>
        
    </div>
    <div>
        <button onClick={handleCountDown}>Down -</button>
    </div>
    </div>
  )
}

export default Counter