import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { userKey } from "./locationStore";
declare type WeatherApiStore = {
    lat:number, 
    lon:number, 
    current:{
       
        temperatureApparentAvg: number,
        condition: {
            text: string,
            icon: string,
            code: number
        }
    }
}


export declare type WeatherApiStoreActions = { 
    getApi:(city:string) => Promise<void>
    setCoords:(lat:number, lon:number) => void
    coords:() => string
    
} 


export const useAPIWeatherStore = create< WeatherApiStore & WeatherApiStoreActions>()

(immer(
  persist(
    (set, get) => ({
    
    lat: 0,
    lon: 0,
    current:{
        temperatureApparentAvg: 0,
        temp_f: 0,
        condition: {
            text: '',
            icon: '',
            code:0
        },
    },
    setCoords: (lat:number, lon:number) => {
        set((state) => (
            {lat: state.lat = lat, lon: state.lon = lon}
        ))
    }, 
    //getter function
    coords: () => {
        const lat = get().lat
        const lon = get().lon
        const coords = `${lat},${lon}`
        return coords
    },


getApi: async (city:string) => {
    
    const res = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&timesteps=daily&units=imperial&apikey=${userKey}`,{
        method:'GET',
        headers:{
            'accept':'application/json', 
            'Content-Type':'application/json', 
            'AccessControlAllowOrigin':'http://localhost:3000'
        },
        cache:'force-cache'
    })
    const data = await res.json();
    console.log(data)
    set((state) => (
        {current: state.current = data.current}
    ))

}
}),
{
    name: 'location-store', 
    partialize(state) {
    return{
        lat:state.lat, 
        long:state.lon, 
    } }
}



)))