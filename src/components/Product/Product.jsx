import axios from "axios";
import ProductArrived from './ProductArrived'
import React from "react";
import ProductSkeleton from './ProductSkeleton'

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myProduct: false, 
    };
  }
   
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("hello!")
    axios
      .get(`http://localhost:3000/products/${this.props.match.params.id}`)
      .then((json) =>
        this.setState({ myProduct: json.data }, () => {
          console.log(this.state.myProduct.rating);
        })
      );
  }

  render() {

    return (
      <div>
        {!this.state.myProduct && <ProductSkeleton/>}
        {this.state.myProduct && <ProductArrived myProduct={this.state.myProduct}/>} 
      </div>

    )
  }
}

export default Product;
