import { useEffect } from "react"
import { Weather } from "../constance"

// const API_KEY = '53ZzVg1FUdTS4IGR1pZoMKN6mi7RU3Xm'
const userKey = process.env.NEXT_PUBLIC_API_KEY

export const getRealtimeWeather = async (city : string) => { 
    return fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${city}&units=imperial&apikey=${userKey}`,{
        method:'GET',

        headers:{
            'Content-Type':'application/json'
        },
        cache: 'force-cache'
    })
    .then((response) => response.json())
    .catch((error:any) => {
        console.error('Error:',error)
    })
}

export const getWeatherForcast =async (city : string) => {
    return fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&timesteps=daily&units=imperial&apikey=${userKey}`, {
        method:'GET',

        headers:{
            'Content-Type':'application/json'
        },
        cache: 'force-cache'
    })
    .then((response) => response.json())
    .catch((error:any) => {
        console.error('Error:',error)
    })
 }
 export const updateLocation = async (city:string) => {
    try{
        const res = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&timesteps=daily&units=imperial&apikey=${userKey}`,{
        method:'GET',
        headers:{
            'accept':'application/json', 
            'Content-Type':'application/json', 
            'AccessControlAllowOrigin':'http://localhost:3000'
        },
        cache:'force-cache',
    })
    const data: Weather = await res.json();
    console.log(data)
    
    const {current, location, forecast} = data
    console.log(current.temperatureApparentAvg)
    console.log(forecast.forecastday.day)
    // location(data.location.name)
    // setTemp(data.current.temperatureApparentAvg)
    // setCurrrent({
    //     location:{
    //         ...location
    //     }, 
    //     current:{
    //         ...current
    //     },
    //     forecast: {
    //         forecastday: []
    //     }
    // })
    // return data
    
    } catch(e) {
        console.log(e)
    }
    }

export const saveLocation = (location:string) => {
    // call api 
    updateLocation(location);
    //close modal 
    //toggleModal();
    //setCity('')
    //setFavoriteLocation(location)
}

export const checkNavigator = () => {

    if(!navigator.permissions && !navigator.geolocation){
        alert('Please enable location services')
    }
    else{
        navigator.permissions.query({name: 'geolocation'}).then((permissions) => {
            if(permissions.state === 'granted'){
                //get location by lat and lon
                navigator.geolocation.getCurrentPosition((p) => {
                    updateLocation(`${p.coords.latitude},${p.coords.longitude}`)
                });
                }})
                console.log('granted'); 
                }}
        
    
//useEffect(() => {checkNavigator()}, [])
//useEffect(() => {handleData()}, [])
            
