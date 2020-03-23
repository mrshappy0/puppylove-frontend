import React from "react";
import Menu from "../components/Menu.js";
import { IntroTab, Bio, Adoption } from "../components/Tabs.js";

class MainBox extends React.Component {
  state = {
    selected: "IntroTab"
  };

  changeSelected = selected => {
    this.setState({
      selected: selected
    });
  };

  render() {

    let details;

    switch (this.state.selected) {
      case "IntroTab":
        details = <IntroTab />;
        break;
      case "Bio":
        details = <Bio />;
        break;
      case "Adoption":
        details = <Adoption />;
        break;
      default:
        details = null;
        break;
    }

    return (
      <div>
        <h2>Welcome, {this.props.user.username}!</h2>
        <Menu changeSelected={this.changeSelected} selected={this.state.selected}/>
        {details}
      </div>
    );
  }
}

export default MainBox;
