import React, { Component } from 'react'
import auth from '../../lib/auth'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    constructor(){
        super()

        this.state= {
            nameInstructions: "",
            nameOK: false,
            nameClass: "regularInput",
        }
    }

   
    saveLoggedName = (e) => {
      
        let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let result = pattern.test(e.target.value)
        if (!result) {
            this.setState({nameInstructions: "Enter a valid E-mail"})
            this.setState({nameOK: false})
            this.setState({nameClass: "badInput"})
        } else {
            this.setState({nameInstructions: ""})
            this.setState({nameOK: true})
            localStorage.setItem("namelogged", e.target.value) 
            this.setState({nameClass: "goodInput"})
        }
    }


    render() {
        console.log(this.props.match)
    
        return (
            <div style={{margin: "0 auto", width: "300px"}}>
                <h5 style={{marginTop: "50px"}}>login</h5>
                name: <input onBlur={this.saveLoggedName} type="text"/>
                <br/>
                    <span style={{color: "red", fontSize: "13px"}}>{this.state.nameInstructions}</span>
                    <br/> 
                <br/>
              

                {this.state.nameOK? 
                <Link to="/membersZone"><button className="btn btn-secondary" onClick={()=>auth.login(this.props.checkLogged)}
                >Login</button></Link>    
                :
                <Link><button className="btn btn-secondary"
                >Login</button></Link>  
            }

            </div>
        )
    }
}

