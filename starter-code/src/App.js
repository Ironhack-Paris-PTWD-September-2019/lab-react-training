import React, { Component } from 'react';
import IdCard from './IdCard.js';
import Greetings from './Greetings.js';
import Random from './Random.js';
import BoxColor from './BoxColor.js';
import CreditCard from './CreditCard.js'
import "./App.css"

class App extends Component {
  state = {
    userA: {
      birth: new Date("1992-07-14")
    },
    userB: {
      birth: new Date("1988-05-11")
    }
  };
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <IdCard className="IdCard"
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={this.state.userA.birth.toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          alt="Doe picture"
        />

        <IdCard className="IdCard"
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={this.state.userB.birth.toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Delores picture"
        />

        <h1>Greetings</h1>
        <Greetings lang="fr">John Doe</Greetings>
        {/* TODO: Use the Greetings component */}

        <h1>Random value</h1>
        <Random min={1} max={6}/>

        <h1>Box Color</h1>
        <BoxColor r={130} g={0} b={0} />

        <h1>Credit Card</h1>
        <CreditCard 
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />
        <CreditCard 
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard 
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
      </div>
    );
  }
}

export default App;
