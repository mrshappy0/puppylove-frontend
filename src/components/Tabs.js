import React from 'react'
import {userData, photo} from '../data.js'
import {Card, Button, Image, Loader} from 'semantic-ui-react'

/*No need to code in here! These are merely presentational components.*/

export const IntroTab = () => (
  <Card fluid>
    <Card.Content textAlign="center">
      <h3>Hi, my name is {userData.name}</h3>
      <h5>A little about me: </h5>
      <p>{userData.description}</p>
      <p>Favorite phrase: {userData.catchphrase}</p>
      <p>Age: {userData.age}</p>
    </Card.Content>
  </Card>
)

export const Bio = () => (
  <Card fluid>
    <Card.Content textAlign="center">
      <h2>{photo.title}</h2>
      <Image src={photo.url}/>
    </Card.Content>
  </Card>
)

export const Adoption = () => (
  <Card fluid>
  <Card.Content textAlign="center">
    <h2>{photo.title}</h2>
    <Image src={photo.url}/>
  </Card.Content>
</Card>
)