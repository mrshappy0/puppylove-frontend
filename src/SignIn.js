import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const SignIn = ({ addUsername }) => {

  function handleSubmit(e) {
    // e.preventDefault();
    console.log(e.target[0].value)
    let g = e.target[0].value 
    console.log(g)
    addUsername(e.target[0].value)

  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Username</label>
        <input placeholder="Username" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default SignIn;
