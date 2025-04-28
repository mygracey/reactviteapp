
import {useState} from "react"
import { useNavigate } from "react-router-dom"

function LoginForm(){
   const navigate=useNavigate()

    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[message,setMessage]=useState("Enter your username and password")


    function handlelogin(e){
        e.preventDefault()
        if(username=="" || password==""){
            setMessage("Please enter username and password")
        }
        else if(username=="kemi" && password=="kemi123"){
            setMessage("Hi " + username + " you are logged in!")
            setTimeout(()=>{
                    navigate("/")
            },4000)
            
        }
        else{
            setMessage("Sorry, unknown username or password")
        }
    }

    return(
        <div className="loginform">


        <form>
            <h3>{message}</h3>
            <input type="text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br/>

            <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br />

            <button onClick={handlelogin}>Login</button>
        </form>

        </div>
    )

}

export default LoginForm