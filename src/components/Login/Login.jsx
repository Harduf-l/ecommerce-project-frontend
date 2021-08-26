import React, { Component } from 'react'
import auth from '../../lib/auth'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        console.log(this.props.match)
    
        return (
            <div style={{margin: "0 auto", width: "300px"}}>
                <h5 style={{marginTop: "50px"}}>login</h5>
                name: <input type="text"/>
                <br/>
                password: <input type="password"/>
                <Link to="/membersZone"><button className="btn btn-secondary" onClick={()=>auth.login()}
                
                 >Login</button></Link>
            </div>
        )
    }
}