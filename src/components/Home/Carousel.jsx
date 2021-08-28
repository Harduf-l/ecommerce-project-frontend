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

    handleTouchMove = (e) => {
        const touchDown = this.state.touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            this.next()
        }
    
        if (diff < -5) {
            this.prev()
        }
    
        this.setState({touchPosition : null})
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
                     onTouchStart={this.handleTouchStart}
                     onTouchMove={this.handleTouchMove}
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