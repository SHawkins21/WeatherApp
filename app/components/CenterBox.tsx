import React from "react";
import { TbSunset2 } from "react-icons/tb";
import { getRealtimeWeather, getWeatherForcast } from "../api/weather";
import { weatherCodesArray } from "../constance/code";
import { DailyWeather } from "../constance/types";
import DailyItem from "./DailyItem";
import { checkCondition } from "../utils/checkCondition";
import { TfiTime } from "react-icons/tfi";
import Model from "./Model";
import TempCont from "./TempCont";
import GetCities from "../orm/getcity";

type Props = {};

const CenterBox = async ({ children }: { children: React.ReactNode }) => {
  // const setCity = async () => {
  //   await console.log(city)
  // }
  const { data } = await getRealtimeWeather("Glens Falls");
  const { values } = data;
  // const {code, condition} = weatherCodesArray
  // const {wcvalue} = code
  const { temperature, windSpeed, temperatureApparent, weatherCode } = values;
  const { timelines } = await getWeatherForcast("32601");
  const { daily } = timelines;
  return (
    <div>
      <div className="relative h-screen w-full flex justify-center">
        <div className="absolute flex-col justify-items-center justify-center">
          <div className="text-white">
            <TbSunset2 className="size-40" />
            <TempCont temperature={temperature} />
            {/* <div className="flex justify-center text-4xl">
              {values.temperatureApparent}
            </div> */}
            <div className="flex justify-items-center justify-center">
              Clear
            </div>
          </div>
        </div>
        <div className="space-y-10">
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
              <h2 className="font-bold">5:42</h2> <p>PM</p>
            </div>
          </div>
          <div className="flex justify-center justify-items-center space-x-12 mt-20">
            {daily.slice(0, 3).map((day: DailyWeather, index: number) => (
              <div key={index}>
                <DailyItem
                  key={index}
                  {...day.values}
                  time={day.time}
                  weatherCondition={
                    checkCondition(daily.values.weatherCodeMax).condition
                  }
                  Icon={checkCondition(day.values.weatherCodeMax).Icon}
                />
                {/* {day.values.temperatureMax} */}
              </div>
            ))}
          </div>
        </div>
      <Model locations={undefined} 
      
      sendCity={GetCities} />
        
      </div>
      
      {children}
    </div>
  );
};

export default CenterBox;
