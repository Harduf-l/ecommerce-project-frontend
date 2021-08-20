let Header = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light" style={{borderBottom: "#eaedf2 2px solid", fontSize: "16px"}}>
  <div class="container-fluid">
  <a className="navbar-brand ms-2" href="/">
        <span><i style={{fontSize: "50px", color: "#e64723"}}class="fas fa-spa"></i></span>
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item text-center">
          <a class="nav-link active" aria-current="page" href="/">Home page</a>
        </li>
        <li class="nav-item text-center">
          <a class="nav-link" aria-current="page" href="/about">about</a>
        </li>
        <li class="nav-item text-center" >
          <a class="nav-link" href="/login">login/register</a>
        </li>
        <li class="nav-item text-center">
          <a class="nav-link" href="/cart"><i className="fas fa-shopping-cart"></i></a>
        </li>
      </ul>

      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        <li class="nav-item">
          <a class="nav-link" href="/cookies">cookies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/spreads">spreads</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/breads">breads</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/superfoods">superfoods</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/catalog">catalog</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="i would like to buy..." aria-label="Search"/>
        <a href="/search"><button class="btn btn-outline-success me-2" type="submit">search</button></a>
        </form>
    </div>
  </div>
</nav>
    )

}

export default Header