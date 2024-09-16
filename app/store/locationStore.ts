import {create} from "zustand"; 

export const userKey = process.env.NEXT_PUBLIC_API_KEY
// https://www.weatherapi.com/


export const useLocationStore = create<LocationStore>((set) => ({
    location: 'Glens Falls', 
    count: 0, 
    setLocation: () => set((state) => ({location: state.location})), 
    setCount: () => set((state) => ({count: state.count + 1})),
}))

const key = process.env.NEXT_PUBLIC_APIKEY

