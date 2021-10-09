import axios from "axios";
import ProductArrived from './ProductArrived'
import React from "react";
import ProductSkeleton from './ProductSkeleton'

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myProduct: false, 
      myProductComments: false,
    };
  }
   
  componentDidMount() {
    window.scrollTo(0, 0);

    axios
      .get(`http://localhost:5000/products/${this.props.match.params.id}`)
      .then((json) =>
        this.setState({ myProduct: json.data }, () => {

        })
      );
    
      axios
      .get(`http://localhost:5000/reviews/category/${this.props.match.params.id}`)
      .then((json) =>
        this.setState({ myProductComments: json.data })
      );


  }

  render() {

    return (
      <div>
        {(!this.state.myProduct || !this.state.myProductComments) && <ProductSkeleton/>}
        {this.state.myProduct && this.state.myProductComments && <ProductArrived myProduct={this.state.myProduct} myComments={this.state.myProductComments}/>} 
      </div>

    )
  }
}

export default Product;
