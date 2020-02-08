import React, { Component } from 'react';
import './index.css';
import IdCard from "./IdCard";
import Greetings from "./Greetings";
import Random from "./Random";
import BoxColor from "./BoxColor";
import CreditCard from "./CreditCard";
import Rating from "./Rating";
import moment from 'moment';
import CreditCard from "./DriverCard";

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
  

  render(){
 
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <IdCard 
          firstName={this.state.userA.firstName} 
          lastName={this.state.userA.lastName}
          gender={this.state.userA.gender}
          height={this.state.userA.height}
          birth={moment(this.state.userA.birth).format('ddd MMM do YYYY')}
          picture={this.state.userA.picture}
        />

        <IdCard 
          firstName={this.state.userB.firstName} 
          lastName={this.state.userB.lastName}
          gender={this.state.userB.gender}
          height={this.state.userB.height}
          birth={moment(this.state.userB.birth).format('ddd MMM do YYYY')}
          picture={this.state.userB.picture}
        />

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={this.state.randomA.min} max={this.state.randomA.max} aleatoire={this.aleatoire} /> 
        <Random min={this.state.randomB.min} max={this.state.randomB.max} aleatoire={this.aleatoire}/>

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} hex="ff0000"/>
        <BoxColor r={128} g={255} b={0} hex="80ff00"/>

        <h1>CreditCard</h1>
        <div className="creditCardBox">
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

        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>


        <DriverCard 
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
        <DriverCard 
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />

      </div>
    );
  }
}

export default App;

