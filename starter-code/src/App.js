import React, { Component } from 'react';
import moment from 'moment';
import IdCard from './IdCard.js';
import Greetings from './Greetings.js';
import Random from './Random.js';
import BoxColor from './BoxColor.js';
import CreditCard from './CreditCard.js';
import Rating from './Rating.js';
import DriverCard from './DriverCard.js';
import LikeButton from './LikeButton.js';
import ClickablePicture from './ClickablePicture.js';
import Dice from './Dice.js';
import Carousel from './Carousel.js';
import NumbersTable from './NumbersTable.js';
import Facebook from './Facebook.js'
import "./App.css"

class App extends Component {

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
          birth={moment(new Date("1992-07-14")).format("dddd MMM Do YYYY")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          alt="Doe picture"
        />

        <IdCard className="IdCard"
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={moment(new Date("1988-05-11")).format("dddd MMM Do YYYY")}
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

          <Rating>4.6</Rating>

          <h2>Driver Card</h2>

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
              rating={1}
              img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
              car={{
                model: "Audi A3",
                licensePlate: "BE33ER"
            }} />

            <LikeButton/>
            <ClickablePicture
                img="/img/persons/maxence.png"
                imgClicked="/img/persons/maxence-glasses.png" />
            
            <Dice></Dice>

            <h2>Carousel</h2>

            <Carousel
              imgs={["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg","https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"]} />
            
            <h2>Numbers Table</h2>
            <NumbersTable limit={40}/>

            <h2>Facebook</h2>
            <Facebook/>
      </div>
    );
  }
}

export default App;
