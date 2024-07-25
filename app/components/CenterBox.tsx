import React from "react";
import { TbSunset2 } from "react-icons/tb";
import { getRealtimeWeather, getWeatherForcast } from "../api/weather";
import { weatherCodesArray } from "../constance/code";
import { TfiTime } from "react-icons/tfi";

type Props = {};

const CenterBox = async ({ children }: { children: React.ReactNode }) => {
  const { data } = await getRealtimeWeather("Glens Falls");
  const { values } = data;
  const { temperature, windSpeed, temperatureApparent, weatherCode } = values;
  const { timelines } = await getWeatherForcast("32601");
  const { daily } = timelines;
  return (
    <div className="">     
{/* sun and Apparent Tempature Start  */}
          <div className="">
            <div>
              <TbSunset2 className="size-40" />
            </div>
            <h1 className="">{values.temperatureApparent}</h1>
          </div>
{/* sun and Apparent Tempature End  */}
{/* Time Component of the Layout Start*/}
          <div className="flex justify-between h-[60px] w-[200px] place-items-center
                          bg-gradient-to-r from-white to-transparent rounded-2xl text-black">
            <div className="flex space-x-3 m-2">
              <TfiTime className="size-5"/>
              <h1>Time</h1>
            </div>
            <div className="flex space-x-1 m-2">
              <h2>5:42</h2> <p>PM</p>
            </div>
          </div>
{/* Time Component of the Layout End*/}
      {children}
    </div>
  );
};

export default CenterBox;
