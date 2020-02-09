import React, { Component } from "react";
import './index.css';

class Greetings extends Component {

    render() {
        let message = "";
        if (this.props.lang === "fr") {
            message = `Bonjour ${this.props.children}`;
        }
        if (this.props.lang === "en") {
            message = `Hello ${this.props.children}`;
        }
        if (this.props.lang === "de") {
            message = `Hallo ${this.props.children}`;
        }     
        if (this.props.lang === "es") {
            message = `Hola ${this.props.children}`;
        }

        return (
            <div className="greetingBox">
                <h3 className="message"><span>{message}</span></h3>
            </div>

        );
    }
}

export default Greetings;