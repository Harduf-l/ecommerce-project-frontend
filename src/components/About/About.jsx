import happyFamily from '../../pictures/happyFamily.jpg'

let About = () => {
    return(
        <div>
<span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "60px"}}>About</h2></span>

<div className="row ps-5 pe-5">
<div className="col-lg-6 col-12">
    <h3 style={{fontWeight: "440"}}>Your family deserve the best.</h3>
    <p style={{color: "#2b3239"}} className="me-5 mt-3">This is what led us to create our store. It's been a long journey until we have found the best food & care for our own children. </p>
    <p style={{color: "#2b3239"}} >We are a loving family with a passion to spread health and love all over the world. </p>
    <p style={{color: "#2b3239"}}>Our mission is to sell delicious food, made from only natural ingredients.<br/> As well, we work with trade-fair & 100% organic food products.<br/> Good for the environment, the best choice for your family.</p>
</div>

<div  className="col-lg-6 col-12">
<img  className="col-12 pt-lg-0 pt-4" style={{borderRadius: "20px"}} src={happyFamily} alt={"happy-family"}/>
</div>

</div>
        </div>
    )
}

export default About