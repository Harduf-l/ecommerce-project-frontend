import React from 'react'
import auth from '../lib/auth'


let Members = (props) => {
    return(
        <div>
            <h1>Secret page!!! shshsh!!!</h1>
            <button onClick={ 
                    () => auth.logout(
                        () => props.history.push("/")
                    )
                } >Logout</button>
        </div>
    )
}

export default Members