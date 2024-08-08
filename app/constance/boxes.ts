import { stat } from 'fs';
import {create} from 'zustand'

interface BoxState {
    modal: boolean;
    count: number; 
    handleCount: () => void
    handleCountDown: () => void
    toggle: () => void
}

export const useBoxStore = create<BoxState>((set) => ({
    modal:false, 
    count: 0,
    toggle: () => set(state => ({modal: !state.modal})), 
    handleCount: () => set(state => ({count: state.count + 1})),
    handleCountDown: () => set(state => ({count: state.count - 1}))
}))