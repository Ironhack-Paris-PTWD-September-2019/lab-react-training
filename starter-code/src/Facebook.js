import React from 'react';
import profiles from './data/berlin.json';
import FacebookCard from './FacebookCard.js'

class Facebook extends React.Component {
    state={
        profiles:profiles
        //profiles:[{"firstName": "Alec", "lastName": "Budd", "country": "USA", "img": "http://res.cloudinary.com/djyjdargg/image/upload/v1550165485/Ironclass/IH_Jan1950.jpg.jpg", "isStudent": true}],
    }

    blueBackground =(event,country) => {
        if (event.target.value===country) {
            return "blue"
        }
    }


    render(){
        var countriesArray = [...new Set(this.state.profiles.map(profile => profile.country))]
        //var noDupliCateCountriesArray=countriesArray.filter((el,index)=>countriesArray.indexOf(el)===index)
     
        return(
            <div>
                <button>All</button>
                {countriesArray.map((country,index)=>{
                    return(
                        <button key={index} value={country} onClick={this.blueBackground}>
                            {country}
                        </button>
                    )
                })}
        
                {this.state.profiles.map((profile,index)=>{
                    return(
                        <div>
                        <FacebookCard key={index} {...profile} clickToChangeBackground={this.blueBackground}/>
                        </div>
                    )
                })}
          
            </div>
        )
    }
}

export default Facebook;