import React from "react";
// import { userData, photo } from "../data.js";
import { Card, Button, Image, Loader } from "semantic-ui-react";

/*No need to code in here! These are merely presentational components.*/

export const IntroTab = ({ dog }) => (
  <Card fluid>
    <Card.Content textAlign="center">
      <h3>Hi, my name is {dog.name}</h3>
      <p>Am I Adoptable: Yes</p>
      <Image src={dog.picture} />
    </Card.Content>
  </Card>
);

export const Bio = ({ dog }) => (
  <Card fluid>
    <Card.Content textAlign="center">
      <h5>A little about me: </h5>
      {/* <h2>{photo.title}</h2> */}
      <p>Breed: {dog.breed}</p>
      <p>{dog.bio}</p>
      <ul>
        <li>
          Friendly with Kids: {dog.friendly_w_kids === true ? "Yes" : "No"}
        </li>
        <li>Energetic: {dog.energetic === true ? "Yes" : "No"}</li>
        <li>Fixed: {dog.fixed === true ? "Yes" : "No"}</li>
        <li>Friendly with Cats: {dog.cats === true ? "Yes" : "No"}</li>
        <li>Friendly with Dogs: {dog.dogs === true ? "Yes" : "No"}</li>
      </ul>
    </Card.Content>
  </Card>
);

export const Adoption = (props) => {
  const { dog } = props;
  const { changeAdoptionToggle } = props;
  const { addDogToFavorites } = props;

  function handleClick(){
    changeAdoptionToggle()
    addDogToFavorites(dog)
  }
  return (
  <Card fluid>
    <Card.Content textAlign="center">
      <Button animated="fade" onClick={handleClick}>
        <Button.Content visible>Adopt Me!</Button.Content>
        <Button.Content hidden>:)</Button.Content>
      </Button>
    </Card.Content>
  </Card>
  )
};
