import vegan_pic from '../pictures/baners/natural.png'
import lowcarb_pic from '../pictures/baners/paleo.png'
import {Link} from 'react-router-dom'
import React from 'react'

let SearchDisplay = ({foodContent}) => {
  let {header, id, description, pic1,vegan, lowcarb, price,previousPrice } = foodContent

return(

<div className="container col-lg-4 col-md-6 col-10 p-3" style={{border: "#f0f0f0 1px solid"}}>
<Link to={`/product/${id}`} style={{textDecoration: "none", color: "#2b3239"}}>
  <div className="row">

    <div className="col-12">
    <h4 style={{marginBottom: "5px"}}>{header}</h4>
    <div>
        {vegan && <img style={{padding: "2px"}}src={vegan_pic} alt="vegan"/>}
        {lowcarb && <img style={{padding: "2px"}} src={lowcarb_pic} alt="vegan"/>}
        {!lowcarb && !vegan && <img style={{padding: "2px", visibility:"hidden"}} src={lowcarb_pic} alt="vegan"/>}
      </div>
    </div>

    <div className="col-6">
      <div>{description}</div>
      <div style={{textDecoration: "line-through"}}>original price: <span>{previousPrice}$</span></div>
      <div style={{fontWeight: "bold", color: "#e64723"}}>sale price: {price}$</div>
    </div>

    <div className="col-6">
      <div>
    <img src={pic1} alt={header} style={{height: "120px", width: "120px", objectFit: "cover", borderRadius: "20px", marginTop: "-50px"}}/>
      </div>
      <br/>
      <div>

      </div>
    </div>

  </div>
  </Link>
</div>

  )
}

export default SearchDisplay;