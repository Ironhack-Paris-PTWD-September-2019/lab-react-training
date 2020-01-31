import React, { Component } from 'react';
import './index.css';
import IdCard from "./IdCard";
import Greetings from "./Greetings";
import Random from "./Random";

class App extends Component {
  state = {
    userA : {
      firstName: 'John',
      lastName:'Doe',
      gender:'male',
      height: 178,
      birth: "1992-07-14",
      picture:"https://randomuser.me/api/portraits/men/44.jpg"
    },

    userB : {
      firstName: 'Obrien',
      lastName:'Delores',
      gender:'female',
      height: 172,
      birth: "1988-05-11",
      picture:"https://randomuser.me/api/portraits/women/44.jpg"
    },

    randomA : {
      min: 1,
      max: 6
    },

    randomB : {
      min: 1,
      max: 100
    } 
  }
 
  render() {
 

    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <IdCard 
          firstName={this.state.userA.firstName} 
          lastName={this.state.userA.lastName}
          gender={this.state.userA.gender}
          height={this.state.userA.height}
          birth={this.state.userA.birth}
          picture={this.state.userA.picture}
        />

        <IdCard 
          firstName={this.state.userB.firstName} 
          lastName={this.state.userB.lastName}
          gender={this.state.userB.gender}
          height={this.state.userB.height}
          birth={this.state.userB.birth}
          picture={this.state.userB.picture}
        />

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={this.state.randomA.min} max={this.state.randomA.max} />
        <Random min={this.state.randomB.min} max={this.state.randomB.max} />
      </div>
    );
  }
}

export default App;
