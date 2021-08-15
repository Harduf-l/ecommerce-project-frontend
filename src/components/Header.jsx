

let Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
        <img src="https://www.pngplay.com/wp-content/uploads/2/Green-Leaves-PNG-Photos.png" width="50" height="50" className="d-inline-block align-top" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">עמוד הבית <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#"> התחבר/הירשם<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#"><i class="fas fa-shopping-cart"></i><span className="sr-only">(current)</span></a>
            </li>

            <li>
           <input className="form-control mr-sm-2" type="search" placeholder="אני רוצה לקנות..." aria-label="Search"/>
           </li>
           <li>
           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">חפש</button>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">עוגיות וגרנולה</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">לחמים</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ממרחי הבית</a>
            </li>
          </ul>

        </div>
      </nav>
    )
}

export default Header 