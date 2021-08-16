let Cookies = ({foodContent, myid, plus, minus}) => {
    let {header, description, moreDescription, info, loveIt, price, pic1, pic2, pic3, quantity} = foodContent
    console.log(header, )
    return(
        <div id="bigfoodDiv" className="d-flex justify-content-around flex-wrap mobile-top-no-space">
         
    <div className="me-5 mt-5 p-5" style={{backgroundColor: "#f2f5f3", height: "400px"}}>
        <h4 style={{marginBottom: "20px"}}>{header}</h4>
        <div>{description}</div>
        <div>{moreDescription}</div>
        <p style={{color: "#6f0000" , marginTop: "22px"}}>{loveIt}<span><i className="fas fa-heart"></i></span></p>
        <div>מחיר: {price} ש"ח</div>
        <br/>
        <span style={{marginLeft: "10px"}}>כמות:</span> 
        <span style={{color: "white", backgroundColor: "#2e4e14", cursor: "pointer", borderRadius: "50%", fontSize: "10px"}} onClick={() => plus(myid)}> <i class="fas fa-plus"></i> </span> 
        <span className="ps-2 pe-2">{quantity}</span>
        <span style={{color: "white", backgroundColor: "#2e4e14", cursor: "pointer", borderRadius: "50%", fontSize: "10px", paddingLeft: "2px"}} onClick={() => minus(myid)}> <i class="fas fa-minus"></i> </span> 

        <div className="d-flex justify-content-start mt-5">
        <button className="btn btn-secondary btn-sm mb-1 mt-2 ms-2">הוספה לסל</button>
        <button className="btn btn-danger btn-sm mb-1 mt-2">הוספה למועדפים</button>
        </div>
    </div>

    <div id="carouselExampleIndicators" class="carousel slide mobile-space" data-bs-ride="carousel" style={{width: "400px"}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div style={{ backgroundColor: "#f2f5f3", border: "3px #f2f5f3 solid", width: "250px", padding: "0px 10px", height: "400px"}} className="dont-display mt-5 ms-5">
<h5 className="mt-3" style={{textAlign: "center"}}>חשוב לדעת</h5>
<p className="mt-3 me-2" style={{textAlign: "center", fontSize: "15.5px"}}>{info}</p>
</div>

</div>
    )
}

export default Cookies;