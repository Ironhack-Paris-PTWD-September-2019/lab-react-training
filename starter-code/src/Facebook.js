import React from 'react'
import './facebook.css'
import profiles from './data/berlin.json'

class Facebook extends React.Component {

    state = {
        allProfiles : profiles
    }

    colorCountries =(country)=> {
        
    }    
    
    render() {
        console.log(this.state.allProfiles);
        const countriesArray = this.state.allProfiles.map(el =>{
            return el.country
        })
        const uniqueCountryArray = [...new Set(countriesArray)]
        
        return(
            <div className = 'facebook'>
                <div className='countriesButtons'>
                            {uniqueCountryArray.map(country=>{
                                return(
                                    <button onClick={()=>this.colorCountries}>{country}</button>
                                )
                            })}
                        </div>
                {this.state.allProfiles.map((profile , index)=>{
                    return(
                        <div className='faceApp'>
                        <div className='facePicture'>
                        <img src={profile.img} alt=""/>
                        </div>
                        <div className='infos'>
                        <p><strong>Fist name :</strong> {profile.firstName}</p>
                        <p><strong>Last name :</strong> {profile.lastName}</p>
                        <p><strong>Country :</strong> {profile.country}</p>
                        </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Facebook