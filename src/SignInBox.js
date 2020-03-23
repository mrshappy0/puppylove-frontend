import React, { Component } from "react";
import MainBox from "./containers/MainBox.js";
import { Favorites } from "./Favorites.js";
import SignIn from "./SignIn.js";

export default class SignInBox extends Component {
  state = {
    username: "",
    favorites: [],
    toggleAdoptionPage: false
  };

  signIn = () => {
    if (this.state.username === "" && this.state.toggleAdoptionPage === false) {
      return <SignIn addUsername={this.addUsername} />;
    } else if (this.state.toggleAdoptionPage === false) {
      return (
        <MainBox
          user={this.state}
          changeAdoptionToggle={this.changeAdoptionToggle}
          addDogToFavorites={this.addDogToFavorites}
        />
      );
    } else {
      return <Favorites favorites={this.state.favorites}/>;
    }
  };

  changeAdoptionToggle = () => {
    this.setState({
      toggleAdoptionPage: !this.state.toggleAdoptionPage
    });
  };

  addDogToFavorites = newDog => {
    this.setState({
      favorites: [...this.state.favorites, newDog]
    });
  };

  addUsername = username => {
    this.setState({
      username: username
    });
  };

  render() {
    return <div>{this.signIn()}</div>;
  }
}
