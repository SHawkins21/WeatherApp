import moment from 'moment'
import React from 'react'
import { TfiTime } from 'react-icons/tfi'

type Props = {}

const TimeBanner = (props: Props) => {
  return (
    <div
    className="mt-60
        flex p-2 justify-between w-[300px]
        size-15 place-items-center
        bg-gradient-to-r from-lightpurple to-sunsetpurple rounded-2xl text-black"
  >
    <div className="flex text-white space-x-3 m-2">
      <TfiTime className="size-5" />
      <h1>Time</h1>
    </div>
    <div className="flex text-xl text-white space-x-1 m-2">
      <div className="font-bold">
        {moment().format("h:mm A")}
        </div> 
    </div>
  </div>
  )
}

export default TimeBanner