let Header2 = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#fffee2"}}>
  <div class="container-fluid">
  <a className="navbar-brand" href="/">
        <img style={{marginLeft: "10px"}} src="https://www.pngplay.com/wp-content/uploads/5/Health-Wellness-Leaves-PNG.png" width="55px" className="d-inline-block align-top" alt=""/>
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item text-center">
          <a class="nav-link active" aria-current="page" href="/">דף הבית</a>
        </li>
        <li class="nav-item text-center" >
          <a class="nav-link" href="/">התחבר/הירשם</a>
        </li>
        <li class="nav-item text-center">
          <a class="nav-link" href="/"><i className="fas fa-shopping-cart"></i></a>
        </li>
      </ul>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
        <li class="nav-item">
          <a class="nav-link" href="/">עוגיות</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">ממרחים</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">לחמים</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">מזונות על</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">ויטמינים</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" style={{direction: "rtl"}} placeholder="אני רוצה לקנות..." aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">חפש</button>
      </form>
    </div>
  </div>
</nav>
    )

}

export default Header2