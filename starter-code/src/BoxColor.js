import React, {Component} from "react"





class BoxColor extends Component {
 
      

    render () {
        let r=this.props.r;
        let g=this.props.g;
        let b=this.props.b;
        let rgb = `(${r},${g},${b})`;



        const divStyle = {
            backgroundColor: `rgb${rgb}`,
            height:'80px',
            width:'80%'
            };
        return (
            
            <div style={divStyle}>test</div>
        );
    }
}

export default BoxColor;