import React from 'react';

class Greetings extends React.Component {
    render() {
        var lang = this.props.lang; // c'est ce qui fait le lien !!!!!!
        var greet = "";

        if (lang === "fr") {
            greet = "Bonjour"
            console.log(lang);
        } else if (lang === "de") {
            greet = "Hallo"
        } else if (lang === "es") {
            greet = "Hola"
        } else {
            greet = "Hello"
        }

        return(
            <div className="lang">
                {greet} {this.props.children}
            </div>
        );
    } 
}

export default Greetings;