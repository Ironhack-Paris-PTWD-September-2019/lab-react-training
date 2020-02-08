import React,{Component} from "react";
import "../src/Greetings.css" ;

class Greetings extends Component {

    render(props){
        const{lang,children}=this.props;
        let text
            switch (lang) {
                case 'de':
                    text ='Hallo'
                    break
                case 'fr':
                    text = 'Bonjour'
                    break
                default:
                    break
            }
       
        return(
            <div className="Greetings">
            <p>{text} {children}</p>
            </div>
        )
    }
}
export default Greetings;