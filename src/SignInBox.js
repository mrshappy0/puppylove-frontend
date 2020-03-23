import React, { Component } from "react";
import MainBox from "./containers/MainBox.js";
import { Favorites } from "./Favorites.js"
import SignIn from "./SignIn.js"

export default class SignInBox extends Component {
  state = {
    username: "",
    favorites: []
  };

  signIn = () => {
      if (this.state.username === ""){
          return <SignIn addUsername={this.addUsername}/>
      } else {
          return <MainBox user={this.state} />
          return <Favorites favorites={this.state.favorites} />
      }
  }

  addUsername = (username) => {
      this.setState({
          username: username 
      })
  }

  render() {
    return (
      <div>
          {this.signIn()}
      </div>
    );
  }
}
