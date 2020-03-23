import React from "react";
import Menu from "../components/Menu.js";
import { IntroTab, Bio, Adoption } from "../components/Tabs.js";

class MainBox extends React.Component {
  state = {
    selected: "IntroTab",
    dogs: [],
    dog: {
      name: "bob",
      age: 19
    },
    dogCounter: 0
  };

  changeSelected = selected => {
    this.setState({
      selected: selected
    });
  };

  componentDidMount() {
    fetch("http://localhost:3003/dogs")
      .then(response => response.json())
      .then(dogs => {
        this.setState({
          dogs: dogs
        });
        this.setState({
          dog: this.state.dogs[this.state.dogCounter]
        });
      });
  }

  pickNextDog = () => {
    this.setState({
      dog: this.state.dogs[this.state.dogCounter + 1],
      dogCounter: this.state.dogCounter + 1
    });
  };

  render() {
    let details;

    switch (this.state.selected) {
      case "IntroTab":
        details = <IntroTab dog={this.state.dog} />;
        break;
      case "Bio":
        details = <Bio dog={this.state.dog} />;
        break;
      case "Adoption":
        details = <Adoption dog={this.state.dog} />;
        break;
      default:
        details = null;
        break;
    }

    return (
      <div>
        <h2>Welcome, {this.props.user.username}!</h2>

        <Menu
          changeSelected={this.changeSelected}
          selected={this.state.selected}
        />
        {details}
        <button onClick={this.pickNextDog}>Swipe Me</button>
      </div>
    );
  }
}

export default MainBox;
