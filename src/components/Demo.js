import React,{useState} from 'react'


const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

const Demo = () => {
    const[count,setCount]=useState(0);
    const increment=()=>
    {
        setCount(count+1);
    }
    const decrement=()=>
    {
        setCount(count-1);
    }
  return (
    <div>
      <h1>Welcome to testing</h1>
      <h2>Hello</h2>
      <img title="My image" src="https://www.shutterstock.com/search/background"/>
      <button  data-testid="incrb" onClick={increment}>Increment</button>
      <button  data-testid="decrb" onClick={decrement}>Decrement</button>

     
    </div>
  )
}

export default Demo
