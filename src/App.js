import React, { Component } from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import './App.css';
import MainBox from './containers/MainBox.js'
import SignInBox from './SignInBox'

class App extends Component {
  render() {
    return (
      <Grid centered column={1}>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
        <Grid.Row >
          <Grid.Column width={10}>
            <Segment>
              <SignInBox />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
