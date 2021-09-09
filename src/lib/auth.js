import React from 'react'


class Auth extends React.Component {

    constructor(){
        super()
        this.authenticated = false
    }

    login(myfunction){
        console.log(this.props)
        this.authenticated = true
        localStorage.setItem("isLogged", true)
        myfunction()

    }

    logout(){
        this.authenticated = false
        localStorage.removeItem("isLogged")
        localStorage.removeItem("namelogged")

    }

    isAuthenticated(){
        return this.authenticated
    }

}

export default new Auth()