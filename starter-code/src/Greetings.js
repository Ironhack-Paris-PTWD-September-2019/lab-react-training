// Create a Greetings component with 2 props:

// lang: A string that could be ,"de","en","es","fr"
// children: A text
// Example

// <Greetings lang="de">Ludwig</Greetings>
// <Greetings lang="fr">François</Greetings>

import React, { Component } from "react";

class Greetings extends Component {
    render() {
        var hello = "hello"
        switch (this.props.lang)
            {
                case "de":
                 hello = "hallo"
                  break;
                case "fr":
                  hello = "bonjour"
                  break;
                default:
                  hello = "hello"
              }

      return (
      <div className="ID">
         <div className="info">
            <p lang={this.props.lang}>{hello} {this.props.children}</p>
         </div>
      </div>
      );
    }
  }

  export default Greetings;