import React from 'react'
import { dayFormat } from '../utils/dayFormat';
import { IconType } from 'react-icons';

type WeatherProps = {
  time: string
    temperatureMax: number, 
    temperatureMin: number, 
    windSpeedMax: number
    windSpeedMin: number, 
    weatherCodeMax: number, 
    weatherCodeMin: number, 
    Icon:IconType
    weatherCondition: string
}; 


const DailyItem = ({
    time,
    temperatureMax,
    temperatureMin, 
    Icon,
    weatherCondition,
}:WeatherProps) => {
  return (
   
    <div className='flex-col justify-center justify-items-center text-white'>
    
    <Icon className='size-12'/>
   
    <div className='flex-col justify-center justify-items-center'>
    <div className='text-2xl font-thin'>{dayFormat(time)}</div>
    <div className='text-2xl font-thin'>{temperatureMax}</div>
    </div>
    {/* <div>{weatherCondition}</div> */}
  
    </div>
    
  )
}

export default DailyItem