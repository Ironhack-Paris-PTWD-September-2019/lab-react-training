import React,{Component} from "react";
import "../src/Boxcolor.css" ;

class Boxcolor extends Component {
    const bBox ={
        backgroundColor:'rgb(${r} ,${g},${b})',
    };

    render(){
        return(
            <div style={bBox}></div>
        )
    }
};

export default Boxcolor;