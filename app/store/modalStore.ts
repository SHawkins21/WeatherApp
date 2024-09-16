import { create } from "zustand";
import { ModalStore, ModalStoreActions } from "../constance";




export const useModalStore = create<ModalStore & ModalStoreActions>( (set) =>({
    //isOpen state variable is used to check if the modal is open or not
    isOpen:false,
    //toggle action is used to toggle the modal
    toggle:() => set((state) => 
        (
            {isOpen:!state.isOpen}
        ))
   

}))