import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Read } from "./Read";

export const Crud = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    axios.post(`https://64e302a0bac46e480e780350.mockapi.io/fakeData`, {
      firstName,
      lastName,
      checkbox,
    });
    alert("Data is posted");
    window.location.reload();
  };

  return (
    <div className="crudMain">
      <br />
      <h1>This is to perform React CRUD operations.</h1>
      <Form className="create-form">
        <Form.Field>
          <label> First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label> Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Submit
        </Button>
      </Form>
      <br />
      <br />
      <Read />
    </div>
  );
};
