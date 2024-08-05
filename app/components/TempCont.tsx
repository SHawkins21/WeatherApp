"use client";
import AnimateNumber from "@crossfox/react-animated-number";
import React, { useEffect, useState } from "react";
import { getRealtimeWeather } from "../api/weather";
type Props = {
    temperature: any;
};

const TempCont = ({temperature}: Props) => {
  const [temp, setTemp] = useState(0);
//   const { data } = await getRealtimeWeather("Glens Falls");
//   const { values } = data;

  useEffect(() => {
    setTemp(temperature), [temperature];
  });

  // const { temperature, windSpeed, temperatureApparent, weatherCode } = values;
  return (
    <div>
      <div className="flex justify-center text-4xl">
        <AnimateNumber value={temp} />
      </div>
    </div>
  );
};

export default TempCont;
