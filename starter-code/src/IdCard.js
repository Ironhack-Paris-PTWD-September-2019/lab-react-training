import React,{Component} from "react";
import "../src/IdCard.css" ;
/*import moment from moment; ---> librairie dates
birth.moment().format('dddd')
*/ 

class IdCard extends Component {
    render(){
        const{lastName,firstName,gender,height,birth, picture}= this.props;
        return(
            <div class ="IdCard">
                <div>
                    <div>
                    <img src = {picture}></img>
                    </div>
                    <div>
                    <p> First Name : {firstName},</p>
                    <p> Last Name : {lastName},</p>
                    <p> Gender : {gender},</p>
                    <p> Height : {height},</p>
                    <p> Birth : {birth.toUTCString()},</p> 
                    </div>
                </div>
            </div>
        )
    }
}    

export default IdCard;