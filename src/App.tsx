export default function App(){
  return <></>
}


// import { create } from "zustand"
// import { Button } from "./components/ui/button";

 
//  const useStore =create<{
//   count:number,
//   inc: () => void;
//   dec: () => void;
//  }>((set)=>({
//   count:0,
//   inc:() => set((state)=>({count:state.count +1})),
//   dec:()=> set((state)=>({count:state.count -1}))
//  }))

// function App() {

//   const store = useStore();
 

//   return(
//     <div className="bg-blue-200 flex flex-col items-center justify-center w-64 h-64">
//       <span className="text-red-900">Helloest worlds</span>
//      <Button onClick={store.inc}>Add</Button>
//      <Count />
//      <Button onClick={store.dec}>Sub</Button>
//     </div>
//   )
// }

// function Count(){
//   const store = useStore();
//   return(  <span className="flex w-64 items-center justify-center ">{store.count}</span>)
// }

// export default App
