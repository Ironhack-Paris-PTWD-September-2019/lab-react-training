import React, { Component } from 'react';
import IdCard,{} from './IdCard.js';
import Greetings,{} from './Greetings.js'; 
import Random,{} from './Random.js';
import Boxcolor,{} from './Boxcolor.js';

class App extends Component {
render(){
    return (
      <fragment>
      <div className="App">
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
      </div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <Boxcolor r={255} g={0} b={0} />
      <Boxcolor r={128} g={255} b={0} />

      </fragment>
    );
  }
}
export default App;
