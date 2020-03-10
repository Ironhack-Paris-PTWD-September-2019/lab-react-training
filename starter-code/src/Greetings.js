import React from "react";

class Greetings extends React.Component {
    render(){
        var lang ="Hello";
        switch(this.props.lang){
            case "de":
                lang="Hallo";
            break;
            case "fr":
                lang="Bonjour";
            break;
            case "en":
                lang="Hello";
            break;
            case "es":
                lang="Hola";
            break;
            default: lang ="Hello";
        }
        return(
            <div>{lang} {this.props.children}</div>
        )
    }
}

export default Greetings;