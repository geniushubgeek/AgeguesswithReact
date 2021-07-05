import React, {useState, setState} from "react";
import "./styles.css";



export default function GuessMyAge (){
  const [Age, Newage] = useState()
  function ageGet() {
   return  Newage(40)
  }  
  return <div>
<h1> Guess My Age</h1>
<h3> My age is {Age} </h3>
<button onClick={ageGet}> Reveal </button>

    </div>
}