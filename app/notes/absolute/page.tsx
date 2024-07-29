'use client'
import {motion as m} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import {useState }from 'react'

type Props = {}

const Absolute = (props: Props) => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='h-screen w-full bg-black'>
        <div className='flex justify-end px-4 py-4'>Test
        </div>
        <div className='flex justify-start'>
            <button onClick={() => setIsOpen(true)} className='text-black bg-blue-400 p-4'>Open</button>
        <div>
            <AnimatePresence>
            {
                isOpen && (
                    <m.div
                    initial={{ left: "-100%" }}
                    animate={{ left: 0 }}
                    exit={{ left: '-100%' }}
                    >
                    <div className='absolute left-0 bottom-0 bg-slate-500 w-1/3 h-full'>
                        <button onClick={() => setIsOpen(!isOpen)} className='text-black bg-blue-400 absolute p-4'>Close</button>
                    </div>
                    </m.div>
                )
            }
            </AnimatePresence>
        </div>
        
    </div>
    </div>
  )
}

export default Absolute