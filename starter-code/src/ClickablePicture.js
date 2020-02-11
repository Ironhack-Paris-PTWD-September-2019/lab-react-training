import React from 'react';

class ClickablePicture extends React.Component {
    state = {
        selectedImg: this.props.img
    };

    changeImage = () => {
        if (this.state.selectedImg === this.props.img) {
            this.setState({
                selectedImg: this.props.imgClicked
            });
        }

        if (this.state.selectedImg === this.props.imgClicked) {
            this.setState({
                selectedImg: this.props.img
            })
        }
    };

    render() {
        return(
            <img style={{width: "160px"}} alt="clickable" src={this.state.selectedImg} onClick={(event) => this.changeImage()}/>
        );
    }
}

export default ClickablePicture;