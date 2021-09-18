import React from 'react'
import  {Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"

import berries from '../../pictures/superfood/berries.jpg'
import chia from '../../pictures/superfood/chia.png'
import goji from '../../pictures/superfood/goji-berry.jpg'
import spirulina from '../../pictures/superfood/Spirulina.jpg'

import bread1 from '../../pictures/bread/baguette.jpg'
import bread4 from '../../pictures/bread/whole-wheat-bread.jpg'


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
   
    const discountStyle = {position: "relative", top: "60px", color: "white", fontSize: "20px", textAlign: "center", backgroundColor: "#e64723"}

    return(
        <div>
           <span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "60px"}}>Special Sales</h2></span>

           <div className="d-flex flex-wrap justify-content-around"> 

        <div style={{ 
            backgroundImage: `url(${berries})`, borderRadius: "20px", height: "200px",width: "200px", objectFit: "contain"
          }}>
            <p style={discountStyle}>200 grams fresh berries - 9.90$ only!</p>
        </div>

        <div style={{ 
            backgroundImage: `url(${chia})`,borderRadius: "20px", height: "200px", width: "200px", objectFit: "contain"
          }}>
            <p style={discountStyle}>100 grams chia - 18.90$ only!</p>
        </div>

        <div style={{ 
            backgroundImage: `url(${bread1})`,borderRadius: "20px", height: "200px", width: "200px", objectFit: "contain"
          }}>
            <p style={discountStyle}>4 baguettes - 4.90$ only!</p>
        </div>

        <div style={{ 
            backgroundImage: `url(${goji})`,borderRadius: "20px", height: "200px", width: "200px", objectFit: "contain"
          }}>
            <p style={discountStyle}>100 grams goji - 8.90$ only!</p>
        </div>

        <div style={{ 
            backgroundImage: `url(${spirulina})`,borderRadius: "20px", height: "200px", width: "200px", objectFit: "contain"
          }}>
            <p style={discountStyle}>100 grams spirulina - 10.90$ only!</p>
        </div>

        <div style={{ 
            backgroundImage: `url(${bread4})`,borderRadius: "20px", height: "200px", width: "200px", objectFit: "contain"
          }}>
            <p style={discountStyle}>rye bread loaf - 8.90$ only!</p>
        </div>
        
        </div>

        <div style={{width: "100px", margin: "0 auto", textAlign: "center", marginTop: "100px"}}>
        <Link to="/"><button onClick={()=>logOutMembers()} className="btn btn-secondary btn-lg">Logout</button></Link>
        </div>
        </div>
    )
}

export default Members