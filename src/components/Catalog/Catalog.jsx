import SearchDisplay from './SearchDisplay'
import SkeletonDisplay from './SkeletonDisplay'
import CatalogForm from './CatalogForm'
import React from 'react'

import allproducts from '../Data/allproducts'

class Catalog extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)

      let allMyProducts = [...allproducts]
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

      
      this.state = {
          q: "",
          allProducts:  allMyProducts,
          filteredProducts: allMyProducts,
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
            this.setState({filteredProducts: currentArray })
        } else if (word === "?cookies") {
            let currentArray = this.state.allProducts
            currentArray = currentArray.filter(product => product.category === "cookies")
            document.getElementById("cookies").checked = true;  
            this.setState({filteredProducts: currentArray })
        } else if (word === "?superfood") {
            let currentArray = this.state.allProducts
            currentArray = currentArray.filter(product => product.category === "superfood")
            document.getElementById("superfood").checked = true;  
            this.setState({filteredProducts: currentArray })
        } else {
            const urlSearchParams = new URLSearchParams(word);
            const params = Object.fromEntries(urlSearchParams.entries());
            if (params) {
                search=params.q.slice(1, -1).toLowerCase()
                console.log(search)
                const newFilteredData = myArr.filter(product => 
                            product.header.toLowerCase().includes(search)
                );
                this.setState({filteredProducts: newFilteredData})
            } 
        }
    }


    componentDidMount() {
        this.setState({loading: true})

        window.scrollTo(0, 0)
        if (this.props.location.search) {
            this.searchMethod(this.props.location.search)
        }   else {
            document.getElementById("all").checked = true;  
        }
        
        setTimeout(()=>{  this.setState({loading: false}  
        )       
      }, 2000);

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
        this.setState({filteredProducts: filteredArray })
    }

    filterbyPrice = (e) => {
    let currentArray = this.state.allProducts

    if (this.state.categoryOn) {
        currentArray = this.backFilteredByCategory()
    }

    if (e.target.id === "pricelower") {
            currentArray = currentArray.sort((a, b) => (a.price > b.price) ? 1 : -1)
            this.setState({filteredProducts: currentArray })
     
    }
    else if (e.target.id === "pricehigher") {
            currentArray = currentArray.sort((a, b) => (b.price > a.price) ? 1 : -1)
            this.setState({filteredProducts: currentArray })
          
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

        this.setState({filteredProducts: currentArray })

    }

    filterbySpecialPeople = (e) => {

        let currentArray = this.state.allProducts

        if (this.state.categoryOn) {
            currentArray = this.backFilteredByCategory()
        }
       
        if (e.target.value === "vegan") {
            if (e.target.checked) {
                currentArray = currentArray.filter(product => product.vegan === true)
                this.setState({filteredProducts: currentArray })
                this.setState({vaganOn: true})
            } else {
                this.setState({vaganOn: false})
            }
        } else if (e.target.value === "lowcarb") {
            if (e.target.checked) {
            currentArray = currentArray.filter(product => product.lowcarb === true)
            this.setState({filteredProducts: currentArray }) 
            this.setState({lowcarbOn: true})
            }else {
                this.setState({lowcarbOn: false})
            }
        } 

        this.setState({filteredProducts: currentArray }) 

    }


    filterbyCategory = (e) => {
        let currentArray = this.state.allProducts
        if (e.target.id !== "all") {
        currentArray = currentArray.filter(product => product.category === e.target.id)
        this.setState({filteredProducts: currentArray })
        }

        if (e.target.id === "all") {
        this.setState({filteredProducts: currentArray })
        }
    }

 
  
    render() {
  
      return (
        
        <div className="row">

        {  }
        <div className="col-lg-3 col-12">
        <CatalogForm filterbyCategory={this.filterbyCategory} filterbySpecialPeople={this.filterbySpecialPeople} filterbyPrice={this.filterbyPrice} filterbyPriceRange={this.filterbyPriceRange} saveWord={this.saveWordFilter}/>
        </div>

        <div className="col-lg-9 col-12  d-flex flex-wrap mt-3 justify-content-center">

        {this.state.loading && this.state.filteredProducts.map((cookie, index)=>{
        return <SkeletonDisplay key={index} myid={index} />
        })
        }

        {!this.state.loading && this.state.filteredProducts.map((cookie, index)=>{
        return <SearchDisplay key={index} myid={index} foodContent={cookie} />
        })}


        </div>
        </div>
        
            )
            }
        
        }
  
  export default Catalog
  
