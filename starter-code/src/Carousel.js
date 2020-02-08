import React from 'react';
class Carousel extends React.Component {
    state = {
        picture:this.props.imgs[0]
    }

    leftArrow = () => {
        var index = this.props.imgs.findIndex(el=> el===this.state.picture)
        if (index >= 1) {index-=1}
        this.setState({
            picture:this.props.imgs[index]
        })
    }

    rightArrow = () => {
        var index = this.props.imgs.findIndex(el=> el===this.state.picture)
        if(index >= (this.props.imgs.length-1)) {
            index=this.props.imgs.length-1
        } else {
            index+=1
        }
        this.setState({
            picture:this.props.imgs[index]
        })
    }

    render(){
        return(
            <div className="Carousel">
                <span role="img" aria-label="leftArrow" onClick={this.leftArrow}>⬅️</span>
                <img src={this.state.picture} alt={this.state.picture}></img>
                <span role="img" aria-label="rightArrow" onClick={this.rightArrow}>➡️</span>
            </div>
        )
    }
}
export default Carousel;