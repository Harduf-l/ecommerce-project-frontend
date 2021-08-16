let Footer = () => {
    return (
        <footer className="text-center text-lg-start text-muted" style={{borderTop: "#eaedf2 2px solid", marginTop: "40px"}}>    
            <section
            className="d-flex justify-content-center justify-content-lg-between p-4"
             >
                <div className="me-5 d-none d-lg-block">
                    <span>עקבו אחרינו ברשתות החברתיות, כדי להיות הראשונים ששומעים על המבצעים שלנו    <i class="far fa-smile"></i></span>
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
                מעדנים מן הטבע 2021 © כל הזכויות שמורות
                         </div>

        </footer>  
    )
}

export default Footer 

