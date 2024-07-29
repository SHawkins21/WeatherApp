import Image from "next/image";
import { getRealtimeWeather, getWeatherForcast } from "./api/weather";
import DailyItem from "./components/DailyItem";
import { checkCondition } from "./utils/checkCondition";
import {DailyWeather} from "./constance/types"
// import Model from "./components/Model";



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
      <div className="">
      
     </div> 
     {/* <Model/> */}
     </div>
    </main>
  );
}
