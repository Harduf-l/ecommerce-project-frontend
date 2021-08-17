let Header = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light smaller-text-header" style={{borderBottom: "#eaedf2 2px solid"}}>
  <div class="container-fluid">
  <a className="navbar-brand" href="/">
        <span><i style={{fontSize: "50px", color: "#2e4e14"}}class="fas fa-spa"></i></span>
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
          <a class="nav-link" aria-current="page" href="/">about</a>
        </li>
        <li class="nav-item text-center" >
          <a class="nav-link" href="/">login/register</a>
        </li>
        <li class="nav-item text-center">
          <a class="nav-link" href="/"><i className="fas fa-shopping-cart"></i></a>
        </li>
      </ul>

      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        <li class="nav-item">
          <a class="nav-link" href="/">cookies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">spreads</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">breads</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">superfoods</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">vitamins</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="i would like to buy..." aria-label="Search"/>
        <button class="btn btn-outline-success me-2" type="submit">search</button>
      </form>
    </div>
  </div>
</nav>
    )

}

export default Header