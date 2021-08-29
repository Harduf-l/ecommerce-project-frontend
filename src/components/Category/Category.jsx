import React from 'react'

import dataCategory from '../Data/dataCategory'
import  {Link } from "react-router-dom";

class Category extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.num)

    }


    render() {

            
        let {mypictures, infotext, links} = dataCategory[this.props.num]
        let pictureCategoryStyle = {height: "250px", width: "440px", objectFit: "cover", marginLeft: "8px"}
        let infoStyle = {color: "white", backgroundColor: "rgba(143,147,151, 0.6)", width: "250px", position: "absolute", fontSize: "30px", left:"80px", top:"110px", zIndex: "9"}
        let outerLinkstyle = { marginBottom: "10px", position: "relative"}


     return (

        <div className="d-flex flex-wrap justify-content-center" style={{textAlign: "center", paddingTop: "30px"}}>
          
        <Link to={`/product${[links[0]]}`}style={outerLinkstyle}> <p style={infoStyle}>{infotext[0]}</p><img style={pictureCategoryStyle} alt={infotext[0]} src={mypictures[0]}/></Link>
        
        <Link to={`/product${[links[1]]}`} style={outerLinkstyle}> <p style={infoStyle}>{infotext[1]}</p><img style={pictureCategoryStyle} alt={infotext[1]} src={mypictures[1]}/></Link>

        <Link to={`/product${[links[2]]}`} style={outerLinkstyle}><p style={infoStyle}>{infotext[2]}</p><img style={pictureCategoryStyle} alt={infotext[2]} src={mypictures[2]}/></Link>
        
        <Link to={`/product${[links[3]]}`} style={outerLinkstyle} ><p style={infoStyle}>{infotext[3]}</p><img style={pictureCategoryStyle} alt={infotext[3]} src={mypictures[3]}/></Link>
        
        <Link to={`/product${[links[4]]}`}style={outerLinkstyle} ><p style={infoStyle}>{infotext[4]}</p><img style={pictureCategoryStyle} alt={infotext[4]} src={mypictures[4]}/></Link>
        
        <Link to={`/product${[links[5]]}`} style={outerLinkstyle}  ><p style={infoStyle}>{infotext[5]}</p><img style={pictureCategoryStyle} alt={infotext[5]} src={mypictures[5]}/></Link>
        
        </div>
        )
    }
}



export default Category; 