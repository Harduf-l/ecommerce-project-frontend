import { Link } from "react-router-dom";

import React from "react";
import Carousel2 from "./Carousel2";
import axios from "axios";

class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookiesArray: false,
      breadsArray: false,
      superfoodArray: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    axios
      .get("http://localhost:5000/products/categories/breads")
      .then((json) => this.setState({ breadsArray: json.data }));

    axios
      .get("http://localhost:5000/products/categories/cookies")
      .then((json) => this.setState({ cookiesArray: json.data }));

    axios
      .get("http://localhost:5000/products/categories/superfood")
      .then((json) => this.setState({ superfoodArray: json.data}, ));
  }

  render() {
    return (
      <div>
        {this.state.superfoodArray &&
        <div
          style={{
            backgroundImage: `url(${this.state.superfoodArray[1].originalPic})`,
            backgroundSize: "cover",
            height: "550px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div style={{ height: "450px" }}>
            <p className="shopHomeBackground">
              Welcome to a world of health and joy
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/catalog" className="shopSquareBackground">
              Shop now
            </Link>
          </div>
        </div> }

        <div
          style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "64px" }}
        >
          <span className="homeHeaderSpan">
            <h2
              className="homeHeader"
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              Get to know our new breads collection
            </h2>
          </span>
          <div>
            {this.state.breadsArray && (
              <Carousel2 myArray={this.state.breadsArray}></Carousel2>
            )}
          </div>

          <Link
            to={{ pathname: `/catalog/`, search: `breads` }}
            className="homeLinks"
          >
            <button>Watch more</button>
          </Link>

          <span className="homeHeaderSpan">
            <h2
              className="homeHeader"
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              Superfood for a perfect health
            </h2>
          </span>
          {this.state.superfoodArray && (
            <Carousel2 myArray={this.state.superfoodArray}></Carousel2>
          )}

          <Link
            to={{ pathname: `/catalog/`, search: `superfood` }}
            className="homeLinks"
          >
            <button>Watch more</button>
          </Link>

          <span className="homeHeaderSpan">
            <h2
              className="homeHeader"
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              Cookies On Sale
            </h2>
          </span>
          {this.state.cookiesArray && (
            <Carousel2 myArray={this.state.cookiesArray}></Carousel2>
          )}

          <Link
            to={{ pathname: `/catalog/`, search: `cookies` }}
            className="homeLinks"
          >
            <button>Watch more</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home2;
