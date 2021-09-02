import Map from './Map'

let Contact = () => {

      
    return(
        <div>
        <div>
           <span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "60px"}}>Contact us</h2></span>
        </div>
        <form className="col-lg-4 col-11 col-md-8" style={{margin: "0 auto"}}>
                  <input className="regularInput2" id="firstname" placeholder="Name" value={(localStorage.getItem("namelogged")) && localStorage.getItem("namelogged")} type="text"/>
     
                

                    <input className="regularInput2 mt-3"  placeholder="Email" type="email"/> 
                    
                    <textarea style={{marginTop: "30px", width: "100%", padding: "6px"}} placeholder="How can we help you?"  rows="5"/>
                              
                    <div style={{textAlign: "center"}}>
                    <button style={{marginTop: "30px"}} className="btn btn-lg btn-secondary">Submit</button>
                    </div>
        </form>

        <div style={{marginTop: "40px"}}>
          <Map/>
        </div>
        </div>
    )
}

export default Contact