import React from 'react'
import  {Link } from "react-router-dom";
import MiniCart from '../Cart/MiniCart'

class Header extends React.Component {

  constructor(props) {
    super() 

    this.state = { 
      valueInput: "",
      cartHover: false, 
      items: 0, 
    }

    this.trackInput = (e) => {
      let newWord = e.target.value
      this.setState({valueInput: newWord})
    }

  }

  componentDidMount() {
    if ( localStorage.getItem("cart") == null || localStorage.getItem("cart") === [] ) {
      this.setState({items: 0 })
  } else {
      let cart = JSON.parse(localStorage.getItem("cart")); 
      let number = 0;

      for (let i=0; i< cart.length; i++) {
        number = number + cart[i].quantity
      }

      this.setState({items: number })
  }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.itemsInCart)
    this.setState({items: nextProps.itemsInCart })
  }

  removePlaceHolder = (e) => {
    this.setState({valueInput: ""})
    document.getElementById("inputon").value = ""
  }

  
  componentDidMount = () => {
    let { innerWidth: width } = window;
    console.log(width); 
  }

  cartHoverFunction = () => {
    this.setState({cartHover: true})
  }


  cartNotHoverFunction = () => {
    this.setState({cartHover: false})
  }

  render() {

    return (

<nav className="navbar navbar-expand-lg navbar-light pb-0 pt-2"  style={{borderBottom: "#eaedf2 2px solid", fontSize: "17px"}}>
  <div className="container-fluid">
  <Link className="navbar-brand ms-2" to="/">
      <span><i style={{fontSize: "37px", color: "#e64723"}}className="fas fa-spa"></i></span>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item text-center">
        <Link className="nav-link hovernav"  aria-current="page" to="/">
              Home page
              </Link>
              </li>
              <li className="nav-item text-center">
              <Link className="nav-link hovernav"  aria-current="page" to="/about">
              About
              </Link>
              </li>
              <li className="nav-item text-center" >
              <Link className="nav-link hovernav"  aria-current="page" to="/blog">
              Blog
              </Link>
              </li>
              <li className="nav-item text-center" >
              <Link className="nav-link hovernav"  aria-current="page" to="/login">
              Login/register
              </Link>
              </li>
              
              <li className="nav-item text-center cartHover" onClick ={this.cartHoverFunction} style={{position: "relative", cursor: "pointer"}}>
              <div className="nav-link">
                <div className="cartHover">
                  <i className="fas fa-shopping-cart">
                    <div className="cartBtnNumberStyle">{this.state.items}</div>
                    </i></div>
                  </div>
              </li>


      </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle hovernav" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link style={{textAlign: "center"}} className="dropdown-item" to="/product/cookies" params={{index: 0}}>cookies</Link></li>
            <li><Link style={{textAlign: "center"}} className="dropdown-item" to="/product/spreads" params={{index: 1}}>spreads</Link></li>
            <li><Link style={{textAlign: "center"}} className="dropdown-item" to="/product/breads" params={{index: 2}}>breads</Link></li>
            <li><Link style={{textAlign: "center"}} className="dropdown-item" to="/product/superfood" params={{index: 3}}>superfood</Link></li>
          </ul>
        </li>
              <li className="nav-item hovernav">
              <Link className="nav-link" to="/catalog">
              Catalog
              </Link>
              </li>
              <li className="nav-item text-center hovernav" >
              <Link style={{color: "red"}} className="nav-link"  aria-current="page" to="/membersZone">
              Members Zone
              </Link>
              </li>
          </ul>
          <form className="d-flex">
              <input id="inputon" onChange={(e) => this.trackInput(e)} className="form-control me-2" type="search" placeholder="I would like to buy..." aria-label="Search"/>
              {console.log(this.state.valueInput)}

              {this.state.valueInput  && <Link to={{pathname:`/catalog/`, search:`q="${this.state.valueInput}"`}}><button onClick={(e) => this.removePlaceHolder(e)} className="btn btn-outline-success me-2" type="submit">Search</button></Link>}
              {!this.state.valueInput && <button onClick={(e) => this.removePlaceHolder(e)} className="btn btn-outline-success me-2" type="submit">Search</button>}
              </form>
    </div>
  </div>

      { this.state.cartHover &&
        <div className="cartModal" >
          <MiniCart checkCart={this.props.checkCart} cartNotHoverFunction={this.cartNotHoverFunction} />
        </div> }

</nav>

    )
  }

}

export default Header
