declare type CityItem = {
  name: string;
  country: string;
  sendCity:(id:number) => void 
}

declare type LocationsProp = { 
    locations: 
    {
        id:number; 
        city: string; 
        country: string;
        
    }[]
    | undefined; 
    sendCity:() => void 
}

declare interface LocationStore {
    location: string; 
    count: number;
    setLocation:(location: string) => void; 
}