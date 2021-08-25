import InnerImageZoom from 'react-inner-image-zoom'
import ReactStars from "react-rating-stars-component";

import vegan_pic from '../pictures/baners/natural.png'
import lowcarb_pic from '../pictures/baners/paleo.png'
import fair from '../pictures/baners/fairtrade.png'
import organic from '../pictures/baners/organic.png'
import React from 'react'

import {Link} from 'react-router-dom'
import allproducts from './allproducts'


class ProductSearch extends React.Component {


  constructor(props) {
    super(props)
    this.myProductArray = this.findProductsArray(this.props.match.params.id);    
}
      
  findProductsArray(id) {
    return allproducts.filter((currProduct)=>{
        return currProduct.header.toLowerCase().includes(id) || currProduct.description.toLowerCase().includes(id)|| currProduct.moreDescription.toLowerCase().includes(id)
    })
 }


    render() {
      
       
    

  return (
<div>
    { console.log(this.props)}
<div className="row pt-4 ps-5">
    {this.myProductArray.map((element) =>
        <div className="col-3" style={{border: "#f0f0f0 1px solid", height: "250px"}}>

<div>

  <div>
  <h4  className="col-6" style={{marginBottom: "5px"}}>{element.header}</h4>
  <div>
      {element.vegan && <img style={{padding: "2px"}}src={vegan_pic} alt="vegan"/>}
      {element.lowcarb && <img style={{padding: "2px"}} src={lowcarb_pic} alt="vegan"/>}
      {!element.lowcarb && !element.vegan && <img style={{padding: "2px", visibility:"hidden"}} src={lowcarb_pic} alt="vegan"/>}
    </div>
  </div>

  <div className="col-6">
    <div>{element.description}</div>
    <div style={{textDecoration: "line-through"}}>original price: <span>{element.previousPrice}$</span></div>
    <div style={{fontWeight: "bold", color: "#e64723"}}>sale price: {element.price}$</div>
  </div>


</div>

</div>
    )}
    

    </div>
    </div>
 )
    }

}


export default ProductSearch;





