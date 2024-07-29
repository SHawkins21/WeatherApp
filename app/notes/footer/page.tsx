'use client'
import {motion as m} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {
    const [modal, setModal] = useState(false)
  return (
    <div className='h-screen text-white w-full bg-black relative'>
        <div className='justify-end item-end h-full'>
            <h1 className='text-zinc-50' >Modal</h1>
            <button onClick={() => setModal(!modal)} 
            className='text-black bg-blue-400 p-4'>
                Open
            </button>
            </div>
            <AnimatePresence>
            {
                modal && (
                <m.div
                className='absolute w-full h-1/2 bg-blue-400'
                initial={{ bottom: '-100%', opacity: 0 }}
                animate={{ bottom: 0, opacity: 1 }}
                exit={{ bottom: '-100%', opacity: 0 }}
                
                >
                    <div className='bg-blue-300'>
                        <button onClick={() => setModal(!modal)} className='bg-blue-400 p-4'>Close</button>
                    </div>
                </m.div> 
                )
            }
            </AnimatePresence>
        
    </div>
  )
}

export default page