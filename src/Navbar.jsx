
import {Link} from "react-router-dom"
import {FaMoon,FaRegMoon} from "react-icons/fa6"
import {useState,useEffect} from "react"

function Navbar(){

const[mode,setMode]=useState("white")
const[modecolor,setModeColor]=useState("black")
const[backgroundColor,setBackgroundColor]=useState("white")


function handlemode(){
    setMode(mode=="white"?"black":"white")
    setModeColor(modecolor=="black"?"white":"black")
    setBackgroundColor(backgroundColor=="white"?"black":"white")
}






    return(
        <div className="navbar">
            <nav>
                <h3>Logo</h3>
                <div className="navlinks">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/about" className="link">About</Link>
                    <Link to="/services" className="link">Services</Link>
                    <Link to="/contact" className="link">Contact</Link>
                    {/* <FaRegMoon onClick={handlemode} size={40} className="mode"/> */}
                    <button onClick={handlemode} style={{background:mode,color:modecolor}}>change mode</button>
                </div>
            </nav>
        </div>
    )

}

export default Navbar