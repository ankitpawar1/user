import React, { useState } from "react";
import ErrorModal from "./components/UI/ErrorModal.js";

import AddUser from "./components/Users/AddUser.js";
import UsersList from "./components/Users/UsersList.js";

function App(props) {
  const [usersList, setUsersList] = useState([]);
  const [userCount, setUserCount] = useState(false);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  const deleteItemHandler = (delId) => {
    setUsersList((prev) => {
      const updatedList = prev.filter((liId) => {
        return liId.id !== delId;
      });
      return updatedList;
    });
  };
  const usercountHandler = () => {
    setUserCount(true);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <h1>{usersList.length}</h1>
      {!userCount && usersList.length === 5 ? (
        <ErrorModal
          title="data"
          message="data add 5"
          onConfirm={usercountHandler}
        />
      ) : (
        ""
      )}
      <UsersList users={usersList} onDeleteItem={deleteItemHandler} />
    </>
  );
}

export default App;
