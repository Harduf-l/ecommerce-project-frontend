let Content = () => {
    return (
<div id="bigfoodDiv" className="d-flex justify-content-center flex-wrap">


    <div className="me-5 mt-5 p-5">
        <h4>עוגיות גרנולה טעימות במיוחד!</h4>
        <text>עוגיות מופלאות מרכיבים טבעיים בלבד.</text>
        <br/>
        <text> שיבולת שועל, סילאן, שוקולד מריר. כל הטוב שיש לטבע להציע...</text>
        <p style={{color: "#6f0000" , marginTop: "20px"}}>תתכוננו להתאהב...<span><i class="fas fa-heart"></i></span></p>
        <price>מחיר: 35 ש"ח</price>
        <br/>
        כמות<input style={{width: "50px", margin: "10px"}} type="number"></input>
        <button className="btn btn-secondary btn-sm mb-1">הוסף לעגלה</button>
    </div>

    <div id="carouselCookie" class="carousel slide text-center" data-bs-ride="carousel" style={{width: "400px"}}>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img style={{height: "400px"}}  src="https://www.livewellbakeoften.com/wp-content/uploads/2020/09/Apple-Oatmeal-Cookies-7-new.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img style={{height: "400px"}}  src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_696,h_870/f_jpg,q_auto:eco,w_1500,c_fill,g_auto,ar_1:1/k%2FPhoto%2FRecipes%2F2020-12-jesse's-cookie-club-overnight-oat-cookies%2F2020-12-14_ATK39523" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img style={{height: "400px"}} src="https://www.kitchensanctuary.com/wp-content/uploads/2014/10/Banana-Oat-Cookies-square-FS-1.jpg" class="d-block w-100" alt="..."/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>

</div>
    )
}

export default Content 

