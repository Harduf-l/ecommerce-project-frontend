import React from 'react'
import Skeleton from "react-loading-skeleton";
import  {Link } from "react-router-dom";
import axios from "axios";


class Category extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            productsArray: false,
          };

    }

    componentDidMount() {


    axios.get(`http://localhost:5000/products/categories/${this.props.name}`).then((json) =>
      this.setState({ productsArray: json.data })
    );

    }

    componentWillReceiveProps(nextProps) {

        this.setState({productsArray: false})

        axios.get(`http://localhost:5000/products/categories/${nextProps.name}`).then((json) =>
        this.setState({ productsArray: json.data })
      );

    }



    render() {

    let pictureCategoryStyle = {height: "250px", width: "440px", objectFit: "cover", marginLeft: "8px"}
    let infoStyle = {color: "white", backgroundColor: "rgba(143,147,151, 0.6)", width: "250px", position: "absolute", fontSize: "30px", left:"80px", top:"110px", zIndex: "9"}
    let outerLinkstyle = { marginBottom: "10px", position: "relative"}


     return (
        <div className="d-flex flex-wrap justify-content-center" style={{textAlign: "center", paddingTop: "30px"}}>

        {this.state.productsArray && 
        this.state.productsArray.map((element) => {
            return (<Link to={`/product/${element.id}`}style={outerLinkstyle}> <p style={infoStyle}>{element.header}</p><img style={pictureCategoryStyle} alt={element.header} src={element.pic1}/></Link>)
        })}

        {!this.state.productsArray && 
        [1,2,3,4,5,6].map((element) => {
            return (<Skeleton style={pictureCategoryStyle}/>)
        })}

        </div>
        )
    }
}


export default Category; 

