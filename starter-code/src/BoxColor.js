import React from 'react';

class BoxColor extends React.Component {
    render() {
        var r = this.props.r;
        var g = this.props.g;
        var b = this.props.b;

        return(
            <div className="BoxColor">
                <p style={{background: "rgb(" + r + "," + g + ","+ b + ")"}}>
                    BOX
                </p>
            </div>
        );
    }
};

export default BoxColor;