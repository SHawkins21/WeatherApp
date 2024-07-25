import React from "react";
import { dayFormat } from "../utils/dayFormat";
import { IconType } from "react-icons";

type Props = {
  time: string;
  temperatureMax: number;
  temperatureMin: number;
  windSpeedMax: number;
  windSpeedMin: number;
  weatherCodeMax: number;
  weatherCodeMin: number;
  Icon: IconType;
  weatherCondition: string;
};

const DailyItem = ({
  time,
  temperatureMax,
  temperatureMin,
  windSpeedMax,
  windSpeedMin,
  Icon,
  weatherCondition,
}: Props) => {
  return (
   
      <div className=" justify-center justify-items-center ">
    
          <div>{dayFormat(time)}</div>
          <div className="w-6 h-6">
            <Icon />
          </div>
          <div>{temperatureMax}</div>
           {/* <div>{windSpeedMax} | {windSpeedMin}</div> */} 
           {/* <div>{weatherCondition}</div> */}
      </div>
   

     
  
  );
};

export default DailyItem;
