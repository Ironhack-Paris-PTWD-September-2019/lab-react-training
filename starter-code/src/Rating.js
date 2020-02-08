import React, { Component } from 'react'
import starVide from "./starVide.svg"
import starPleine from "./starPleine.svg"



class Rating extends React.Component {
    render() {
      let numberStar = Math.round(this.props.children);
      console.log(numberStar);
      
      return (
         <div>
            {[1,2,3,4,5].map((el, i) => { 
               if (i < numberStar) { 
                  return <img src={starPleine} alt="" /> 
               } else { 
                  return <img src={starVide} alt="" /> 
               }
            }
            )}
         </div>
      );
   }    
}



export default Rating;