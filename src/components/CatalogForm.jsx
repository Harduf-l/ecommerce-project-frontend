let CatalogForm = (props) => {
    
    return(
        <div style={{width: "200px", margin: "0 auto", border: "2px #f2f5f3 solid", padding: "10px", marginTop: "20px"}}>
        <h3 style={{color: "#e64723"}}>search by...</h3>
      <input type="radio" id="pricelower" name="price" value="pricelower" onChange={(e) => props.filterbyPrice(e)}/>
        <label for="pricelower"> price (lower to higher)</label>
        <input type="radio" id="pricehigher" name="price" value="pricehigher" onChange={(e) => props.filterbyPrice(e)}/>
        <label for="pricehigher"> price (higher to lower)</label>
        </div>
        )
    }
    
 export default CatalogForm; 