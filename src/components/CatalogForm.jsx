
let CatalogForm = (props) => {
    
    return(
        <div style={{width: "410px", margin: "0 auto", border: "2px #f2f5f3 solid", padding: "10px", marginTop: "20px"}}>
        <h3 style={{color: "#e64723"}}>search by...</h3>
        <input type="radio" id="pricelower" name="price" value="pricelower" onChange={(e) => props.filterbyPrice(e)}/>
        <label for="pricelower"> price (lower to higher)</label>
        <div style={{marginLeft: "20px", display: 'inline'}}>
        <input type="radio" id="pricehigher" name="price" value="pricehigher" onChange={(e) => props.filterbyPrice(e)}/>
        <label for="pricehigher"> price (higher to lower)</label>
        </div>
        <div style={{marginTop: "10px"}}>
        <input class="me-2" type="search" placeholder="search by word..." onChange={(e) => props.saveWord(e)}aria-label="Search"/>
        </div>
        <div style={{marginTop: "10px"}}>
         <input defaultChecked style={{backgroundColor: "black"}} className="me-1" onChange={(e) => props.filterbyCategory(e)} type="radio" name="category" id="all"/>
          <label className="me-2" for="all"  >all</label>
          <input className="me-1" onChange={(e) => props.filterbyCategory(e)} type="radio" name="category" id="cookies"/>
          <label className="me-2" for="cookies">cookies</label>
          <input  className="me-1" onChange={(e) => props.filterbyCategory(e)} type="radio" name="category" id="superfood"/>
          <label className="me-2" for="superfood">superfoods</label>
          <input  className="me-1" onChange={(e) => props.filterbyCategory(e)} type="radio" name="category" id="spreads"/>
          <label className="me-2" for="spreads">spreads</label>
          <input  className="me-1" onChange={(e) => props.filterbyCategory(e)} type="radio" name="category" id="breads"/>
          <label className="me-2" for="breads">breads</label>
        </div>

        

        <div style={{marginTop: "10px"}}>
            <span style={{backgroundColor: "#e4f3b2", padding: "5px"}}>filter by price range:</span>
            <div style={{marginLeft: "10px", display: "inline"}}> 
            lowest <input maxlength="3" id="lowest" onChange={(e) => props.filterbyPriceRange(e)} type="text" style={{width: "40px", height: "25px"}}/>
            highest <input id="highest" maxlength="3" onChange={(e) => props.filterbyPriceRange(e)} type="text" style={{width: "40px", height: "25px"}}/></div>
        </div>

        <div style={{marginTop: "10px"}}>
        <input type="checkbox" id="vegan" name="vegan" value="vegan" onChange={(e) => props.filterbySpecialPeople(e)}/>
                <label for="vegan">vegan</label>

                <div style={{display: "inline", marginLeft: "10px"}}>
                <input type="checkbox" id="lowcarb" name="lowcarb" value="lowcarb" onChange={(e) => props.filterbySpecialPeople(e)}/>
                <label for="lowcarb">paleo (low-carb)</label>
                </div>
        </div>

        </div>
        )
        
        
    }
    
 export default CatalogForm; 