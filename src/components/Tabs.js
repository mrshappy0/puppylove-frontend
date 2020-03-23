import React from "react";
import { userData, photo } from "../data.js";
import { Card, Button, Image, Loader } from "semantic-ui-react";

/*No need to code in here! These are merely presentational components.*/

export const IntroTab = ({ dog }) => (
  <Card fluid>
    <Card.Content textAlign="center">
      <h3>Hi, my name is {dog.name}</h3>
      {/* <p>Am I Adoptable: {dog.status}</p> */}
      <h2>Photo Title:</h2>
      <Image src={dog.picture} />
    </Card.Content>
  </Card>
);

export const Bio = ({ dog }) => (
  <Card fluid>
    <Card.Content textAlign="center">
      <h5>A little about me: </h5>
      <h2>{photo.title}</h2>
      <p>Breed: {dog.breed}</p>
      <p>{dog.bio}</p>
      <ul>
        <li>Friendly with Kids: {(dog.friendly_w_kids == true) ? "Yes" : "No"}</li>
        <li>Energetic: {(dog.energetic == true) ? "Yes" : "No"}</li>
        <li>Fixed: {(dog.fixed == true) ? "Yes" : "No"}</li>
        <li>Friendly with Cats: {(dog.cats == true) ? "Yes" : "No"}</li>
        <li>Friendly with Dogs: {(dog.dogs == true) ? "Yes" : "No"}</li>
      </ul>
    </Card.Content>
  </Card>
);

export const Adoption = ({ dog }) => (
  <Card fluid>
    <Card.Content textAlign="center">
      {/* <h2>{photo.title}</h2> */}
      {/* <Image src={photo.url}/> */}
      <button>Adopt Me!</button>
      <button>Add to Favorites!</button>
    </Card.Content>
  </Card>
);
