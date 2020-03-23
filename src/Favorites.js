import React from "react";
import { Image, Item } from "semantic-ui-react";
const paragraph = <Image src="/images/wireframe/short-paragraph.png" />;

export const Favorites = ({ favorites }) => {
  return (
    <div>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={favorites[0].picture} />

          <Item.Content>
            <Item.Header>{favorites[0].name}</Item.Header>
            <Item.Meta>
            </Item.Meta>
            <Item.Description>{favorites[0].bio}</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
};
