import InnerImageZoom from "react-inner-image-zoom";
import ReactStars from "react-rating-stars-component";

import vegan_pic from "../../pictures/baners/natural.png";
import lowcarb_pic from "../../pictures/baners/paleo.png";
import fair from "../../pictures/baners/fairtrade.png";
import organic from "../../pictures/baners/organic.png";
import React from "react";

import { NavLink } from "react-router-dom";
import allproducts from "../Data/allproducts";

import { auth } from "../../firebase";

import { connect } from "react-redux";
import { changeItems } from "../../redux/actions/cartActions";
import axios from "axios";


class Product extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      contentError: "",
      titleError: "",
      nameError: "",
      headerReview: "",
      contentReview: "",
      nameReview: "",
      myComments: this.props.myComments,
      cartBtn: "Add to cart",
      cartStyle: { backgroundColor: "#555555", color: "white" },
      favoriteBtn: "Add to favorites",
      favoriteBtnStyle: { backgroundColor: "#305017", color: "white" },
      quantity: 1,
      currentpicture: this.props.myProduct.pic1,
      stylepicture1: {
        width: "80px",
        height: "80px",
        objectFit: "cover",
        margin: "5px",
        border: "2px solid #dd9431",
        boxShadow: " 0 0 8px #dd9431",
      },
      stylepicture2: {
        width: "80px",
        height: "80px",
        objectFit: "cover",
        margin: "5px",
      },
      stylepicture3: {
        width: "80px",
        height: "80px",
        objectFit: "cover",
        margin: "5px",
      },
      starsInserted: 5,
      formClasses: "mt-4 d-none",
    };

    this.minus = () => {
      if (this.state.quantity > 1) {
        let newQuantity = this.state.quantity;
        newQuantity = newQuantity - 1;
        this.setState({ quantity: newQuantity });
      }
    };

    this.plus = () => {
      let newQuantity = this.state.quantity;
      newQuantity = newQuantity + 1;
      this.setState({ quantity: newQuantity });
    };

    this.addtoCart = () => {
      this.setState({ cartBtn: "Added to cart" });
      this.setState({
        cartStyle: { backgroundColor: "#dd9431", color: "white" },
      });

      setTimeout(() => {
        this.setState({
          cartBtn: "Add to cart",
          cartStyle: { backgroundColor: "#555555", color: "white" },
        });
      }, 1200);

      let myQuantity = this.state.quantity;

      let doesExist = false;
      let cart;

      if (localStorage.getItem("cart") == null) {
        cart = [];
      } else {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      if (cart) {
        for (let i = 0; i < cart.length; i++) {
          if (cart[i].id === this.props.myProduct.id) {
            cart[i].quantity = myQuantity;
            doesExist = true;
          }
        }
      }

      if (!doesExist) {
        let product = {
          id: this.props.myProduct.id,
          header: this.props.myProduct.header,
          price: this.props.myProduct.salePrice,
          quantity: myQuantity,
          pic1: this.props.myProduct.pic1,
        };

        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      this.props.changeItems();
    };

    this.addtoFavorites = () => {
      return auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({ favoriteBtn: "Added to favorites" });
          this.setState({
            favoriteBtnStyle: { backgroundColor: "#a50a0a", color: "white" },
          });

          setTimeout(() => {
            this.setState({
              favoriteBtn: "Add to favorites",
              favoriteBtnStyle: { backgroundColor: "#305017", color: "white" },
            });
          }, 1200);



        ///////////
        
      let doesFavExist = false;
      let loveCart = []

      if (localStorage.getItem("loveCart") == null ) {
        loveCart = [];
      } else {
        loveCart = JSON.parse(localStorage.getItem("loveCart"));
      }

      if (loveCart) {
        for (let i = 0; i < loveCart.length; i++) {
          if (loveCart[i].id === this.props.myProduct.id) {
            doesFavExist = true;
          }
        }
      }

      if (!doesFavExist) {
        let productLoved = {
          id: this.props.myProduct.id,
          header: this.props.myProduct.header,
          price: this.props.myProduct.salePrice,
          pic1: this.props.myProduct.pic1,
        };

        loveCart.push(productLoved);
      }

      localStorage.setItem("loveCart", JSON.stringify(loveCart));
        ///////



        } else {
          window.location = "/login";
        }
      });
    };

    
    this.addReview = (e) => {
      e.preventDefault()

          let reviewId = Date.now()

          const newReview = {
            rating: this.state.starsInserted,
            title: this.state.headerReview,
            content: this.state.contentReview,
            name: this.state.nameReview,
            productId: this.props.myProduct.id,
            id: reviewId
          };


          
          axios.post(`${process.env.REACT_APP_API_URL}/reviews`, newReview).then((res) => {
            window.scrollTo(0, 0);
            this.setState({
              headerReview: "",
              formClasses: "mt-4 d-none",
              contentReview: "",
              nameReview: "",
              starsInserted: 5,
              nameError: "",
              titleError: "",
              contentError: ""
            }, ()=> {
              let commentsArray = [...this.state.myComments]
              commentsArray.unshift(newReview)
              this.setState({myComments: commentsArray})
            });
          }).catch((err)=> {
            this.setState({
              nameError: "",
              titleError: "",
              contentError: ""
            }, ()=> {
              err.response.data.map((element) => {
                return this.setState({ [element.field + "Error"]: element.field + " " + element.message })
              })
            })
          })
        
    }



    this.changePic = (e) => {
      const specialStyle = {
        width: "80px",
        height: "80px",
        objectFit: "cover",
        margin: "5px",
        border: "2px solid #dd9431",
        boxShadow: " 0 0 8px #dd9431",
      };
      const regularStyle = {
        width: "80px",
        height: "80px",
        objectFit: "cover",
        margin: "5px",
      };

      switch (e.target.id) {
        case "pic1":
          this.setState({ currentpicture: this.props.myProduct.pic1 });
          this.setState({ stylepicture1: specialStyle });
          this.setState({ stylepicture2: regularStyle });
          this.setState({ stylepicture3: regularStyle });

          break;
        case "pic2":
          this.setState({ currentpicture: this.props.myProduct.pic2 });
          this.setState({ stylepicture1: regularStyle });
          this.setState({ stylepicture2: specialStyle });
          this.setState({ stylepicture3: regularStyle });

          break;
        case "pic3":
          this.setState({ currentpicture: this.props.myProduct.pic3 });
          this.setState({ stylepicture1: regularStyle });
          this.setState({ stylepicture2: regularStyle });
          this.setState({ stylepicture3: specialStyle });

          break;
        default:
          break;
      }
    };
  }

  findProductById(id) {
    return allproducts.find((currProduct) => {
      return currProduct.id === id;
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {


    const ratingChanged = (newRating) => {
      this.setState({ starsInserted: newRating });
    };

    return (

      <div
        id="bigfoodDiv"
        className=" container d-flex justify-content-center flex-wrap pt-5"
      >
        <div className="col-12 col-lg-5 col-md-6 ps-md-0 ps-3">
          <div className="pb-4">

            <NavLink className="hoverlink" to="/">
              Home
            </NavLink>

            <NavLink className="hoverlink" to={`/categories/${this.props.myProduct.category}`}>
              {" "}
              / {this.props.myProduct.category}
            </NavLink>
            <span style={{ textDecoration: "none", color: "black" }}>
              {" "}
              / {this.props.myProduct.header}
            </span>
          </div>
          <h4>{this.props.myProduct.header}</h4>
          <ReactStars
            count={5}
            size={24}
            value={this.props.myProduct.rating}
            edit={false}
            activeColor="#e64723"
          />
          {this.props.myProduct.vegan && (
            <img
              style={{ padding: "2px", marginTop: "10px" }}
              src={vegan_pic}
              alt="vegan"
            />
          )}
          {this.props.myProduct.lowcarb && (
            <img
              style={{ padding: "2px", marginTop: "10px" }}
              src={lowcarb_pic}
              alt="lowcarb"
            />
          )}
          <div style={{ marginTop: "10px" }}>{this.props.myProduct.shortDesc}</div>
          <div>{this.props.myProduct.longDesc}</div>
          <p style={{ color: "#6f0000", marginTop: "22px" }}>
            {this.props.myProduct.loveDesc}
            <span>
              <i className="fas fa-heart"></i>
            </span>
          </p>
          <div style={{ textDecoration: "line-through" }}>
            Original price: <span>{this.props.myProduct.price}$</span>
          </div>
          <div style={{ fontWeight: "bold", color: "#e64723" }}>
            Sale price: {this.props.myProduct.salePrice}$
          </div>
          <br />
          <span className="me-1">Quantity:</span>
          <span
            className="ms-2"
            style={{
              color: "white",
              backgroundColor: "#2e4e14",
              cursor: "pointer",
              borderRadius: "50%",
              fontSize: "10px",
            }}
            onClick={this.minus}
          >
            {" "}
            <i className="fas fa-minus"></i>{" "}
          </span>
          <span className="ps-2 pe-2">{this.state.quantity}</span>
          <span
            style={{
              color: "white",
              backgroundColor: "#2e4e14",
              cursor: "pointer",
              borderRadius: "50%",
              fontSize: "10px",
              paddingRight: "3px",
            }}
            onClick={this.plus}
          >
            {" "}
            <i className="fas fa-plus"></i>{" "}
          </span>
          <br />
          <button
            onClick={this.addtoCart}
            className="btn btn-light mb-1 mt-4 me-2"
            style={this.state.cartStyle}
          >
            {this.state.cartBtn}
          </button>
          <button
            onClick={this.addtoFavorites}
            className="btn btn-light mb-1 mt-4"
            style={this.state.favoriteBtnStyle}
          >
            {this.state.favoriteBtn}
          </button>
          <div
            className="accordion accordion-flush mt-3"
            style={{ marginLeft: "-20px" }}
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Storage & Delivery information
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  In order to keep product fresh as possible, please keep it
                  in the refrigerator.
                  <br />
                  <br /> Delivery free worldwide.
                </div>
              </div>
            </div>

            {this.state.myComments.length > 0 && (
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Reviews ({this.state.myComments.length})
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div style={{ height: "20px" }}></div>

             
                  <div 
                  style=
                  {{ height: "130px", overflowY: "scroll" }}
                  >
                    {this.state.myComments.map((currentReview) => {
                      return (
                        <div style={{ marginLeft: "20px" }}>
                          <div>
                            {" "}
                            <ReactStars
                              count={5}
                              size={20}
                              value={currentReview.rating}
                              activeColor="#e64723"
                              edit={false}
                            />
                          </div>
                          <h6>{currentReview.title}</h6>
                          <p style={{ margin: 0 }}>{currentReview.content}</p>
                          <p
                            style={{
                              color: "grey",
                              paddingRight: "20px",
                              textAlign: "end",
                            }}
                          >
                            {currentReview.name}
                          </p>
                        </div>
                      );
                    })}
                  </div> 
                </div> 
              </div>
            )}
            <div className="mt-4 ms-3 pb-3 pb-md-0">
              <button
                onClick={() => {
                  this.state.formClasses === "mt-4 d-none"
                    ? this.setState({ formClasses: "mt-4" })
                    : this.setState({ formClasses: "mt-4 d-none" });
                }}
                className="btn btn-light"
                style={{ border: "2px solid #dadada" }}
              >
                Add a review
              </button>

              <form
                className={this.state.formClasses}
                style={{
                  backgroundColor: "#ebeef3",
                  padding: "20px 20px 20px 10px",
                  borderRadius: "10px",
                }}
              >
                <div class="mb-3">
                  <label for="nameInput" class="form-label">
                    Name
                  </label>
                  <input value={this.state.nameReview} onChange={(e)=>{this.setState({nameReview: e.target.value})}}
                  type="text" class="form-control" id="nameInput" />
                  <div className="reviewError">{this.state.nameError}</div>
                </div>
                <div class="mb-3" style={{paddingTop: "10px"}}>
                  <label for="headerInput" class="form-label">
                    Header
                  </label>
                  <input 
                  value={this.state.headerReview}
                  onChange={(e)=>{this.setState({headerReview: e.target.value})}}
                  type="text" class="form-control" id="headerInput" />
                  <div className="reviewError">{this.state.titleError}</div>
                </div>

                <div class="mb-3" style={{paddingTop: "10px"}}>
                  <div>Your rating</div>
                  <ReactStars
                    count={5}
                    size={20}
                    value={5}
                    activeColor="#e64723"
                    onChange={ratingChanged}
                  />
                </div>

                <div class="mb-3" >
                  <label for="contentInput" class="form-label">
                    Content
                  </label>
                  
                  <textarea
                  value={this.state.contentReview}
                  onChange={(e)=>{this.setState({contentReview: e.target.value})}}
                    rows="4"
                    type="text"
                    class="form-control"
                    id="contentInput"
                  ></textarea>
                  <div className="reviewError">{this.state.contentError}</div>
                </div>

                <button
                  onClick={(e)=> this.addReview(e)}
                  type="submit"
                  class="btn btn-light"
                  style={{ border: "2px solid #dadada", marginTop: "10px" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4 col-md-6 pt-4 pe-3 ps-3">
          <div style={{ textAlign: "center" }}>
            <InnerImageZoom
              alt={"product"}
              src={this.state.currentpicture}
              hasSpacer={true}
              height={450}
              width={400}
            />
          </div>

          <div
            className="col-12"
            style={{
              display: "inline-block",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <img
              alt={"product"}
              src={this.props.myProduct.pic1}
              onMouseOver={(e) => this.changePic(e)}
              id="pic1"
              style={this.state.stylepicture1}
            />
            <img
              alt={"product"}
              src={this.props.myProduct.pic2}
              onMouseOver={(e) => this.changePic(e)}
              id="pic2"
              style={this.state.stylepicture2}
            />
            <img
              alt={"product"}
              src={this.props.myProduct.pic3}
              onMouseOver={(e) => this.changePic(e)}
              id="pic3"
              style={this.state.stylepicture3}
            />
          </div>
        </div>

        <div
          className="col-lg-3 col-12 ps-md-3 ps-sm-0 pt-4 pt-lg-0"
          style={{ textAlign: "center" }}
        >
          <div
            style={{
              border: "1px rgba(221,148,49, 0.5) solid",
              paddingTop: "5px",
              marginTop: "10px",
            }}
          >
            <h4
              style={{
                paddingBottom: "10px",
                paddingTop: "10px",
                color: "#2b3239",
              }}
            >
              Important to know
            </h4>
            <div
              style={{ width: "90%", margin: "0 auto", paddingBottom: "10px" }}
            >
              {this.props.myProduct.storageInfo}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#f0f0f0",
              marginTop: "20px",
              height: "100px",
            }}
          >
            <h6
              style={{
                textAlign: "start",
                color: "#305017",
                marginLeft: "10px",
                paddingTop: "8px",
              }}
            >
              Ingredients:
            </h6>
            <div
              style={{
                textAlign: "start",
                fontSize: "12px",
                marginLeft: "10px",
              }}
            >
              cacato butter, whole-wheat flour, dates syrop, bitter sweet
              chocolate ©organic certificated{" "}
            </div>
          </div>

          <div className="pt-3 ps-2" style={{}}>
            <a
              href="https://www.britannica.com/topic/organic-food"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img alt={"product"} style={{ width: "150px" }} src={organic} />
            </a>
            <a
              href="https://www.fairtrade.net/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt={"product"}
                style={{ marginTop: "10px", width: "100px" }}
                src={fair}
              />
            </a>
          </div> 
        </div> 
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { changeItems })(Product);
