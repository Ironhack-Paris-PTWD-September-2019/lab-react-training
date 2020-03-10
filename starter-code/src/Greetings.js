import React,{ Component } from 'react';

class Greetings extends Component {
    render () {
        if (this.props.lang==="de") {
         return (
            <div>
               <p>Hallo {this.props.children} !</p>
                
            </div>
         );}
        if (this.props.lang==="fr") {
        return (
            <div>
                <p>Bonjour {this.props.children} !</p>
                
            </div>
        );}
        if (this.props.lang==="en") {
            return (
                <div>
                    <p>Hello {this.props.children} !</p>
                    
                </div>
            );}
        if (this.props.lang==="es") {
            return (
                <div>
                    <p>Ola {this.props.children} !</p>
                    
                </div>
            );}
        

     }
}





export default Greetings