import React, { Component } from 'react'
import auth from '../lib/auth'

export default class Login extends Component {
    render() {
        console.log(this.props.match)
    
        return (
            <div>
                <h5>login page</h5>
                <button onClick={()=>auth.login()}
                 >Login</button>
            </div>
        )
    }
}