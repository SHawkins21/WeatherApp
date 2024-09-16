import { m } from 'framer-motion'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
    children: React.ReactNode,
    close: () => void
}

const LowerModal = ({children,close}: Props) => {
    return (
      <m.div
      key="content"
      initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
              open:{
                  y:0,
                  height:"auto"
              },
              collapsed:{
                  y:'100%',
                  height:0
              }
          }}
          transition={{
              duration:0.5,
              ease:[0.04,0.62,0.23,0.98]
          }}
     
      className=' bg-slate-500/90 fixed left-0 bottom-0 right-0  z-10 w-full  rounded-t-xl'>
        <div className="flex justify-end px-2 py-3">
          <button onClick={close}>
            <CgClose className="text-zinc-50 text-2xl" />
          </button>
        </div>
        {children}
        
        
        </m.div>
    )
  }

export default LowerModal