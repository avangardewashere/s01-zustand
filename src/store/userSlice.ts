import { create } from "zustand";
import { StateCreator } from "zustand";

export type UserState = {
    userName:string;
    fullName:string;
    age:number;
    address:string;
}

type UserAction = {
    setAddress:(address:string) => void;
}

export type UserSlice = UserState & UserAction;

export const createUsersSlice:StateCreator<UserSlice, [],[],UserSlice> = (set) => ({
    address: '',
    age:0,
    fullName: '',
    userName:'',
    setAddress:(address)=> set(( )=>({  address:address}))
})

const useCountStore = create<{nested:{count:number};inc:()=>void}>(
    (set)=>({
        nested:{count:0},
        inc:()=>set((state)=>({
        nested:{...state.nested,count:state.nested.count + 1},
}))
})
)