import SearchDisplay from './SearchDisplay'
import SkeletonDisplay from './SkeletonDisplay'
import CatalogForm from './CatalogForm'
import React from 'react'
import axios from "axios";
import allproducts from '../Data/allproducts'

class Catalog extends React.Component {

    constructor(props) {
        super(props)


      this.state = {
          q: "",
          allProducts:  false,
          filteredProducts: false,
          currentPage: 1,
          filteredProductsPage: false,
          categoryOn: "",
          price: false, 
          pricelowest: false,
          pricehighest: false, 
          vaganOn: false,
          lowcarbOn: false,
          loading: false, 
      }

    }



    searchMethod=(word)=>{


        let myArr=this.state.allProducts
        let search=""
        if (!word) {
            word = this.props.location.search
            document.getElementById("all").checked = true;  
        } else if(word === "?breads") {
            let currentArray = this.state.allProducts
            currentArray = currentArray.filter(product => product.category === "breads")
            document.getElementById("breads").checked = true;  
            this.setState({filteredProducts: currentArray}, () => this.fixFilteredPage())
        } else if (word === "?cookies") {
            let currentArray = this.state.allProducts
            currentArray = currentArray.filter(product => product.category === "cookies")
            document.getElementById("cookies").checked = true;  
            this.setState({filteredProducts: currentArray}, () => this.fixFilteredPage())
          
        } else if (word === "?superfood") {
            let currentArray = this.state.allProducts
            currentArray = currentArray.filter(product => product.category === "superfood")
            document.getElementById("superfood").checked = true;  
            this.setState({filteredProducts: currentArray}, () => this.fixFilteredPage())
        } else {
            const urlSearchParams = new URLSearchParams(word);
            const params = Object.fromEntries(urlSearchParams.entries());
            if (params) {
                search=params.q.slice(1, -1).toLowerCase()
                const newFilteredData = myArr.filter(product => 
                            product.header.toLowerCase().includes(search)
                );
                this.setState({filteredProducts: newFilteredData}, () => this.fixFilteredPage())
            } 
        }
    }


    componentDidMount() {
        window.scrollTo(0, 0)
        
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
        .then((json) => {
        let allMyProducts = [...json.data]

        allMyProducts =allMyProducts.sort((a, b) => {
            let fa = a.header.toLowerCase(),
                fb = b.header.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });

         this.setState({ allProducts: allMyProducts,
        filteredProducts: allMyProducts,
        filteredProductsPage: allMyProducts
        })

    }).then(()=> {
        this.fixFilteredPage()
    }).then(()=> {
        
        if (this.props.location.search) {
            this.searchMethod(this.props.location.search)
        }   else {
            document.getElementById("all").checked = true;  
        }
    })

    

    }


    componentWillReceiveProps(nextProps) {
        this.searchMethod(nextProps.location.search)
    }

    backFilteredByCategory() {
        
        switch(this.state.categoryOn) {
            case "cookies":
                return allproducts.filter(product => product.category === "cookies")
            case "spreads":
                return allproducts.filter(product => product.category === "spreads")
            case "superfood":
                return allproducts.filter(product => product.category === "superfood")
            case "breads":
                return allproducts.filter(product => product.category === "breads")
            case "all":
                    return allproducts
            case false:
                return allproducts
            default:
                break; 
            }
    }

    saveWordFilter = (e) => {
        let newWord = e.target.value
        let currentArray = this.state.allProducts

        if (this.state.categoryOn) {
            currentArray = this.backFilteredByCategory()
        }
       
        let filteredArray = currentArray.filter(cookie => cookie.header.toLowerCase().includes(newWord))
        this.setState({filteredProducts: filteredArray }, ()=> this.fixFilteredPage())

    }

    filterbyPrice = (e) => {
    let currentArray = this.state.allProducts

    if (this.state.categoryOn) {
        currentArray = this.backFilteredByCategory()
    }

    if (e.target.id === "pricelower") {
            currentArray = currentArray.sort((a, b) => (a.price > b.price) ? 1 : -1)
            this.setState({filteredProducts: currentArray }, ()=> this.fixFilteredPage())

     
    }
    else if (e.target.id === "pricehigher") {
            currentArray = currentArray.sort((a, b) => (b.price > a.price) ? 1 : -1)
            this.setState({filteredProducts: currentArray }, ()=> this.fixFilteredPage())
          
    }

    }

    
    
    functionfilterByPriceRange(currentArray, check) {
    
        if (check === "highest") {
            currentArray = currentArray.filter(product =>  product.price <= this.state.pricehighest)
        }
        else if (check === "lowest") {
            currentArray = currentArray.filter(product => product.price >= this.state.pricelowest)
        }
        return currentArray
        }

        
        
    filterbyPriceRange = (e) => {
         let currentArray = [...this.state.allProducts]
         let numberEntered = +e.target.value 

        if (this.state.categoryOn) {
            currentArray = this.backFilteredByCategory()
        }

        if(e.target.id === "lowest" && this.state.pricehighest) {
            currentArray = this.functionfilterByPriceRange(currentArray, "highest")
        } else if (e.target.id === "highest" && this.state.pricehighest) {
            currentArray = this.functionfilterByPriceRange(currentArray, "lowest")
        }

        if (e.target.id === "lowest") {
            currentArray =  currentArray.filter(product => product.price >= numberEntered)
            this.setState({pricelowest: numberEntered})
         
        } else if (e.target.id === "highest") {
            currentArray = currentArray.filter(product =>  product.price <= numberEntered)
            this.setState({pricehighest: numberEntered})
        }

        this.setState({filteredProducts: currentArray }, ()=> this.fixFilteredPage())

    }

    filterbySpecialPeople = (e) => {

        let currentArray = this.state.allProducts

        if (this.state.categoryOn) {
            currentArray = this.backFilteredByCategory()
        }
       
        if (e.target.value === "vegan") {
            if (e.target.checked) {
                currentArray = currentArray.filter(product => product.vegan === true)
                this.setState({filteredProducts: currentArray }, ()=> this.fixFilteredPage())
                this.setState({vaganOn: true})
            } else {
                this.setState({vaganOn: false})
            }
        } else if (e.target.value === "lowcarb") {
            if (e.target.checked) {
            currentArray = currentArray.filter(product => product.lowcarb === true)
            this.setState({filteredProducts: currentArray }, ()=> this.fixFilteredPage())
            this.setState({lowcarbOn: true})
            }else {
                this.setState({lowcarbOn: false})
            }
        } 

        this.setState({filteredProducts: currentArray }, ()=> this.fixFilteredPage())

    }


    filterbyCategory = (e) => {
        let currentArray = this.state.allProducts

        if (this.state.vaganOn) {
            currentArray = currentArray.filter(product => product.vegan === true)
        }

        if (this.state.lowcarbOn) {
            currentArray = currentArray.filter(product => product.lowcarb === true)
        }

        if (e.target.id !== "all") {
        currentArray = currentArray.filter(product => product.category === e.target.id)
        this.setState({categoryOn: e.target.id})
        this.setState({filteredProducts: currentArray }, ()=> this.fixFilteredPage())
        }

        if (e.target.id === "all") {
        this.setState({categoryOn: ""})
        this.setState({filteredProducts: currentArray }, ()=> this.fixFilteredPage())
        }
    }

    onSpecPage = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0)

        let currentArray = [...this.state.filteredProducts];
        let val = Number(e.target.innerHTML);



        let newMin = (val-1) * 9 
        let newMax = newMin + 9
        if ( newMax > currentArray.length) {
            newMax = currentArray.length
        }


        currentArray = currentArray.slice(newMin, newMax)
        this.setState({currentPage: val})

        this.setState({filteredProductsPage: currentArray})
      };


      fixFilteredPage = () => {
        let currentArray = Object.assign([], this.state.filteredProducts);


        if (currentArray.length >= 8) {
            currentArray = currentArray.slice(0, 9)
        }

        this.setState({filteredProductsPage: currentArray})

      }

     buttonList = () => {    
        let pagesNum = Math.ceil(this.state.filteredProducts.length / 9) 
        const row = [];

        for (let i = 1; i <= pagesNum; i++) {
          row.push(
              <div className="text-center p-1 d-inline">
              <button className="page-link d-inline" type="submit" onClick={this.onSpecPage}>
                {i} 
              </button>
              </div>
          );
        }
        return row;
    } 
    


    render() {

      return (
        
        <div className="row">

 
        <div className="col-lg-3 col-12">
        <CatalogForm filterbyCategory={this.filterbyCategory} filterbySpecialPeople={this.filterbySpecialPeople} filterbyPrice={this.filterbyPrice} filterbyPriceRange={this.filterbyPriceRange} saveWord={this.saveWordFilter}/>
        </div>

        <div className="col-lg-9 col-12  d-flex flex-wrap mt-3 justify-content-center">

        {!this.state.allProducts && [1,2,3,4,5,6,7,8,9].map((element, index)=>{
        return <SkeletonDisplay key={index} myid={index} />
        })
        }

        {this.state.allProducts && this.state.filteredProductsPage.map((cookie, index)=>{
        return (
        <SearchDisplay key={index} myid={index} foodContent={cookie} />
        )
        })}
        </div>

        <div style={{textAlign: "center", paddingTop: "80px"}}>
        {!this.state.loading && this.state.filteredProducts && this.buttonList() }
        </div>
        </div>
        
            )
            }
        
        }
  
  export default Catalog
  

