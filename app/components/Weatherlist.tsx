"use client";
import { useEffect, useState } from "react";
import { useAPIWeatherStore } from "../store/weatherStore";
// import { getGeolocationCity } from "../api/cityhere";

const Weatherlist = () => {
  const locationKey = process.env.NEXT_LOCATION_API_KEY

  const [temp, setTemp] = useState(0);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [city, setCity] = useState(""); // Declare 'city' variable
  
  const geocodingUrl = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${lat},${lon},250&mode=retrieveAddresses&maxResults=1&gen=9&apiKey=${locationKey}`
  
  useEffect(() => {
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        return {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    const unsub = useAPIWeatherStore.subscribe((state, prevState) => {
      console.log(state, prevState);
      setTemp(state.current.temperatureApparentAvg);
    });
    return unsub;
  
  }, []);
  
  
  
  console.log(temp);
  
  fetch(geocodingUrl)
  .then((response) => response.json())
  .then((data) => {
    const city = data.results[0].address_components.find((component: { types: string | string[]; }) =>
      component.types.includes("locality")
    ).long_name;
  
    setCity(city); // Set the value of 'city' variable
    console.log("City:", city); // Output: "City Name"
  })
  
  .catch((error) => console.error("Error fetching city:", error));
  console.log(city); // Output: "City Name"
  
  return (
    <div>
      <h1>{city}</h1>
      <h2>Lat: {lat}</h2>
      <h2>Lon: {lon}</h2>
    </div>
  );
};

export default Weatherlist;
