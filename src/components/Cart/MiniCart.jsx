import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { changeItems } from "../../redux/actions/cartActions";

class MiniCart extends React.Component {
  minus = (index) => {
    this.props.changeItems(index, "minus");
  };

  plus = (index) => {
    this.props.changeItems(index, "plus");
  };

  remove = (index) => {
    this.props.changeItems(index, "remove");
  };

  calculateTotal = () => {
    let currentArray = [...this.props.reduxCart];
    let sum = 0;

    for (let i = 0; i < currentArray.length; i++) {
      sum = sum + currentArray[i].price * currentArray[i].quantity;
    }

    return sum;
  };

  calculateHeader = (string, sign) => {
    string = string.split(" ");

    if (sign === 1) {
      return string[0];
    } else if (sign === 2 && string[1]) {
      return string[1];
    }
    return null;
  };

  render() {
    return (
      <div
        onMouseLeave={this.props.cartNotHoverFunction}
        className="cartOverFlow"
      >
        {this.props.reduxCart.length ? (
          <table
            className="table smaller-phone-th"
            style={{ fontSize: "13px" }}
          >
            <thead style={{ display: "block" }}>
              <tr style={{ paddingTop: "80px" }}>
                <th
                  style={{
                    width: "130px",
                    fontWeight: "600",
                    borderColor: "#cecece",
                  }}
                >
                  <span>Product</span>
                </th>
                <th
                  style={{
                    width: "75px",
                    fontWeight: "600",
                    borderColor: "#cecece",
                  }}
                >
                  Price
                </th>
                <th
                  style={{
                    width: "60px",
                    fontWeight: "600",
                    borderColor: "#cecece",
                  }}
                >
                  <span>Qty</span>
                </th>

                <th style={{ fontWeight: "600", borderColor: "#cecece" }}>
                  Total
                </th>
              </tr>
            </thead>
            <tbody
              style={{
                height: "160px",
                overflowY: "scroll",
                display: "inline-block",
              }}
            >
              {this.props.reduxCart.map((element, index) => {
                return (
                  <tr style={{ borderColor: "black" }}>
                    <td style={{ borderColor: "#cecece", width: "135px" }}>
                      <div className="flex d-flex flex-wrap align-items-center">
                        <Link
                          to={`/product/${element.id}`}
                          style={{ textDecoration: "none", color: "#2b3239" }}
                        >
                          <img
                            style={{
                              borderRadius: "20%",
                              height: "50px",
                              width: "40px",
                              objectFit: "cover",
                            }}
                            src={element.pic1}
                            alt={"food product"}
                          />
                        </Link>

                        <span style={{ marginLeft: "10px" }}>
                          {this.calculateHeader(element.header, 1)}
                          <br />
                          {this.calculateHeader(element.header, 2)}
                        </span>
                      </div>
                    </td>

                    <td
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        borderColor: "#cecece",
                        width: "45px",
                      }}
                    >
                      ${element.price}
                    </td>
                    <td
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        borderColor: "#cecece",
                        width: "90px",
                      }}
                    >
                      <span
                        className="ms-2 signToRemove"
                        style={{
                          color: "white",
                          backgroundColor: "#2e4e14",
                          fontWeight: "bold",
                          cursor: "pointer",
                          borderRadius: "50%",
                          fontSize: "10px",
                          paddingLeft: "2px",
                        }}
                        onClick={() => this.minus(index)}
                      >
                        {" "}
                        <i className="fas fa-minus"></i>{" "}
                      </span>
                      <span className="ps-2 pe-2">
                        {this.props.reduxCart[index].quantity}{" "}
                      </span>
                      <span
                        className="ps-1 signToRemove"
                        style={{
                          color: "white",
                          backgroundColor: "#2e4e14",
                          fontWeight: "bold",
                          cursor: "pointer",
                          borderRadius: "50%",
                          fontSize: "10px",
                          paddingRight: "3px",
                        }}
                        onClick={() => this.plus(index)}
                      >
                        {" "}
                        <i className="fas fa-plus"></i>{" "}
                      </span>
                    </td>

                    <td
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        borderColor: "#cecece",
                      }}
                    >
                      <div className="flex d-flex justify-content-between">
                        ${element.price * element.quantity}
                        <button
                          className="dltbtn4"
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
        ) : (
          <div
            style={{
              height: "50px",
              width: "350px",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            Sorry, nothing in your cart yet.{" "}
          </div>
        )}
        <div className="flex d-flex justify-content-between pt-3">
          <div className="ms-2">
            <span style={{ fontWeight: "600", fontSize: "14px" }}>
              ${this.calculateTotal()} Incl. taxes{" "}
            </span>
            <span style={{ fontSize: "12px" }}>
              {" "}
              <br /> delivery not included
            </span>
          </div>
          <div>
            {this.props.reduxCart.length ? (
              <Link className="nav-link" to="/cart">
                <button
                  onClick={this.props.cartNotHoverFunction}
                  className="btn btn-sm btn-secondary"
                >
                  Go to cart
                </button>
              </Link>
            ) : (
              <Link className="nav-link" to="/catalog">
                <button
                  onClick={this.props.cartNotHoverFunction}
                  className="btn btn-sm btn-light"
                  style={{
                    fontWeight: "480",
                    backgroundColor: "#8fa663",
                    color: "white",
                  }}
                >
                  Go shopping
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reduxCart: state.cart.reduxCart,
});

export default connect(mapStateToProps, { changeItems })(MiniCart);
