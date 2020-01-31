import React, { Component } from 'react';
import './index.css';
import IdCard from "./IdCard";

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
      birth: "1992-07-14",
      picture:"https://randomuser.me/api/portraits/women/44.jpg"
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
      </div>
    );
  }
}

export default App;
