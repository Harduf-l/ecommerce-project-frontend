import Map from './Map'

import React from 'react'


class Contact extends React.Component {

    constructor(props){
        super()
        this.state = {
            nameError: "",
            emailError: ""
        }
    }

    myErrors = {
        name: "Name field contains letter only",
        email: "Email format ....@....com"
    }

    checkField = (e, string) => {
        console.log(string)
        console.log(e.target.value)

        if (!e.target.value) {
            this.setState({[string + "Error"]: "Required field"})
        } else if (this[string+"Check"](e.target.value)) {
            this.setState({[string + "Error"]: ""})
        } else if (!this[string+"Check"](e.target.value)) {
            this.setState({[string + "Error"]: this.myErrors[string]})
        }
    }

    emailCheck = (string) => {
        return /[a-zA-Z0-9-_.]+@[a-z]+.[a-z]{2,4}/.test(string)
    }

    nameCheck = (string) => {
        return /^[a-zA-Z]+$/.test(string)
    }


    render() {
      
    return(
        <div>
        <div>
           <span className="homeHeaderSpan"><h2 className="homeHeader" style={{marginBottom: "60px"}}>Contact us</h2></span>
        </div>
        <form className="col-lg-4 col-11 col-md-8" style={{margin: "0 auto"}}>
                  <input onChange={(e) => this.checkField(e, "name")} className="regularInput2" id="firstname" placeholder="Name" value={(localStorage.getItem("namelogged")) && localStorage.getItem("namelogged")} type="text"/>
                    <div className="errorMsg">{this.state.nameError}</div>
                

                    <input onChange={(e) => this.checkField(e, "email")} className="regularInput2"  placeholder="Email" type="email"/> 
                    <div className="errorMsg">{this.state.emailError}</div>
                    
                    <textarea maxlength="300" style={{ width: "100%", padding: "6px"}} placeholder="How can we help you?"  rows="5"/>
                              
                    <div style={{textAlign: "center"}}>
                    <button style={{marginTop: "30px"}} className="btn btn-lg btn-secondary">Submit</button>
                    </div>
        </form>

        <div style={{marginTop: "40px"}}>
          <Map/>
        </div>
        </div>
    )
    }
}

export default Contact