import React, { useState } from "react";

import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal.js";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [popUp, setPopUp] = useState();
  const [isValid, setIsValid] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();
    // const userNameRef = nameRef.current.value;
    // const userAgeRef = ageRef.current.value;
    // console.log(nameRef.current.value);
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setPopUp({ title: "Name", message: "Please enter valid Name & age" });
      setIsValid(false);
      return;
    }
    if (+enteredAge < 1) {
      setPopUp({ title: "Age", message: "Please enter Valid Age Above 0" });
      setIsValid(false);
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    // props.onAddUser(userNameRef, userAgeRef);

    setEnteredUsername("");
    setEnteredAge("");
    // nameRef.current.value = "";
    // ageRef.current.value = "";
  };

  const usernameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setIsValid(true);
    setEnteredAge(event.target.value);
  };
  const backdropHandler = () => {
    setPopUp(null);
  };

  return (
    <>
      {popUp && (
        <ErrorModal
          title={popUp.title}
          message={popUp.message}
          onConfirm={backdropHandler}
        />
      )}
      <Card
        className={`${classes.input} ${!isValid ? `${classes.invalid}` : ""}`}
      >
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
