import cookie_granola1 from '../../pictures/cookies/cookie1.jpg'
import cookie_chocolate1 from '../../pictures/cookies/chocolate_cookie1.jpg'
import cookie_bliss1 from '../../pictures/cookies/bliss_cookie1.jpg'
import cookie_lemon1 from '../../pictures/cookies/lemon_cookie1.jpg'
import cookie_surprise1 from '../../pictures/cookies/surprise_cookie1.jpg'
import cookie_coconut1 from '../../pictures/cookies/coconute_cookie1.jpg'

import walnut_butter1 from '../../pictures/butters/walnut-butter1.jpg'
import peanut_spread1 from '../../pictures/butters/peanut-spread1.jpg'
import nut_spread1 from '../../pictures/butters/nut-spread1.jpg'
import pistachio_buuter from '../../pictures/butters/pistachio-buuter.jpg'
import cashew_butter from '../../pictures/butters/cashew-butter.jpg'
import chocolate_butter from '../../pictures/butters/chocolate-butter.jpg'

import bread1 from '../../pictures/bread/baguette.jpg'
import bread2 from '../../pictures/bread/spelt-bread.jpg'
import bread3 from '../../pictures/bread/sprouted-bread.jpg'
import bread4 from '../../pictures/bread/whole-wheat-bread.jpg'
import bread5 from '../../pictures/bread/french-bread.jpg'
import bread6 from '../../pictures/bread/white.jpg'

import berries from '../../pictures/superfood/berries.jpg'
import cacao_seeds from '../../pictures/superfood/cacao-seeds.jpg'
import chia from '../../pictures/superfood/chia.png'
import goji_berry from '../../pictures/superfood/goji-berry.jpg'
import maca_powder from '../../pictures/superfood/maca-powder.jpg'
import spirulina from '../../pictures/superfood/Spirulina.jpg'


const dataCategory = [ 
     {
    type: "cookie",
    mypictures: [ cookie_granola1, cookie_chocolate1, cookie_bliss1, cookie_coconut1, cookie_lemon1,cookie_surprise1],
    links: ["/granole-cookie", "/chocoloate-cookie", "/blissful-cookie", "/coconute-cookie", "/lemon-cookie", "/surpise-cookie"],
    infotext: ["granola cookies", "chocolate cookies", "blissful cookies", "coconute cookies", "lemon cookies", "surprise cookies"]
},
    {
    type: "spreads",
    mypictures: [ walnut_butter1, chocolate_butter, nut_spread1, pistachio_buuter, cashew_butter, peanut_spread1 ],
    links: ["/walnut-butter", "/chocolate-butter" , "/nut-butter", "/pistachio-butter", "/cashew-butter", "/peanut-butter"],
    infotext: ["walnut butter", "chocolate butter", "nut butter", "pistachop butter", "cashew butter",  "peanut butter"]
},
    {
    type: "breads",
    mypictures: [bread1,bread2,bread3,bread4,bread5,bread6 ],
    links: ["/baguette", "/seed-bread" , "/spelt-bread", "/rye-bread", "/french-bread", "/white-bread"],
    infotext: ["baguette", "seeds bread", "spelt bread", "rye bread", "french bread", "white bread"]
},
    {
    type: "superfood",
    mypictures: [berries,cacao_seeds,chia,goji_berry,maca_powder,spirulina ],
    links: ["/berries", "/cacao-seeds" , "/chia", "/goji", "/maca", "/spirulina"],
    infotext: ["berries", "cacao seeds", "chia seeds", "goji berry", "maca powder", "spirulina"]
}

]

export default dataCategory; 