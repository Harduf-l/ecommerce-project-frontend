let CatalogForm = (props) => {
    
    return(
        <div style={{width: "200px", margin: "0 auto", border: "2px black solid", padding: "10px", marginTop: "20px"}}>
        <h3>search by...</h3>
      <input type="checkbox" id="price" name="price" value="price" onChange={(e) => props.filterbyPrice(e)}/>
        <label for="price"> price</label>
        </div>
        )
    }
    
 export default CatalogForm; 