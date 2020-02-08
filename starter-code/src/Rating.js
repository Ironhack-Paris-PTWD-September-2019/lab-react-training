import React from "react";
import "./index.css";
import vide from "./star_border-24px.svg";
import full from "./star-24px.svg";


class Rating extends React.Component {

    render() {

      let numberStar = Math.round(this.props.children);
      console.log(numberStar);

      return (
         <div>
            {[1,2,3,4,5].map((el, i) => { 
               if (i < numberStar) { 
                  return <img src={full} alt="" /> 
               } else { 
                  return <img src={vide} alt="" /> 
               }
            }
            )}
         </div>
      );
   }    
}

export default Rating;

