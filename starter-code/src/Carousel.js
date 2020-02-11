import React from 'react';

class Carousel extends React.Component {

    state = {
        imgCount: 0
    };

    // previous image -1
    // entre 0 et this.props.imgs.length
    
    // next image +1

    previousImage = () => {
        console.log('prev', this.state.imgCount);

        if (this.state.imgCount === 0) {
            return;
        }
            
        this.setState({
            imgCount: this.state.imgCount-1
        });
    };

    nextImage = () => {
        console.log('next', this.state.imgCount);

        if (this.state.imgCount<this.props.imgs.length-1) {
            this.setState({
                imgCount: this.state.imgCount+1
            });
        } else {
            this.setState({
                imgCount: this.state.imgCount
            });
        };
    };

    render() {
        return(
            <div className="Carousel">
                <img style={{width: "300px"}} alt="carousel" src={this.props.imgs[this.state.imgCount]}/>
                <button onClick={this.previousImage}>Previous</button> <button onClick={(event) => this.nextImage()}>Next</button>
            </div>
        );
    }
}

export default Carousel;