import React, { Component } from 'react';

// var mappingTable = {
//     de: 'Hallo',
//     fr: 'Bonjour',
//     en: 'Hello',
//     es:'Buenos dias'

// } 

class Greetings extends Component {
    render() {

        if (this.props.lang==="de")

        
        return (
        <div className="Greetings">
        <p>Hallo {this.props.children} !</p>
        </div>
        );

        if (this.props.lang==="fr")

        
        return (
        <div className="Greetings">
        <p>Bonjour {this.props.children} !</p>
        </div>
        );
       
        if (this.props.lang==="en")

        
        return (
        <div className="Greetings">
        <p>Hello {this.props.children} !</p>
        </div>
        );

        if (this.props.lang==="es")

        
        return (
        <div className="Greetings">
        <p>Buenos dias {this.props.children} !</p>
        </div>
        );

    }
}



export default Greetings;

     
// Object.keys(mappingTable).forEach(propname => {
//     lang = mappingTable[propname];
// })

// if (propname in this.props) {

// }