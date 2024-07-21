import Image from "next/image";
import { getRealtimeWeather, getWeatherForcast } from "./api/weather";

export default async function Home() {
const {data} = await getRealtimeWeather('Glens Falls')
// const {values} = data;
// const { tempature, windSpeed, tempatureApparent, weatherCode } = values; 
const {timelines} = await getWeatherForcast('32601')
const { daily } = timelines;

console.log(data); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Weather</h1>
      <div>
        {/* {tempature} */}
      </div>
      {
        daily.map((day:any, index:any) => (
          <div key={index}>
          {day.values.tempatureMax}
          </div>
        ))
      }
      
    </main>
  );
}
