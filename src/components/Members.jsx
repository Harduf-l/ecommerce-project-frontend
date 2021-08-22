import React from 'react'
import auth from '../lib/auth'


let Members = (props) => {
    return(
        <div>
            <h3>special sales for members only :) :) :)</h3>
            <button onClick={ 
                    () => auth.logout(
                        () => props.history.push("/")
                    )
                } >Logout</button>
        </div>
    )
}

export default Members