import React from "react";
import { TbSunset2 } from "react-icons/tb";
import { getRealtimeWeather, getWeatherForcast } from "../api/weather";
import { weatherCodesArray } from "../constance/code";
import { DailyWeather } from "../constance";
import DailyItem from "./DailyItem";
import { checkCondition } from "../utils/checkCondition";
import { TfiTime } from "react-icons/tfi";
import Model from "./Model";
import TempCont from "./TempCont";
import {getFavoriteLocation} from "../orm/getcity";
import moment from "moment";
import TimeBanner from "./TimeBanner";
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
          {/* Time Banner Start */}
    <TimeBanner />
          {/* Time Banner End */}
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
      <Model />
        
      </div>
      
      {children}
    </div>
  );
};

export default CenterBox;
