let Product = ({foodContent, myid, plus, minus}) => {
    let {header, description, moreDescription, info, loveIt, price,previousPrice, pic1, pic2, pic3, quantity} = foodContent
    let pictureCarouselStyle = {objectFit: "cover", height: "70vh"}

return(

<div id="bigfoodDiv" className="flex d-flex row" style={{display: ""}}>
  <div className="pt-5">
         
          <div className="" style={{backgroundColor: "#f2f5f3"}}>
            <div className="mt-4 ms-4">
              <h4 style={{marginBottom: "20px", fontSize: "22px"}}>{header}</h4>
              <div style={{fontSize: "18px"}}>
                <div>{description}</div>
                <div>{moreDescription}</div>
                <p style={{color: "#6f0000" , marginTop: "22px"}}>{loveIt}<span><i className="fas fa-heart"></i></span></p>
                <div  style={{textDecoration: "line-through"}}>original price: <span>{previousPrice}$</span></div>
                <div style={{fontWeight: "bold", color: "#e64723"}}>sale price: {price}$</div>
                <br/>
                <span className="me-1">quantity:</span> 
              
                <span className="ms-2" style={{fontSize: "1.2vw", color: "white", backgroundColor: "#2e4e14", cursor: "pointer", borderRadius: "50%", fontSize: "10px", }} onClick={() => minus(myid)}> <i class="fas fa-minus"></i> </span> 
                <span className="ps-2 pe-2">{quantity}</span>
                <span  style={{fontSize: "1.2vw", color: "white", backgroundColor: "#2e4e14", cursor: "pointer", borderRadius: "50%", fontSize: "10px", paddingRight: "3px"}} onClick={() => plus(myid)}> <i class="fas fa-plus"></i> </span> 

                <div className="d-flex justify-content-start mt-4">
                <button className="btn btn-secondary  mb-1 mt-2 me-2" style={{fontSize: "1.4vw"}}>Add to cart</button>
                <button className="btn btn-danger mb-1 mt-2" style={{fontSize: "1.4vw"}}>Add to favorites</button>
                </div>
              </div>
            </div>
          </div>

           <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img style={pictureCarouselStyle} src={pic1} className=" d-inline w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img style={pictureCarouselStyle} src={pic2} className=" d-inline w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img style={pictureCarouselStyle} src={pic3} className="  d-inline w-100" alt="..."/>
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

            <div style={{ backgroundColor: "#f2f5f3", border: "3px #f2f5f3 solid"}} className="">
                <h5 className="mt-3" style={{textAlign: "center", fontSize: "22px"}}>important to know</h5>
                <p className="mt-3"  style={{textAlign: "center", fontSize: "18px",}}>{info}</p>
            </div>

  </div>
</div>
    )
}

export default Product;