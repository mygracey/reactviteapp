import { useState } from "react"
import {FaMoon,FaRegMoon} from "react-icons/fa6"


function Javascriptone(){
    const[text,setText]=useState("Welcome to learn coding solutions")

    const[textcolor,setTextColor]=useState("black")

    const[backgroundColor,setBackgroundColor]=useState("white")

    // let name="grace"
    // let school="learn coding"
      
    
    function handleclick(){
        setText(text=="Welcome to learn coding solutions"?"You are in. View Exciting new articles":"Welcome to learn coding solutions")
        setTextColor(textcolor=="black"?"white":"black")
        setBackgroundColor(backgroundColor=="white"?"black":"white")
    }
    




    return (
        <div className="jsone" style={{background:backgroundColor}}>
            <h2 style={{color:textcolor}}>{text}</h2>





            <button onClick={handleclick}>click here</button>

            {/* <FaRegMoon size={40} onClick={handlemode} /> */}

        </div>
    )

}

export default Javascriptone