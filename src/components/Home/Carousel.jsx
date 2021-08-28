import React, { Component } from 'react'

import './Carousel.css'

export default class Carousel extends Component {

    constructor(props){
        super(props)

        this.state = {
            currentIndex: 0,
            show: this.props.show || 0,
            length: this.props.children.length,
            touchPosition: null
        }
    }

    next = () => {
        if( this.state.currentIndex < this.state.length - this.state.show)
            this.setState({currentIndex: this.state.currentIndex + 1})
    }

    prev = () => {
        if( this.state.currentIndex > 0)
            this.setState({currentIndex: this.state.currentIndex - 1})
    }

    handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        this.setState({touchPosition: touchDown})
    } 


    render(){
        const {length, show, currentIndex} = this.state;
        
        return (
            <div className="carousel-container" style={{marginBottom: "50px", paddingTop: "10px"}}>
                <div className="carousel-wrapper">
                   { currentIndex < (length - show ) && <button onClick={this.prev} className="left-arrow">
                        &lt;
                    </button> }
    
                    <div
                     className="carousel-content-wrapper">
                        <div 
                        className={`carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                        >
                            {this.props.children}
                        </div>
                    </div>
    
                    <button onClick={this.next} className="right-arrow">
                        &gt;
                    </button>
                </div>
            </div>
        )
    }
    
}