import {Link} from 'react-router-dom'

let Header = () => {
    return (

      <nav className="navbar navbar-expand-lg navbar-light" style={{borderBottom: "#eaedf2 2px solid", fontSize: "16px"}}>
      <div className="container-fluid">
      <Link className="navbar-brand ms-2" to="/">
      <span><i style={{fontSize: "50px", color: "#e64723"}}className="fas fa-spa"></i></span>
      </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item text-center">
              <Link className="nav-link"  aria-current="page" to="/">
              Home page
              </Link>
              </li>
              <li className="nav-item text-center">
              <Link className="nav-link"  aria-current="page" to="/about">
              about
              </Link>
              </li>
              <li className="nav-item text-center" >
              <Link className="nav-link"  aria-current="page" to="/login">
              login/register
              </Link>
              </li>
              <li className="nav-item text-center" >
              <Link className="nav-link"  aria-current="page" to="/blog">
              blog
              </Link>
              </li>

              <li className="nav-item text-center" >
              <Link style={{color: "red"}} className="nav-link"  aria-current="page" to="/membersZone">
              members zone
              </Link>
              </li>

              <li className="nav-item text-center">
              <Link className="nav-link" to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                  </Link>
              </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
              <Link className="nav-link" to="/cookies">
              cookies
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/spreads">
                  spreads
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/breads">
              breads
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/superfoods">
              superfoods
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/catalog">
              catalog
              </Link>
              </li>
          </ul>
          <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="i would like to buy..." aria-label="Search"/>
              <Link to="/search"><button className="btn btn-outline-success me-2" type="submit">search</button></Link>
              </form>
          </div>
      </div>
      </nav>

    )

}

export default Header




