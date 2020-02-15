import React from 'react'
import './Carousel.css'

class Carousel extends React.Component {

    state = {
        img : this.props.imgs[0]
    }

    moveForward = () => {
        this.setState({
            img : this.props.imgs[this.props.imgs.indexOf(this.state.img) + 1]
        })
        
        if(this.props.imgs.indexOf(this.state.img) === this.state.imgs.length) {
            return false
        }
    }

    moveBackward = () => {
        this.setState({
            img : this.props.imgs[this.props.imgs.indexOf(this.state.img) - 1]
        })
    }

    render() {

        return(
            <div className = 'Carousel'>
                <button onClick = {this.moveBackward}></button>
                <img src={this.state.img} alt=""/>
                <button onClick = {this.moveForward}></button>
            </div>
        )
    }
}

export default Carousel