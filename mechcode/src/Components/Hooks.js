import React from 'react'
import { useState } from 'react'
const Hooks = () => {
    const[x,setx] = useState(5)
    const[y,sety] = useState("vikas")
    function handleplus(){
        setx(x+1)
    }
    function handleminus(){
        if(x<=0){
        setx(0)
        }
        else{
            setx(x-1)
        }
    }
    function handlename(){
        sety("golu")
    }
  return (
    <div>
      <h1>{y}</h1>
      <p>Number {x}</p>
      <button onClick={handleplus}>Add</button>
      <button onClick={handleminus}>Minus</button>
      <button onClick={handlename}>change name</button>
    </div>
  )
}

export default Hooks
