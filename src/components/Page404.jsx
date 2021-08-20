import cookie_bliss1 from '../pictures/cookies/bliss_cookie1.jpg'

let Page404 = () => {
    return (
        <div style={{textAlign: "center", color: "#737373"}}>
            <h1>404</h1>
            <h2>page not found</h2>
            <img src={cookie_bliss1} style={{width: "30%"}}/>
            <h3>looking for something tasty?</h3>
        </div>
    )
}

export default Page404 