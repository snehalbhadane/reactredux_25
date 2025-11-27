import { useState } from "react";
import { createContext,useContext } from "react";

const Countercontext=createContext();

export const CounterProvider=({children}) =>
{
    const [count,setCount]=useState(0);

    const increment=()=>setCount(prev=>prev+1);
    const decrement=()=>setCount(prev=>prev-1);

    return(
        <Countercontext.Provider value={(count,increment,decrement)}>
        {children}
        </Countercontext.Provider>


    );
};

export function useCounter() {
const ctx = useContext(Countercontext);
if (!ctx) throw new Error('useCounter must be used inside CounterProvider');
return ctx;
}

