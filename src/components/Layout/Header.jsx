import React from 'react'
import  {Link } from "react-router-dom";
import MiniCart from '../Cart/MiniCart'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";


import {changeItems} from '../../redux/actions/cartActions'

class Header extends React.Component {

  constructor(props) {
    super(props) 

    this.state = { 
      valueInput: "",
      cartHover: false, 
      smallScreen: true, 
      heartCond: "fas fa-heart"
    }

    this.trackInput = (e) => {
      let newWord = e.target.value
      this.setState({valueInput: newWord})
    }

  }

  componentDidMount() {

  this.props.changeItems()

  let { innerWidth: width, } = window;

  if (width > 996) {
    this.setState({smallScreen: false})
  } else {
    this.setState({smallScreen: true})
  }

  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.numOfFav !== this.props.numOfFav) {
      
        setTimeout(()=>{  
          this.setState({heartCond: "fas fa-heart" })

      }, 700);

        setTimeout(()=>{  
          this.setState({heartCond: "far fa-heart" })

      }, 1900);

  }

  }

  removePlaceHolder = (e) => {
    this.setState({valueInput: ""})
    document.getElementById("inputon").value = ""
  }

  

  cartHoverFunction = () => {

    this.setState({cartHover: true})

  }


  cartNotHoverFunction = () => {
    this.setState({cartHover: false})
  }


  heartover = () => {
    this.setState({heartCond: "far fa-heart" })
  }
  heartout= () => {
    this.setState({heartCond: "fas fa-heart" })
  }

  render() {

    let adminStyle;
    if (this.props.location.pathname ==="/adminsPortal") {
      adminStyle = "navbar navbar-expand-lg navbar-light pb-0 pt-2 mt-5"
    }
     else {
      adminStyle = "navbar navbar-expand-lg navbar-light pb-0 pt-2"
    }

    return (

<nav className={adminStyle}  style={{borderBottom: "#eaedf2 2px solid", fontSize: "17px"}}>
  <div className="container-fluid">
  <Link className="navbar-brand ms-2" to="/">
      <span className="logoHome"><i className="fas fa-spa"></i></span>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
              {this.props.userName ? <Link className="nav-link hovernav"  aria-current="page" to="/dashboard">
              Hello, {this.props.userName}
              </Link> :
              <Link className="nav-link hovernav"  aria-current="page" to="/dashboard">
               Login/register
               </Link>}
              </li>

              
              {!this.state.smallScreen &&
              <li className="nav-item text-center cartHover" onClick ={this.cartHoverFunction} style={{position: "relative", cursor: "pointer"}}>
              <div className="nav-link">
                <div className="cartHover">
                  <i className="fas fa-shopping-cart">
                    <div className="cartBtnNumberStyle">{this.props.quantity}</div>
                    </i></div>
                  </div>
              </li> }

              {this.state.smallScreen &&
             <Link to="/cart"> <li className="nav-item text-center cartHover" style={{position: "relative", cursor: "pointer"}}>
              <div className="nav-link">
                <div className="cartHover">
                  <i className="fas fa-shopping-cart">
                    <div className="cartBtnNumberStyle">{this.props.quantity}</div>
                    </i></div>
                  </div>
              </li> </Link> }

              <Link onMouseOver={this.heartover}  onMouseOut={this.heartout}  to="/favorites" style={{position: "relative"}}>
              <li className="nav-item text-center" onClick={this.checkFavorite}  style={{ cursor: "pointer"}}>
              <div className="nav-link">
                <div className="heartStyle">
                   <i className={this.state.heartCond}></i>
                </div>
                  </div>
              </li>
              </Link>

      </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle hovernav"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link style={{textAlign: "center"}} className="dropdown-item" to="/categories/cookies" params={{index: 0}}>cookies</Link></li>
            <li><Link style={{textAlign: "center"}} className="dropdown-item" to="/categories/spreads" params={{index: 1}}>spreads</Link></li>
            <li><Link style={{textAlign: "center"}} className="dropdown-item" to="/categories/breads" params={{index: 2}}>breads</Link></li>
            <li><Link style={{textAlign: "center"}} className="dropdown-item" to="/categories/superfood" params={{index: 3}}>superfood</Link></li>
          </ul>
        </li>
              <li className="nav-item hovernav">
              <Link className="nav-link" to="/catalog">
              Catalog
              </Link>
              </li>
              {/* <li className="nav-item text-center hovernav" >
              <Link style={{color: "#e61a23"}} className="nav-link"  aria-current="page" to="/membersZone">
              Members Zone
              </Link>
              </li> */}
              <li className="nav-item text-center hovernav" >
              <Link style={{color: "#004369"}} className="nav-link"  aria-current="page" to="/adminsPortal">
              Admins Portal
              </Link>
              </li>
          </ul>
          <form className="d-flex">
              <input id="inputon" onChange={(e) => this.trackInput(e)} className="form-control me-2" type="search" placeholder="I would like to buy..." aria-label="Search"/>
         

              {this.state.valueInput  && <Link to={{pathname:`/catalog/`, search:`q="${this.state.valueInput}"`}}><button onClick={(e) => this.removePlaceHolder(e)} className="btn btn-outline-success me-2" type="submit">Search</button></Link>}
              {!this.state.valueInput && <button onClick={(e) => this.removePlaceHolder(e)} className="btn btn-outline-success me-2" type="submit">Search</button>}
              </form>
    </div>
  </div>

      { this.state.cartHover && window.location.pathname!=="/cart" && window.location.pathname!=="/checkout" &&
        <div className="cartModal" >
          <MiniCart cartNotHoverFunction={this.cartNotHoverFunction} />
        </div> }

</nav>

    )
  }

}


const mapStateToProps = state => ({
  quantity: state.cart.quantity
});

export default withRouter(connect(mapStateToProps,{changeItems})(Header));

