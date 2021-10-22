import React, { useState } from "react";

import AddUser from "./components/Users/AddUser.js";
import UsersList from "./components/Users/UsersList.js";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  const count = usersList.length;
  console.log(count);

  const deleteItemHandler = (delId) => {
    setUsersList((prev) => {
      const updatedList = prev.filter((liId) => {
        return liId.id !== delId;
      });
      return updatedList;
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList
        users={usersList}
        userCount={count}
        onDeleteItem={deleteItemHandler}
      />
    </>
  );
}

export default App;
