import React from "react";
import { TbSunset2 } from "react-icons/tb";
import { getRealtimeWeather, getWeatherForcast } from "../api/weather";
import { weatherCodesArray } from "../constance/code";
import { DailyWeather } from "../constance/types";
import DailyItem from "./DailyItem";
import { checkCondition } from "../utils/checkCondition";

type Props = {};

const CenterBox = async ({ children }: { children: React.ReactNode }) => {
  const { data } = await getRealtimeWeather("Glens Falls");
  const { values } = data;
  // const {code, condition} = weatherCodesArray
  // const {wcvalue} = code
  const { temperature, windSpeed, temperatureApparent, weatherCode } = values;
  const { timelines } = await getWeatherForcast("32601");
  const { daily } = timelines;
  return (
    <div>
      <div className="relative flex justify-center mt-6">
        <div className="absolute flex-col justify-items-center justify-center">
          <TbSunset2 className="size-40" />
          <h2 className="">Feels Like</h2>
          <div className="flex justify-center text-4xl">
            {values.temperatureApparent}
          </div>
          <div className="text-5xl ">{temperature}</div>

          <div>
            {daily.slice(0, 3).map((day: DailyWeather, index: number) => (
              <div 
              
              key={index}>
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
      </div>

      {children}
    </div>
  );
};

export default CenterBox;
