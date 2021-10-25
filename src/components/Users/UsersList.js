import React from "react";

import Card from "../UI/Card.js";
import UserDelete from "./UserDelete.js";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <>
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <UserDelete
              id={user.id}
              key={user.id}
              onDelete={props.onDeleteItem}
            >
              {user.name} ({user.age} years old)
            </UserDelete>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
