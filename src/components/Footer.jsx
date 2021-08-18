let Footer = () => {

    let footerStyle = {

    }

    return (
        <footer className="text-center text-lg-start text-muted" style={footerStyle}>    

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

