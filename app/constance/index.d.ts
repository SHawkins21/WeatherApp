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
  
  export declare type favoriteLocations = {
    city: string | null
  }[] | undefined
  
  export declare type location = {
    city: string | null
  }
  
  export declare type Weather = {
    location:{
        name:string
    }, 
    current:{
        temperatureApparentAvg:number, 
        condition:{
            text:string
        }
    }; 
    forecast:{
        forecastday:{
            date:string, 
            day:{
                maxtemp_f:number, 
                mintemp_f:number,
                condition:{
                    text:string,
                    code: number, 
                }
            }[]; 
        }
    }
  }
  export declare type CounterStore = {
    counter: number;
};
export declare type CounterStoreActions = {
    increment: () => void;
    decrement: () => void;
};

export declare type ModalStore = {
    isOpen:boolean;
}
export declare type ModalStoreActions = {
    toggle:() => void;
}

export declare type favLocations =
  | {
      city: string | null;
    }[]
  | undefined;

  export declare type ForcastsArray = {
  

    date: string;
    day: {
      maxtemp_f: number;
      mintemp_f: number;
      condition: {
        text: string;
        code: number;
      };
    };
  

}[]


export declare type Forcasts = {
  

    date: string;
    day: {
      maxtemp_f: number;
      mintemp_f: number;
      condition: {
        text: string;
        code: number;
      };
    };
  

}
