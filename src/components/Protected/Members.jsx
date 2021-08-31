import React from 'react'
import auth from '../../lib/auth'
import  {Link } from "react-router-dom";

import berries from '../../pictures/superfood/berries.jpg'
import chia from '../../pictures/superfood/chia.png'

let Members = (props) => {
    console.log(props)
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

        <Link to="/"><button onClick={()=>auth.logout()} className="btn btn-secondary btn-lg">Logout</button></Link>
        </div>
    )
}

export default Members