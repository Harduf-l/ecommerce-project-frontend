

let Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#fffee2"}}>
        <a className="navbar-brand" href="/">
        <img style={{marginLeft: "10px"}} src="https://www.pngplay.com/wp-content/uploads/5/Health-Wellness-Leaves-PNG.png" width="55px" className="d-inline-block align-top" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0" > 
                <li className="nav-item active">
                <a className="nav-link aria-current active " href="/">עמוד הבית <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="/"> התחבר/הירשם<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="/"><i className="fas fa-shopping-cart"></i><span className="sr-only">(current)</span></a>
                </li>
           </ul>

           <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
               
           <li className="nav-item">
              <a className="nav-link" href="/">מזונות על</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">ממרחי הבית</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">עוגיות</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">גרנולה</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">לחמים</a>
            </li>

            <li>
                <button className="btn btn-outline-success my-2 my-sm-0 ms-2" type="submit">חפש</button>
                    </li>

                    <li className="me-2">
                <input style={{width: "100%", direction: "rtl"}} className="form-control mr-sm-2 " type="search" placeholder="אני רוצה לקנות..." aria-label="Search"/>
                      </li>

          </ul>

        </div>
      </nav>
    )
}

export default Header 