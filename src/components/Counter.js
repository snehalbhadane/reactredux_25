
import { useCounter } from "./Countercontext.js"

export const Counter=()=>{
    const {count,increment,decrement}=useCounter();
{
    return(
        <div>
            <button data-testid="incrb" onClick={increment}>Increment</button>
            <button data-testid="decrb"onClick={decrement}>Decrement</button>
            <p data-testid="count-value">{count}</p>
        </div>

    )
};
}