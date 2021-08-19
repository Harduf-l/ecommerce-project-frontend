let SearchDisplay = ({foodContent, myid, plus, minus}) => {
  let {header, description, moreDescription, info, loveIt, price,previousPrice, pic1, pic2, pic3, quantity} = foodContent
  let pictureCarouselStyle = {objectFit: "cover", height: "70vh"}

return(

<div id="bigfoodDiv" style={{height: "230px", marginBottom: "40px",}} >
       
<div className="me-3 mb-1 mt-2 bit-margin-phone" style={{backgroundColor: "#f2f5f3", height: "400px", width: "540px"}}>
    <h4 style={{marginBottom: "20px"}}>{header}</h4>
    <div>{description}</div>
    <div>{moreDescription}</div>
    <p style={{color: "#6f0000" , marginTop: "22px"}}>{loveIt}<span><i className="fas fa-heart"></i></span></p>
    <div  style={{textDecoration: "line-through"}}>original price: <span>{previousPrice}$</span></div>
    <div style={{fontWeight: "bold", color: "#e64723"}}>sale price: {price}$</div>
    <br/>

</div>

</div>
  )
}

export default SearchDisplay;