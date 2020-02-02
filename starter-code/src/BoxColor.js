import React from 'react';

class BoxColor extends React.Component{
    render(){
        const divStyle={
            backgroundColor:'rgb(' + this.props.r +','+ this.props.g+',' + this.props.b + ')',
            height:100,
            width:100
        } 

        return(
            <div style={divStyle}></div>
        )
    }
}

export default BoxColor;