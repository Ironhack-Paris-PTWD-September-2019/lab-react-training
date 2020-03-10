import React from 'react';

class ClickablePicture extends React.Component{
    state={
        glasses: false
    }
    changeImg = () => {
        this.setState({
            glasses: !this.state.glasses
        })
    }
    render() {
        return(
            <div>
                <img src={this.state.glasses ? this.props.img : this.props.imgClicked} alt='John' onClick={this.changeImg}/>
            </div>
        )
    }
}
export default ClickablePicture;