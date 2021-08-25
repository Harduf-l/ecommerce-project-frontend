import React from 'react'
import auth from '../lib/auth'
import  {Link } from "react-router-dom";


let Members = (props) => {
    return(
        <div>
            <h3>special sales for members only :) :) :)</h3>
            <Link to="/"> <button onClick={ 
                    () => auth.logout(
                        () => props.history.push("/")
                    )
                } >Logout</button></Link> 
        </div>
    )
}

export default Members