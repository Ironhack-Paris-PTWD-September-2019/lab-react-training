import React,{Component} from "react";
import "../src/Random.css" ;


class Random extends Component {
    
    render(){
        const{min,max}=this.props;

        function rand (min,max){
            return Math.floor (Math.random() * (max - min) + min);  
        }

        return(
            <div className="Random">
                <p>Random value between {min} and {max} is {rand(min, max)} </p>
            </div>

        )
    }
};

export default Random;