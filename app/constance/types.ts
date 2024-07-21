export type DailyWeather = { 
    time: string; 
    values:{
      temperatureMax: number, 
      temperatureMin: number, 
      windSpeedMax: number
      windSpeedMin: number, 
      weatherCodeMax: number, 
      weatherCodeMin: number, 
    }
  }
  