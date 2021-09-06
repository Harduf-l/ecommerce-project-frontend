import  {Link } from "react-router-dom";

let Footer = () => {

    let footerStyle = {
        backgroundColor: "#eaedf2",
        marginTop: "50px"
    }

    return (
        <footer className="text-center text-lg-start text-muted" style={footerStyle}>    

    <div className="container pt-2">
        <div className="row">

            <div className="col-12 col-lg-4 mb-2 mt-3">
           <h6>Why us? </h6>
           <p>Only natural ingredients. gurenteed.</p>
            </div>

            <div className="col-12 col-lg-4 mb-2 2 mt-3">
            <h6>Stores locations</h6>
           <div>Ibn Gabirol 22, Tel Aviv</div>
           <div style={{marginTop: "5px"}}>Izhak shamir 7, Naharia</div>
           <br/>
           <h6>Openning hours </h6>
           <p>09:00 - 20:00</p>
            </div>

            <div className="col-12 col-lg-4 2 mt-3">
            <h6>Call us 24/7</h6>
           <p>Any problem? no problem! call us at 072-332-192</p>
           <Link to="/contact" className="hoverlinkcontact">Contact Us</Link>
            </div>

        </div>
    </div>

               <div style={{textAlign: "center", paddingTop: "40px"}}>
            <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" className="ms-4 text-reset">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" rel="noreferrer" target="_blank" className="ms-4 text-reset">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.google.co.il/" rel="noreferrer" target="_blank" className="ms-4 text-reset">
                <i className="fab fa-google"></i>
            </a>
            <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" className="ms-4 text-reset">
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

