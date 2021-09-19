import React from 'react'
import  {Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"

import berries from '../../pictures/superfood/berries.jpg'
import chia from '../../pictures/superfood/chia.png'
import {  useHistory } from "react-router-dom"

let Members = (props) => {

    const {  logout } = useAuth()
    const history = useHistory()
    

    async function logOutMembers() {
        

            try {
              await logout()
              localStorage.removeItem("name")
              history.push("/login")
              props.myfunc()
            } catch {
              console.log("Failed to log out")
            }
        
          
    }
   
    return(
        <div>
            <h1 style={{textAlign: "center", marginTop: "40px", marginBottom: "40px", color: "#272727"}}>Special sales for members only</h1>
        <div style={{ 
            backgroundImage: `url(${berries})`, height: "200px", objectFit: "contain"
          }}>
            <p style={{position: "relative", top: "60px", color: "white", fontSize: "42px", textAlign: "center", backgroundColor: "#e64723"}}>200 grams fresh berries - 9.90$ only!</p>
        </div>

        <div style={{ 
            backgroundImage: `url(${chia})`, marginTop: "40px", height: "200px", objectFit: "contain"
          }}>
            <p style={{position: "relative", top: "60px", color: "white", fontSize: "42px", textAlign: "center", backgroundColor: "#e64723"}}>100 grams chia - 18.90$ only!</p>
        </div>

        <Link to="/"><button onClick={()=>logOutMembers()} className="btn btn-secondary btn-lg">Logout</button></Link>
        </div>
    )
}

export default Members