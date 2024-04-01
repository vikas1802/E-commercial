import React, { useEffect, useRef, useState } from 'react'


const UseRefHooks = () => {
const[counter, setCounter] = useState(0);
const count = useRef(0);

const handleclick = () =>{
    setCounter(counter+1);
}
useEffect(()=>{
count.current = count.current+1
},[counter  ]);

  return (
    <div>
        <p>counterRef:{count.current}</p>
        <p>counterstate:{counter}</p>
        <button onClick={handleclick}>click me</button>
    </div>
  )
}

export default UseRefHooks
