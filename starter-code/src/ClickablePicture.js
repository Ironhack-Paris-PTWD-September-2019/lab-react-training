import React from 'react'

const image = "../img/persons/maxence.png"

const glassImage= "/img/persons/maxence-glasses.png"

class ClickablePicture extends React.Component {

    state = {
        img : image
    }

    switch =()=>{
        const newImage = this.state.img === image ? glassImage : image
        this.setState({img : newImage}) 
    }

    render() {
        return(
            <div className = "switch">
                <img src={this.state.img} alt="" onClick = {this.switch}/>
            </div>

        )
    }
}

export default ClickablePicture