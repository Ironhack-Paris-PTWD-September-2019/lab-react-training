import React, { Component } from 'react';
import IdCard from './IdCard.js'
import Greetings from './Greetings.js'
import Random from './Random.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random numbers</h1>
        <Random minNumber={1} maxNumber={125}/>
        <Random minNumber={1000} maxNumber={1500}/>
      </div>
    );
  }
}

export default App;
