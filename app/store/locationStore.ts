import {create} from "zustand"; 

// https://www.weatherapi.com/


export const useLocationStore = create<LocationStore>((set) => ({
    location: 'Glens Falls', 
    count: 0, 
    setLocation: () => set((state) => ({location: state.location})), 
    setCount: () => set((state) => ({count: state.count + 1})),
}))