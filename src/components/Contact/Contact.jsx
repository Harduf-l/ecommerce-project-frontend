let Contact = () => {
    return(
        <div>
        <div>
           <span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "60px"}}>Contact us</h2></span>
        </div>
        <form className="col-5" style={{margin: "0 auto"}}>
                  <input className="regularInput" id="firstname" placeholder="Name" value={(localStorage.getItem("namelogged")) && localStorage.getItem("namelogged")} type="text"/>
     
                

                    <input className="regularInput"  placeholder="Email" type="email"/> 
                    
                    <textarea style={{marginTop: "40px"}} placeholder="How can we help you?" cols="69" rows="4"/>
                              
                    <button style={{marginTop: "30px"}} className="btn btn-lg btn-secondary">Submit</button>
        </form>

        </div>
    )
}

export default Contact