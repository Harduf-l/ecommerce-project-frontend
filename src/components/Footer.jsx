let Footer = () => {

    let footerStyle = {
        backgroundColor: "#eaedf2",
        marginTop: "50px"
    }

    return (
        <footer className="text-center text-lg-start text-muted" style={footerStyle}>    

    <div className="container">
        <div className="row">

            <div className="col-12 col-lg-4 mb-2 mt-3">
           <h6>why us? </h6>
           <p>only natural ingredients. gurenteed.</p>
            </div>

            <div className="col-12 col-lg-4 mb-2 2 mt-3">
            <h6>openning hours </h6>
           <p>09:00 - 20:00</p>
           <br/>
           <h6>stores locations</h6>
           <div>Ibn Gabirol 22, Tel Aviv</div>
           <div style={{marginTop: "5px"}}>Izhak shamir 7, Naharia</div>
            </div>

            <div className="col-12 col-lg-4 2 mt-3">
            <h6>call us 24/7</h6>
           <p>any problem? no problem! call us at 072-332-192</p>
            </div>

        </div>
    </div>

               <div style={{textAlign: "center", paddingTop: "40px"}}>
            <a href="/" className="ms-4 text-reset">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="ms-4 text-reset">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="ms-4 text-reset">
                <i className="fab fa-google"></i>
            </a>
            <a href="/" className="ms-4 text-reset">
                <i className="fab fa-instagram"></i>
            </a>
               </div>

            <div className="text-center p-3">
            Taste From Heaven © 2021 all rights reserved 
             </div>

        </footer>  
    )
}

export default Footer 

