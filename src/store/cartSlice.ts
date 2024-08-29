 
import { CartProduct } from "@/types/cartProd";
import { Product } from "@/types/product";
 
import { StateCreator } from "zustand";
import 'zustand/middleware/immer';

export type CartState = {
   products:CartProduct[];
   total:number;
}

type CartAction = {
   addProduct: (prod:Product) => void;
   removeProduct:(prodId:string) => void;
   incQty: (prodId:string) => void;
   decQty: (prodId:string) => void;
   getProductById:( prodId:string) => CartProduct[] | undefined;
   setTotal: (total:number) => void;
   reset:()=>void;
}

export type CartSlice = CartState & CartAction;

const initialState:CartState = {
    products:[],
    total:0,
}


export const createCartSlice:StateCreator<CartSlice, [['zustand/immer' , never]],[],CartSlice> = 
(set,get) => ({
  ...initialState,
  incQty:(productId) => set((state)=> {
    const foundProduct = state.products.find((product)=>product?.id === productId);

    if(foundProduct) {
        foundProduct.qty += 1;
    }

  }),
  decQty: (productId) =>
    set((state) => {
    const foundIndex =  state.products.findIndex((product)=> product?.id === productId) ;

    if(foundIndex !== -1 ){
    
        if(state?.products[foundIndex]?.qty ===1) {
            state.products.splice(foundIndex,1); 
        }else {
            state!.products[foundIndex]!.qty -= 1  ;
        }
    }
  }),
  addProduct:(product) => 
    set((state)=>{
    state?.products.push({...product,qty:1});
  }),
  removeProduct: (productId: string) =>
    set((state) => {
      if (!state.products) return;
      state.products = state.products.filter(
        (product) => (product?.id as string) !== productId
      );
    }),

    getProductById: (productId) : CartProduct[] | undefined =>
        {
            const product = get().products.find((product)=> product?.id === productId);
            return product ? [product] : undefined;
        },
    
  setTotal: (total) => 
    set((state)=>{
        state.total =total;
    }),
    reset:() =>set(()=>initialState)

})

 