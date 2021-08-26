import InnerImageZoom from 'react-inner-image-zoom'
import ReactStars from "react-rating-stars-component";

import vegan_pic from '../../pictures/baners/natural.png'
import lowcarb_pic from '../../pictures/baners/paleo.png'
import fair from '../../pictures/baners/fairtrade.png'
import organic from '../../pictures/baners/organic.png'
import React from 'react'

import {NavLink} from 'react-router-dom'
import allproducts from '../Data/allproducts'


class Product extends React.Component {


  constructor(props) {
    super(props)
    this.myProduct = this.findProductById(this.props.match.params.id);
    
    

    this.state= {
      quantity: localStorage.getItem(this.myProduct.id) || 1,
      currentpicture: this.myProduct.pic1,
      stylepicture1: {width: "80px", height: "80px", objectFit: "cover",  marginLeft: "20px", border: "1px solid #fe4c4c", boxShadow: " 0 0 8px rgba(230,71,35, 1)"},
      stylepicture2: {width: "80px", height: "80px", objectFit: "cover",  marginLeft: "20px"},
      stylepicture3: {width: "80px", height: "80px", objectFit: "cover",  marginLeft: "20px"},

    }

    
      this.minus = () => {

        if (this.state.quantity) {
          let newQuantity = this.state.quantity
          newQuantity = newQuantity-1
          this.setState({quantity: newQuantity})
          let myCart =  JSON.parse.localStorage.getItem("cart") || []
          myCart.push(this.myProduct.id, newQuantity)
          localStorage.setItem("cart", JSON.stringify(myCart) );
        }
      }

      this.plus = () => {
        let newQuantity = this.state.quantity
        newQuantity = newQuantity+1
        this.setState({quantity: newQuantity})
       
        let myCart =  JSON.parse.localStorage.getItem("cart") || []
        myCart.push(this.myProduct.id, newQuantity)
        localStorage.setItem("cart", JSON.stringify(myCart) );
      }

    this.changePic = (e) => {
      console.log(e.target.id)
      const specialStyle = {width: "80px", height: "80px", objectFit: "cover",  marginLeft: "20px",border: "1px solid #fe4c4c", boxShadow: " 0 0 8px rgba(230,71,35, 1)"}
      const regularStyle = {width: "80px", height: "80px", objectFit: "cover",  marginLeft: "20px"}

      switch(e.target.id) {
        case "pic1":
          this.setState({currentpicture: this.myProduct.pic1 })
          this.setState({stylepicture1: specialStyle})
          this.setState({stylepicture2: regularStyle})
          this.setState({stylepicture3: regularStyle})

          break;
        case "pic2":
          this.setState({currentpicture: this.myProduct.pic2  })
          this.setState({stylepicture1: regularStyle})
          this.setState({stylepicture2: specialStyle})
          this.setState({stylepicture3: regularStyle})

          break;
        case "pic3":
          this.setState({currentpicture: this.myProduct.pic3 })
          this.setState({stylepicture1: regularStyle})
          this.setState({stylepicture2: regularStyle})
          this.setState({stylepicture3: specialStyle})

          break;
        default:
          break; 
      }
    }
  }
      
  findProductById(id) {
    return allproducts.find((currProduct)=>{
        return currProduct.id===id
    })
 }


    render() {
      

      console.log(this.props.match.params.id)
    

  return (

<div id="bigfoodDiv" className=" container d-flex justify-content-center flex-wrap pt-5">

  <div className="col-12 col-lg-5 col-md-6 pe-2 ps-md-0 ps-3">

     <div className="pb-4">
       <NavLink className="hoverlink" to='/'>Home</NavLink>
       <NavLink className="hoverlink" to={this.myProduct.category}> / {this.myProduct.category}</NavLink>
       <span style={{textDecoration: "none", color: "black"}}> / {this.myProduct.header}</span>
       </div>

      <h4>{this.myProduct.header}</h4>
        <ReactStars
        count={5}
        size={24}
        value = {4}
        activeColor="#e64723"
      />,
  
      {this.myProduct.vegan && <img style={{padding: "2px", marginTop: "10px"}}src={vegan_pic} alt="vegan"/>}
      {this.myProduct.lowcarb && <img style={{padding: "2px",  marginTop: "10px"}} src={lowcarb_pic} alt="lowcarb"/>}
  
      <div style={{marginTop:"10px"}}>{this.myProduct.description}</div>
      <div>{this.myProduct.moreDescription}</div>
      <p style={{color: "#6f0000" , marginTop: "22px"}}>{this.myProduct.loveIt}<span><i className="fas fa-heart"></i></span></p>
      <div  style={{textDecoration: "line-through"}}>original price: <span>{this.myProduct.previousPrice}$</span></div>
      <div style={{fontWeight: "bold", color: "#e64723"}}>sale price: {this.myProduct.price}$</div>
      <br/>
      <span className="me-1">quantity:</span> 
        
      <span className="ms-2" style={{color: "white", backgroundColor: "#2e4e14", cursor: "pointer", borderRadius: "50%", fontSize: "10px", }} onClick={this.minus}> <i className="fas fa-minus"></i> </span> 
      <span className="ps-2 pe-2">{this.state.quantity}</span>
      <span  style={{color: "white", backgroundColor: "#2e4e14", cursor: "pointer", borderRadius: "50%", fontSize: "10px", paddingRight: "3px"}} onClick={this.plus}> <i className="fas fa-plus"></i> </span> 
      <br/>
      <button className="btn btn-secondary mb-1 mt-4 me-2">Add to cart</button>
      <button className="btn mb-1 mt-4" style={{backgroundColor: "#305017", color: "white"}}>Add to favorites</button>


            <div className="accordion accordion-flush mt-3" style={{marginLeft: "-20px"}} id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              storage & delivery information
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">In order to keep cookies fresh as possible, please keep them in the refrigerator.<br/><br/> Delivery free worldwide.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              reviews (2)
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            <div>        <ReactStars
                        count={5}
                        size={20}
                        value = {5}
                        activeColor="#e64723"
            /></div>
           <h6>very tasty natural food.</h6>
           <p>i enjoyed it very much. highly recommended</p>
           <p style={{color: "grey", textAlign: "end"}}>Jeniffer n.</p>
            
           <div>        <ReactStars
                        count={5}
                        size={20}
                        value = {4}
                        activeColor="#e64723"
            /></div>
           <h6>surprisingly well made.</h6>
           <p>but a bit too expensive. better wait for sales</p>
           <p style={{color: "grey", textAlign: "end"}}>Edward r.</p>

            </div>
          </div>
        </div>
      </div>

        
        
    </div>

       <div className="col-12 col-lg-4 col-md-6 pt-4 pt-md-2">

       <div style={{textAlign: "center"}}>
        <InnerImageZoom alt={"product"} src={this.state.currentpicture} hasSpacer={true} height={450} width={400}/>
      </div>


        <div className="col-12" style={{display: "inline-block", textAlign: "center", marginTop: "20px"}}>
          <img alt={"product"} src={this.myProduct.pic1} onMouseOver={(e) => this.changePic(e)} id="pic1" style={this.state.stylepicture1} />
          <img alt={"product"} src={this.myProduct.pic2} onMouseOver={(e) => this.changePic(e)} id="pic2" style={this.state.stylepicture2} />
          <img alt={"product"} src={this.myProduct.pic3} onMouseOver={(e) => this.changePic(e)} id="pic3" style={this.state.stylepicture3} />
        </div>

        </div>


  <div className="col-lg-3 col-12 ps-3 pt-4 pt-lg-0" style={{textAlign: "center"}}>

        <div>
          <h4 style={{paddingBottom: "10px"}}>Important to know</h4> 
          <div style={{width: "90%", margin: "0 auto"}}>{this.myProduct.info}</div>
        </div>

        <div className="pt-5 ps-2"  style={{}}>
          <a href="https://www.britannica.com/topic/organic-food" target="_blank" rel="noreferrer"> <img  alt={"product"}  style={{width: "150px"}} src={organic}/></a>
          <a href="https://www.fairtrade.net/" target="_blank" rel="noreferrer"><img  alt={"product"}  style={{width: "100px"}} src={fair}/></a>
        </div>

    </div>
       
</div>
    )

}

}


export default Product;





