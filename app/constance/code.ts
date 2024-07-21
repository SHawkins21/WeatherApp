import { IconType } from "react-icons"
import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherNight, TiWeatherPartlySunny, TiWeatherShower, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny, TiWeatherWindyCloudy } from "react-icons/ti"
import { getRealtimeWeather, getWeatherForcast } from "../api/weather"
export type weatherCodes = {
 code:number
 condition:string
 Icon:IconType
}[]

export const weatherCodesArray:weatherCodes = [

 {
    code:1000,
    condition:"Clear, Sunny",
    Icon:TiWeatherSunny
 },
 {
    code:1101,
    condition:"Partly Cloudy",
    Icon:TiWeatherPartlySunny
 },
 {
    code:1001,
    condition:"Cloudy",
    Icon:TiWeatherCloudy
 },
 {
    code:1009,
    condition:"Cloudy Windy",
    Icon:TiWeatherWindyCloudy
 },
 {
    code:10001,
    condition:"Clear Night",
    Icon:TiWeatherNight
 },
 {
    code:4001,
    condition:"Rain",
    Icon:TiWeatherShower
 },
 {
    code:5000,
    condition:"Snow",
    Icon:TiWeatherSnow
 },
 {
    code:80000,
    condition:"Thunderstorm",
    Icon:TiWeatherStormy
 },
{
    code:4201,
    condition:"Heay Rain",
    Icon:TiWeatherDownpour
 },

]
// export const {data} = await getRealtimeWeather('Glens Falls')
// export const {values} = data;
// export const { temperature, windSpeed, temperatureApparent, weatherCode } = values; 
// export const {timelines} = await getWeatherForcast('32601')
// export const { daily } = timelines;
 