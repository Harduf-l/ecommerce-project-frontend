import {Link} from 'react-router-dom'

import cacao_seeds from '../../pictures/superfood/cacao-seeds-original.jpg'
import React from 'react'
import Carousel2 from './Carousel2'
import allproducts from '../Data/allproducts'



class Home2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        
        }

    }

    

returnCookies =()=> {
    let allMyProducts = [...allproducts]

    allMyProducts = allMyProducts.filter((element) => 
    (element.category === "cookies"));
    if (allMyProducts.length>10){
        allMyProducts= allMyProducts.splice(0,10)
    }
    return allMyProducts
}

returnBreads =()=> {
    let allMyProducts = [...allproducts]

    allMyProducts = allMyProducts.filter((element) => 
    (element.category === "breads"));
    if (allMyProducts.length>10){
        allMyProducts= allMyProducts.splice(0,10)
    }
    return allMyProducts
}

returnSuper =()=> {
    let allMyProducts = [...allproducts]

    allMyProducts = allMyProducts.filter((element) => 
    (element.category === "superfood"));
    if (allMyProducts.length>10){
        allMyProducts= allMyProducts.splice(0,10)
    }

    return allMyProducts
}


    render() {

            
     return (

        <div>


 <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-inner">
     <div class="carousel-item active">
         <p className="shopHome" style={{position: "absolute", color: "white", fontSize:"50px", paddingLeft: "50px", paddingTop: "100px"}}>Welcome to a world of health and joy</p>
       <img src={cacao_seeds}  style={{height: "550px", width: "410px", objectFit: "cover", margin: "8px"} } class="d-block w-100" alt="..."/>
     </div>
   </div>
 </div> 
<Link to="/catalog" className="shopSquare">Shop now</Link>


<div style={{maxWidth: "1200px", margin: '0 auto', marginTop:'64px' }}>
<span className="homeHeaderSpan"><h2 className="homeHeader" style={{textAlign: "center", marginBottom: "20px"}}>Get to know our new breads collection</h2></span>
    <Carousel2 myArray={this.returnBreads()}>
    </Carousel2>

    <Link to={{ pathname: `/catalog/`, search: `breads` }} className="homeLinks"><button>Watch more</button></Link>


    <span className="homeHeaderSpan"><h2 className="homeHeader" style={{textAlign: "center", marginBottom: "20px"}}>Superfood for a perfect health</h2></span>
    <Carousel2 myArray={this.returnSuper()}>

    </Carousel2>


<Link to={{ pathname: `/catalog/`, search: `superfood` }} className="homeLinks"><button>Watch more</button></Link>


    <span className="homeHeaderSpan"><h2 className="homeHeader" style={{textAlign: "center", marginBottom: "20px"}}>Cookies On Sale</h2></span>
    <Carousel2 myArray={this.returnCookies()}>
  
        </Carousel2>
        <Link to={{ pathname: `/catalog/`, search: `cookies` }} className="homeLinks"><button>Watch more</button></Link>


    </div>
        </div>
        

     )
    }
}



export default Home2; 





