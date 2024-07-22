import Image from "next/image";
import { getRealtimeWeather, getWeatherForcast } from "./api/weather";
import DailyItem from "./components/DailyItem";
import { checkCondition } from "./utils/checkCondition";
import {DailyWeather} from "./constance/types"




export default async function Home() {
const {data} = await getRealtimeWeather('Glens Falls')
const {values} = data;
const { temperature, windSpeed, temperatureApparent, weatherCode } = values; 
const {timelines} = await getWeatherForcast('32601')
const { daily } = timelines;

  return (
    <main className=" p-24 text-white">
      <div className="container max-w-[90%]">
      {/* flex justify-between items-center mt-1 */}
      {/* //flex flex-col items-center gap-2 border-2 rounded-lg p-2 font-bold */}
      
      <div className="text-5xl">
        {temperature}
      </div>
      {
        daily.map((day:DailyWeather, index:number) => (
          <div key={index}>
            <DailyItem 
              key={index}
              {...day.values}
              time={day.time}
              weatherCondition={checkCondition(daily.values.weatherCodeMax).condition}
              Icon={checkCondition(day.values.weatherCodeMax).Icon}            />
          {/* {day.values.temperatureMax} */}
          </div>
        ))
      }
     </div> 
    </main>
  );
}
