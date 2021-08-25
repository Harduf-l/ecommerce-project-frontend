import {Link} from 'react-router-dom'

import cookie_granola1 from '../pictures/cookies/cookie1.jpg'
import cookie_chocolate1 from '../pictures/cookies/chocolate_cookie1.jpg'
import cookie_bliss1 from '../pictures/cookies/bliss_cookie1.jpg'
import cookie_lemon1 from '../pictures/cookies/lemon_cookie1.jpg'
import cookie_surprise1 from '../pictures/cookies/surprise_cookie1.jpg'
import cookie_coconut1 from '../pictures/cookies/coconute_cookie1.jpg'

import walnut_butter1 from '../pictures/butters/walnut-butter1.jpg'
import peanut_spread1 from '../pictures/butters/peanut-spread1.jpg'

import pistachio_buuter from '../pictures/butters/pistachio-buuter.jpg'


import bread2 from '../pictures/bread/spelt-bread.jpg'
import bread3 from '../pictures/bread/sprouted-bread.jpg'
import bread4 from '../pictures/bread/whole-wheat-bread.jpg'


import berries from '../pictures/superfood/berries.jpg'
import cacao_seeds from '../pictures/superfood/cacao-seeds.jpg'
import chia from '../pictures/superfood/chia.png'
import goji_berry from '../pictures/superfood/goji-berry.jpg'
import maca_powder from '../pictures/superfood/maca-powder.jpg'
import spirulina from '../pictures/superfood/Spirulina.jpg'


import Carousel from './Carousel'




function Home() {

    const picturestyle1={width: "1600px", height: "300px",objectFit: "cover" }
    const picturestyle2={width: "300px", height: "300px",objectFit: "cover",} 
    return(

        <div>
        
 <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-inner">
     <div class="carousel-item active">
         <p style={{position: "absolute", color: "white", fontSize:"50px", paddingLeft: "50px", paddingTop: "100px"}}>Welcome to a world of health and joy</p>
       <img src={cacao_seeds}  style={{height: "550px", width: "410px", objectFit: "cover", margin: "8px"} } class="d-block w-100" alt="..."/>
     </div>
   </div>
 </div>
 <Link to="/catalog" style={{position: "absolute", top: "470px",padding: "10px 20px", left: "43%", textDecoration: "none", fontSize: "40px", color: "white", border: "3px white solid", backgroundColor: "rgba(69,51,63, 0.5)"}}>Shop now</Link>

<div style={{maxWidth: "1200px", margin: '0 auto', marginTop:'64px' }}>
   <h2 style={{textAlign: "center", marginBottom: "20px"}}>get to know our new breads collection.</h2>
    <Carousel>
        <img src={bread2} style={picturestyle1} alt="altplacer" />
        <img src={bread3}   style={picturestyle1} alt="altplacer" />
        <img src={bread4}  style={picturestyle1} alt="altplacer" />
    </Carousel>
    <h2 style={{textAlign: "center", marginBottom: "20px",  marginTop: "40px"}}>New Products</h2>
    <Carousel show={3}>
        <div style={{padding: 8}}>
            <img src={berries} style={picturestyle2} alt="altplacer"  />
        </div>
        <div style={{padding: 8}}>
            <img src={cacao_seeds} style={picturestyle2} alt="altplacer"  />
        </div>
        <div style={{padding: 8}}>
            <img src={chia} style={picturestyle2}  alt="altplacer"  />
        </div>
        <div style={{padding: 8}}>
            <img src={goji_berry} style={picturestyle2} alt="altplacer"/>
        </div>
        <div style={{padding: 8}}>
            <img src={ maca_powder} style={picturestyle2} alt="altplacer"/>
        </div>
        <div style={{padding: 8}}>
            <img src={ spirulina} style={picturestyle2} alt="altplacer"/>
        </div>
    </Carousel>

    <h2 style={{textAlign: "center", marginBottom: "20px", marginTop: "40px"}}>On Sale</h2>
    <Carousel show={4}>
    <div style={{padding: 8}}>
            <img src={cookie_granola1} style={picturestyle2} alt="altplacer"  />
        </div>
        <div style={{padding: 8}}>
            <img  src={cookie_chocolate1 } style={picturestyle2} alt="altplacer"  />
        </div>

        <div style={{padding: 8}}>
            <img  src={cookie_bliss1} style={picturestyle2} alt="altplacer" />
        </div>
        <div style={{padding: 8}}>
            <img  src={cookie_lemon1} style={picturestyle2} alt="altplacer" />
        </div>
        <div style={{padding: 8}}>
            <img  src={cookie_surprise1} style={picturestyle2} alt="altplacer" />
        </div>

        <div style={{padding: 8}}>
            <img  src={ cookie_coconut1} style={picturestyle2} alt="altplacer" />
        </div>
        <div style={{padding: 8}}>
            <img  src={ walnut_butter1} style={picturestyle2} alt="altplacer" />
        </div>
        <div style={{padding: 8}}>
            <img  src={peanut_spread1} style={picturestyle2} alt="altplacer" />
        </div>

        <div style={{padding: 8}}>
            <img  src={pistachio_buuter} style={picturestyle2} alt="altplacer" />
        </div>
    </Carousel>
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