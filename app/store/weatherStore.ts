import {create} from 'zustand';

declare type WeatherStore ={
    current:{
        temperature: number;
        description: string;
        icon: string;
        location: string;
        condition:{
            text:string
            icon:string
            code:number
        }
    };
    }
    declare type WeatherStoreActions ={
        fetchWeather: (location:string)=>void;
    }

    export const useWeatherStore = create<WeatherStore & WeatherStoreActions>((set)=>({
        current:{
            temperature: 0,
            description: "",
            icon: "",
            location: "",
            condition:{
                text:"",
                icon:"",
                code:0
            }
        },
        fetchWeather: async (location:string)=>{
            const response = await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
            const data = await response.json();
            console.log(data);
            set((state)=>({
                current:{
                    temperature: data.temperature.value,
                    description: data.weatherCode.value,
                    icon: data.weatherCode.icon,
                    location: data.location.name,
                    condition:{
                        text: data.weatherCode.value,
                        icon: data.weatherCode.icon,
                        code: data.weatherCode.code
                    }
                }
            }));
        }
    }));
