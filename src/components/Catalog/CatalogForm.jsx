
let CatalogForm = (props) => {
    
    return(
        <div style={{ border: "2px #f2f5f3 solid", paddingLeft: "15px", paddingTop: "4px", paddingRight: "15px", marginTop: "20px"}}>

        <div>
        <h3 style={{color: "#2b3239", paddingLeft: "5px", paddingTop:"5px", paddingBottom: "10px"}}>search by...</h3>

        </div>

        <div className="flex d-flex flex-wrap flex-column">

            <div className="col-12 mb-4 ps-2 pt-1 pb-2" style={{ backgroundColor: "#f0f0f0"}}>
                <h6>prices</h6>
                <input type="radio" id="pricelower" name="price" value="pricelower" onChange={(e) => props.filterbyPrice(e)}/>
                <label for="pricelower"> lower to higher</label>
                <br/>
                <div style={{ display: 'inline'}}>
                <input type="radio" id="pricehigher" name="price" value="pricehigher" onChange={(e) => props.filterbyPrice(e)}/>
                <label for="pricehigher"> higher to lower</label>
                </div>
                <div style={{marginTop: "10px"}}>
                    <span>filter by price range:</span>
                    <br/>
                    <div className="mt-2"> 
                    lowest <input maxLength="3" id="lowest" onChange={(e) => props.filterbyPriceRange(e)} type="text" style={{width: "40px", height: "25px"}}/>
                    highest <input id="highest" maxLength="3" onChange={(e) => props.filterbyPriceRange(e)} type="text" style={{width: "40px", height: "25px"}}/></div>
                </div>
            
            </div>

            <div className="col-12 ps-2  pt-1 mb-4" style={{backgroundColor: "#f0f0f0",}}>
                <h6>categories</h6>
                <div style={{marginTop: "10px"}}>
                <input style={{backgroundColor: "black"}} onChange={(e) => props.filterbyCategory(e)} type="radio" name="category" id="all"/>
                <label for="all"  >all</label>
                <br/>
                <input onChange={(e) => props.filterbyCategory(e)} type="radio" name="category" id="cookies"/>
                <label for="cookies">cookies</label>
                <br/>
                <input  onChange={(e) => props.filterbyCategory(e)} type="radio" name="category" id="superfood"/>
                <label for="superfood">superfoods</label>
                <br/>
                <input onChange={(e) => props.filterbyCategory(e)} type="radio" name="category" id="spreads"/>
                <label for="spreads">spreads</label>
                <br/>
                <input onChange={(e) => props.filterbyCategory(e)} type="radio" name="category" id="breads"/>
                <label for="breads">breads</label>
                </div>

            </div>

            
            <div className="col-12 ps-2 pt-1 mb-4 pb-2" style={{backgroundColor: "#f0f0f0",}}>
                 <h6>special needs</h6>
                <div style={{marginTop: "10px"}}>
                <input type="checkbox" id="vegan" name="vegan" value="vegan" onChange={(e) => props.filterbySpecialPeople(e)}/>
                        <label for="vegan">vegan</label>
                        <br/>
                        <div style={{display: "inline"}}>
                        <input type="checkbox" id="lowcarb" name="lowcarb" value="lowcarb" onChange={(e) => props.filterbySpecialPeople(e)}/>
                        <label for="lowcarb">paleo (low-carb)</label>
                        </div>
                        <div>
                        <input style={{width: "140px"}} className="mt-4" type="search" placeholder="search by word..." onChange={(e) => props.saveWord(e)}aria-label="Search"/>
                        </div>
                </div>
            </div>

            </div>

        </div>
        )
        
        
    }
    
 export default CatalogForm; 