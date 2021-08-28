import {Link} from 'react-router-dom'

import cookie_granola1 from '../../pictures/cookies/cookie1.jpg'
import cookie_chocolate1 from '../../pictures/cookies/chocolate_cookie1.jpg'
import cookie_bliss1 from '../../pictures/cookies/bliss_cookie1.jpg'
import cookie_lemon1 from '../../pictures/cookies/lemon_cookie1.jpg'
import cookie_surprise1 from '../../pictures/cookies/surprise_cookie1.jpg'
import cookie_coconut1 from '../../pictures/cookies/coconute_cookie1.jpg'
import cookie_lemon2 from '../../pictures/cookies/lemon-cookie3.jpg'
import cookie_surprise2 from '../../pictures/cookies/surprise_cookie2.jpg'
import cookie_coconut2 from '../../pictures/cookies/coconute_cookie2.jpg'



import berries from '../../pictures/superfood/berries.jpg'
import cacao_seeds from '../../pictures/superfood/cacao-seeds-original.jpg'
import chia from '../../pictures/superfood/chia.png'
import goji_berry from '../../pictures/superfood/goji-berry.jpg'
import maca_powder from '../../pictures/superfood/maca-powder.jpg'
import spirulina from '../../pictures/superfood/Spirulina.jpg'

import bread1home from '../../pictures/breadHome/bread1.jpg'
import bread2home from '../../pictures/breadHome/bread2.jpg'
import bread3home from '../../pictures/breadHome/bread3.jpg'
import bread4home from '../../pictures/breadHome/bread4.jpg'
import bread5home from '../../pictures/breadHome/bread5p.png'
import bread6home from '../../pictures/breadHome/bread6.jpg'

import Carousel from './Carousel'




function Home() {

    const picturestyle1={width: "400px", height: "300px",objectFit: "cover", paddingRight: "30px" }
    const picturestyle2={width: "300px", height: "300px",objectFit: "cover", paddingRight: "30px" } 
    return(

        <div>
        
 <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-inner">
     <div class="carousel-item active">
         <p className="shopHome">Welcome to a world of health and joy</p>
       <img src={cacao_seeds}  style={{height: "550px", width: "410px", objectFit: "cover", margin: "8px"} } class="d-block w-100" alt="..."/>
     </div>
   </div>
 </div>
 <Link to="/catalog" className="shopSquare">Shop now</Link>

 

             

<div style={{maxWidth: "1200px", margin: '0 auto', marginTop:'64px' }}>
<span className="homeHeaderSpan"><h2 className="homeHeader" style={{textAlign: "center", marginBottom: "20px"}}>Get to know our new breads collection</h2></span>
    <Carousel show={2}>
        <img src={bread1home} style={picturestyle1} alt="altplacer" />
        <img src={bread2home}   style={picturestyle1} alt="altplacer" />
        <img src={bread3home}  style={picturestyle1} alt="altplacer" />
        <img src={bread4home}  style={picturestyle1} alt="altplacer" />
        <img src={bread5home}  style={picturestyle1} alt="altplacer" />
        <img src={bread6home}  style={picturestyle1} alt="altplacer" />
    </Carousel>

<Link to={{ pathname: `/catalog/`, search: `breads` }} className="homeLinks"><button>Watch more</button></Link>

    <span className="homeHeaderSpan"><h2 className="homeHeader" style={{textAlign: "center", marginBottom: "20px"}}>Superfood for a perfect health</h2></span>
    <Carousel show={2}>
    
            <img src={berries} style={picturestyle2} alt="altplacer"  />
            <img src={cacao_seeds} style={picturestyle2} alt="altplacer"  />
            <img src={chia} style={picturestyle2}  alt="altplacer"  />
            <img src={goji_berry} style={picturestyle2} alt="altplacer"/>
            <img src={ maca_powder} style={picturestyle2} alt="altplacer"/>
            <img src={ spirulina} style={picturestyle2} alt="altplacer"/>
    </Carousel>


<Link to={{ pathname: `/catalog/`, search: `superfood` }} className="homeLinks"><button>Watch more</button></Link>


    <span className="homeHeaderSpan"><h2 className="homeHeader" style={{textAlign: "center", marginBottom: "20px"}}>Cookies On Sale</h2></span>
    <Carousel show={2}>
  
            <img src={cookie_granola1} style={picturestyle2} alt="altplacer"  />
            <img  src={cookie_chocolate1 } style={picturestyle2} alt="altplacer"  />
            <img  src={cookie_bliss1} style={picturestyle2} alt="altplacer" />
            <img  src={cookie_lemon1} style={picturestyle2} alt="altplacer" />
            <img  src={cookie_surprise1} style={picturestyle2} alt="altplacer" />
            <img  src={ cookie_coconut1} style={picturestyle2} alt="altplacer" />
            <img  src={cookie_lemon2} style={picturestyle2} alt="altplacer" />
            <img  src={cookie_surprise2} style={picturestyle2} alt="altplacer" />
            <img  src={cookie_coconut2} style={picturestyle2} alt="altplacer" />
        </Carousel>
        <Link to={{ pathname: `/catalog/`, search: `cookies` }} className="homeLinks"><button>Watch more</button></Link>
</div>

</div>

    )
}

export default Home











// <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//         <p style={{position: "absolute", color: "white", fontSize:"50px", paddingLeft: "50px", paddingTop: "100px"}}>welcome to a world of health and joy</p>
//       <img src={cacao_seeds}  style={{height: "550px", width: "410px", objectFit: "cover", margin: "8px"} } class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src={bread1}  style={{height: "550px", width: "410px", objectFit: "cover", margin: "8px"} } class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src={berries} style={{height: "550px", width: "410px", objectFit: "cover", margin: "8px"} }class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>