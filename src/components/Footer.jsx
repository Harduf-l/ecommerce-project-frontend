let Footer = () => {

    let footerStyle = {
    borderTop: "#eaedf2 2px solid", 
    marginTop: "40px",
    position: "fixed",
    height: "120px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    marginBottom: "0px",
    backgroundColor: "#f0f0f0",
    color: "white"
    }

    return (
        <footer className="text-center text-lg-start text-muted" style={footerStyle}>    
            <section
            className="d-flex justify-content-center justify-content-lg-between p-4"
             >
                <div className="me-5 d-none d-lg-block">
                    <span>follow us to be the first who hear about our awesome discounts! <i class="far fa-smile"></i></span>
                </div>

               <div>
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

            </section>

            <div className="text-center p-3" style={{backgroundColor: "#f8f9fa"}}>
            Taste From Heaven © 2021 all rights reserved 
             </div>

        </footer>  
    )
}

export default Footer 

