import vegan_pic from '../pictures/baners/natural.png'
import lowcarb_pic from '../pictures/baners/paleo.png'
import fair from '../pictures/baners/fairtrade.png'
import organic from '../pictures/baners/organic.png'
import React from 'react'


class Product extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      currentpicture: this.props.foodContent.pic1, 
      stylepicture1: {width: "80px", height: "80px", objectFit: "cover",  marginLeft: "20px", boxShadow: " 0 0 8px rgba(230,71,35, 1)"},
      stylepicture2: {width: "80px", height: "80px", objectFit: "cover",  marginLeft: "20px"},
      stylepicture3: {width: "80px", height: "80px", objectFit: "cover",  marginLeft: "20px"},

    }

    this.changePic = (e) => {
      console.log(e.target.id)
      const specialStyle = {width: "80px", height: "80px", objectFit: "cover",  marginLeft: "20px", boxShadow: " 0 0 8px rgba(230,71,35, 1)"}
      const regularStyle = {width: "80px", height: "80px", objectFit: "cover",  marginLeft: "20px"}

      switch(e.target.id) {
        case "pic1":
          this.setState({currentpicture: this.props.foodContent.pic1})
          this.setState({stylepicture1: specialStyle})
          this.setState({stylepicture2: regularStyle})
          this.setState({stylepicture3: regularStyle})

          break;
        case "pic2":
          this.setState({currentpicture: this.props.foodContent.pic2})
          this.setState({stylepicture1: regularStyle})
          this.setState({stylepicture2: specialStyle})
          this.setState({stylepicture3: regularStyle})

          break;
        case "pic3":
          this.setState({currentpicture: this.props.foodContent.pic3})
          this.setState({stylepicture1: regularStyle})
          this.setState({stylepicture2: regularStyle})
          this.setState({stylepicture3: specialStyle})

          break;
        default:
          break; 
      }
    }
  }
  

    render() {

  let {header, description, category, moreDescription, info, vegan, lowcarb, loveIt, price,previousPrice, pic1, pic2, pic3, quantity} = this.props.foodContent
      let myid = this.props.myid
      let plus = this.props.plus
      let minus = this.props.minus

    return (

      

<div id="bigfoodDiv" className=" container d-flex justify-content-center flex-wrap pt-5">

  <div className="col-12 col-lg-5 col-md-6 pe-2">

     <div className="pb-4">Home / {category} / {header}</div>

      <h4 style={{marginBottom: "20px"}}>{header}</h4>
  
      {vegan && <img style={{padding: "2px"}}src={vegan_pic} alt="vegan"/>}
      {lowcarb && <img style={{padding: "2px"}} src={lowcarb_pic} alt="lowcarb"/>}
  
      <div style={{marginTop:"10px"}}>{description}</div>
      <div>{moreDescription}</div>
      <p style={{color: "#6f0000" , marginTop: "22px"}}>{loveIt}<span><i className="fas fa-heart"></i></span></p>
      <div  style={{textDecoration: "line-through"}}>original price: <span>{previousPrice}$</span></div>
      <div style={{fontWeight: "bold", color: "#e64723"}}>sale price: {price}$</div>
      <br/>
      <span className="me-1">quantity:</span> 
        
      <span className="ms-2" style={{color: "white", backgroundColor: "#2e4e14", cursor: "pointer", borderRadius: "50%", fontSize: "10px", }} onClick={() => minus(myid)}> <i class="fas fa-minus"></i> </span> 
      <span className="ps-2 pe-2">{quantity}</span>
      <span  style={{color: "white", backgroundColor: "#2e4e14", cursor: "pointer", borderRadius: "50%", fontSize: "10px"}} onClick={() => plus(myid)}> <i class="fas fa-plus"></i> </span> 
      <button className="btn btn-secondary  ms-4 mb-1 mt-2 me-2">Add to cart</button>
      <button className="btn mb-1 mt-2" style={{backgroundColor: "#305017", color: "white"}}>Add to favorites</button>


            <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              storage & delivery information
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">In order to keep cookies fresh as possible, please keep them in the refrigerator.<br/><br/> Delivery free worldwide.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              reviews
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">very tasty!</div>
          </div>
        </div>
      </div>

        
        
    </div>

       <div className="col-12 col-lg-4 col-md-6 pt-3 pt-md-0">

            <img className="col-12" src={this.state.currentpicture} style={{height: "400px", objectFit: "cover" }} alt="product"/>
        <div className="col-12" style={{display: "inline-block", textAlign: "center", marginTop: "20px"}}>
          <img src={pic1} onMouseOver={(e) => this.changePic(e)} id="pic1" style={this.state.stylepicture1} alt="product"/>
          <img src={pic2} onMouseOver={(e) => this.changePic(e)} id="pic2" style={this.state.stylepicture2} alt="product"/>
          <img src={pic3} onMouseOver={(e) => this.changePic(e)} id="pic3" style={this.state.stylepicture3} alt="product"/>
        </div>

        </div>


  <div className="col-lg-3 col-12 ps-3 pt-4 pt-lg-0" style={{textAlign: "center"}}>

        <div>
          <h4 style={{paddingBottom: "10px"}}>importatnt to know...</h4> 
          {info}
        </div>

        <div className="pt-5 ps-2"  style={{}}>
          <img style={{width: "150px"}} src={organic}/> 
          <img style={{width: "100px"}} src={fair}/> 
        </div>

    </div>
       
</div>
    )

}

}


export default Product;





