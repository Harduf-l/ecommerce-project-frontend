import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { changeItems } from "../../redux/actions/cartActions";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: false,
      couponEntered: "",
      couponState: "",
      finalPrice: "",
      delivery: false,
      deliveryRequired: "",
      deliveryMethod: "",
    };
  }

  minus = (index) => {
    this.props.changeItems(index, "minus");
  };

  plus = (index) => {
    this.props.changeItems(index, "plus");
  };

  remove = (index) => {
    this.props.changeItems(index, "remove");
  };

  calculateTotal = (sign) => {
    let currentArray = [...this.props.reduxCart];
    let sum = 0;

    for (let i = 0; i < currentArray.length; i++) {
      sum = sum + currentArray[i].price * currentArray[i].quantity;
    }

    if (sign === "exist") {
      sum = sum - sum / 10;
    }

    if (this.state.delivery) {
      let deliveryFee = this.state.delivery;
      deliveryFee = +deliveryFee;
      sum = sum + deliveryFee;
    }

    localStorage.setItem("price", sum);
    return sum;
  };

  insertWord = (e) => {
    let currWord = e.target.value;
    this.setState({ couponEntered: currWord });
  };

  verifyCoupon = () => {
    if (this.state.couponEntered === "10OFF") {
      this.setState({ discount: true });
      this.setState({ couponState: "" });
    } else {
      this.setState({ couponState: "Enter a valid discount code" });
    }

    document.getElementById("couponInput").value = "";
  };

  addDeliveryFee = (e) => {
    console.log(e.target.value);

    switch (e.target.value) {
      case "express":
        this.setState({ deliveryRequired: "" });
        this.setState({ delivery: 15 });
        this.setState({ deliveryMethod: "express" });
        break;
      case "air":
        this.setState({ deliveryRequired: "" });
        this.setState({ delivery: 12 });
        this.setState({ deliveryMethod: "by air" });
        break;
      case "sea":
        this.setState({ deliveryRequired: "" });
        this.setState({ delivery: 9 });
        this.setState({ deliveryMethod: "by sea" });
        break;
      case "default":
        this.setState({ deliveryRequired: "Please choose a shipping method" });
        this.setState({ delivery: false });
        this.setState({ deliveryMethod: "" });
        break;
      default:
        break;
    }
  };

  moveCheckout = () => {
    if (this.state.delivery) {
      localStorage.setItem("deliveryPrice", this.state.delivery);
      localStorage.setItem("deliveryMethod", this.state.deliveryMethod);
      this.setState({ deliveryRequired: "" });
      this.props.history.push("/checkout");
    }
    this.setState({ deliveryRequired: "Please choose a shipping method" });
  };

  render() {
    return (
      <div>
        <span className="homeHeaderSpan">
          <h2 className="homeHeader" style={{ marginBottom: "60px" }}>
            Cart
          </h2>
        </span>

        <div
          className="row justify-content-center"
          style={{ margin: "0 auto", marginTop: "30px" }}
        >
          <div className="col-lg-5 col-12 mb-lg-0 mb-5">
            <div class="table-responsive">
              <table className="table smaller-phone-th">
                <thead>
                  <tr style={{ paddingTop: "80px" }}>
                  <th style={{ fontWeight: "600", borderColor: "#cecece" }}>
                      <span className="ms-4">Product</span>
                    </th>
                    <th style={{ fontWeight: "600", borderColor: "#cecece" }}>
                      <span className="ms-4"></span>
                    </th>
                    <th style={{ fontWeight: "600", borderColor: "#cecece" }}>
                      Price
                    </th>
                    <th style={{ fontWeight: "600", borderColor: "#cecece" }}>
                      <span>Quantity</span>
                    </th>

                    <th style={{ fontWeight: "600", borderColor: "#cecece" }}>
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.reduxCart.map((element, index) => {
                    return (
                      <tr style={{ borderColor: "black" }}>
                        <td style={{ borderColor: "#cecece" }}>
                          <div className="flex d-flex flex-wrap align-items-center">
                            <Link
                              to={`/product/${element.id}`}
                              style={{
                                textDecoration: "none",
                                color: "#2b3239",
                              }}
                            >
                              <img
                                style={{
                                  borderRadius: "20%",
                                  height: "80px",
                                  width: "70px",
                                  objectFit: "cover",
                                }}
                                src={element.pic1}
                                alt={"food product"}
                              />
                            </Link>
                          </div>
                        </td>
                        <td
                          style={{
                            paddingTop: "30px",
                            paddingBottom: "30px",
                            borderColor: "#cecece",
                          }}
                        >
                          {element.header}
                        </td>
                        <td
                          style={{
                            paddingTop: "30px",
                            paddingBottom: "30px",
                            borderColor: "#cecece",
                          }}
                        >
                          ${element.price}
                        </td>
                        <td
                          style={{
                            paddingTop: "30px",
                            paddingBottom: "30px",
                            borderColor: "#cecece",
                          }}
                        >
                          <span
                            className="ps-1 signToRemove"
                            onClick={() => this.minus(index)}
                          >
                            {" "}
                            <i className="fas fa-minus"></i>{" "}
                          </span>
                          <span className="ps-2 pe-2">
                            {this.props.reduxCart[index].quantity}{" "}
                          </span>
                          <span
                            className="pe-1 ps-1 signToRemove"
                            onClick={() => this.plus(index)}
                          >
                            {" "}
                            <i className="fas fa-plus"></i>{" "}
                          </span>
                        </td>

                        <td
                          style={{
                            paddingTop: "30px",
                            paddingBottom: "30px",
                            borderColor: "#cecece",
                          }}
                        >
                          <div className="flex d-flex justify-content-between">
                            ${element.price * element.quantity}
                            <button
                              className="dltbtn"
                              onClick={() => this.remove(index)}
                            >
                              <i class="fas fa-times"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex d-flex flex-wrap justify-content-between pt-4 pt-lg-3">
              <div>
                <input
                  onChange={(e) => this.insertWord(e)}
                  type="text"
                  id="couponInput"
                  style={{ width: "100px", paddingBottom: "5px" }}
                />
                <button
                  onClick={this.verifyCoupon}
                  className="ms-2 btn-secondary  btn btn-sm"
                >
                  Apply coupon
                </button>
                <div
                  style={{ color: "red", fontSize: "14px", marginTop: "4px" }}
                >
                  {this.state.couponState}
                </div>
              </div>

              <div>
                <Link
                  to="/catalog"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span style={{ textDecoration: "underline" }}>
                    Go back shopping
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-lg-5 col-12 ps-4 pt-2 pb-3 "
            style={{ backgroundColor: "#f2f5f3" }}
          >
            <h4
              className="pb-2"
              style={{ color: "#2b3239", fontWeight: "470" }}
            >
              Cart total
            </h4>
            {this.state.discount && (
              <span style={{ fontWeight: "600" }}>
                <span style={{ textDecoration: "line-through" }}>
                  {" "}
                  ${this.calculateTotal("notexist")}
                </span>{" "}
                ${this.calculateTotal("exist")} Incl. taxes
              </span>
            )}

            {!this.state.discount && (
              <span style={{ fontWeight: "600" }}>
                ${this.calculateTotal("notexist")} Incl. taxes
              </span>
            )}

            <br />
            <br />
            <select
              onChange={(e) => this.addDeliveryFee(e)}
              name="delivery"
              id="delivery"
            >
              <option value="default">Select delivery option</option>
              <option value="express">Express 1-2 days - $15</option>
              <option value="air">By air 10-14 days - $12</option>
              <option value="sea">By sea 21-28 days - $9</option>
            </select>
            <p style={{ color: "#e61a23", marginTop: "5px" }}>
              {this.state.deliveryRequired}
            </p>
            <div className="flex d-flex justify-content-end flex-wrap pt-5">
              <button
                onClick={this.moveCheckout}
                className="btn btn-light"
                style={{
                  backgroundColor: "#8fa663",
                  color: "white",
                  fontWeight: "490",
                }}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reduxCart: state.cart.reduxCart,
});

export default connect(mapStateToProps, { changeItems })(Cart);
