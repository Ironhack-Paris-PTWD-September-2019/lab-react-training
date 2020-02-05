import React, { Component } from 'react';
import IdCard from "./IdCard";
import Greetings from "./Greetings"
import Random from "./Random"
import BoxColor from "./BoxColor"
import moment from "moment";

class App extends Component {
  state = {
    userA: {
      lastName:'Doe',
      firstName:'John',
      gender:'male',
      height:178,
      birth:new Date("1992-07-14"),
      avatar:"https://randomuser.me/api/portraits/men/44.jpg"
    },
    userB: {
      lastName:'Delores ',
      firstName:'Obrien',
      gender:'female',
      height:172,
      birth:new Date("1988-05-11"),
      avatar:"https://randomuser.me/api/portraits/women/44.jpg"
    
    }

  }

  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
       <IdCard avatar={this.state.userA.avatar} firstName={this.state.userA.firstName} lastName={this.state.userA.lastName} gender={this.state.userA.gender} height= {this.state.userA.height} birth= {moment(this.state.userA.birth).format('ddd MMM Do YYYY')}/>
       <IdCard avatar={this.state.userB.avatar} firstName={this.state.userB.firstName} lastName={this.state.userB.lastName} gender={this.state.userB.gender} height= {this.state.userA.height} birth= {moment(this.state.userB.birth).format('ddd MMM Do YYYY')}/>
       

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0}/>
        <BoxColor r={128} g={255} b={0}/>
      
      </div>
    );
  }
}

export default App;
