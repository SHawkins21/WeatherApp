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