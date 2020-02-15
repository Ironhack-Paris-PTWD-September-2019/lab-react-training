import React from 'react';
import profiles from './data/berlin.json';
import FacebookCard from './FacebookCard.js'

class Facebook extends React.Component {
    state={
        profiles:profiles,
        //profiles:[{"firstName": "Alec", "lastName": "Budd", "country": "USA", "img": "http://res.cloudinary.com/djyjdargg/image/upload/v1550165485/Ironclass/IH_Jan1950.jpg.jpg", "isStudent": true}],
        currentCountry:""
    }

    render(){
        var countriesArray = [...new Set(this.state.profiles.map(profile => profile.country))]
        //var noDupliCateCountriesArray=countriesArray.filter((el,index)=>countriesArray.indexOf(el)===index)
        console.log('this.state.currentCountry',this.state.currentCountry)
     
        return(
            <div>
                <button>All</button>
                {countriesArray.map((country,index)=>{
                    return(
                        <button key={index} value={country} onClick={e => this.setState({currentCountry: country})}>
                            {country}
                        </button>
                    )
                })}
        
                {this.state.profiles.map((profile,index)=>{
       
                    return(
             
                        <FacebookCard key={index} {...profile} blue={this.state.currentCountry===profile.country ? "blue" : ""} />
                      
                    )
                })}
          
            </div>
        )
    }
}

export default Facebook;