import React from 'react'
import { TbSunset2 } from "react-icons/tb";
import { getRealtimeWeather, getWeatherForcast } from '../api/weather';
import { weatherCodesArray } from '../constance/code';

type Props = {}

const CenterBox = async ({ children, }: { children: React.ReactNode }) => {
    const {data} = await getRealtimeWeather('Glens Falls')
    const {values} = data
    const { temperature, windSpeed, temperatureApparent, weatherCode } = values; 
    const {timelines} = await getWeatherForcast('32601')
    const { daily } = timelines;
  return (
    <div>
        <div className='flex justify-center mt-6'>
            <div>
                <TbSunset2 className='size-40'/>
                <h1 className='flex justify-center text-4xl'>{values.temperatureApparent}</h1>
                <h2></h2>
            </div>
        </div>
        
        {children}
    </div>
  )
}

export default CenterBox