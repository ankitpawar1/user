import React, { useState } from "react";
import DeleteModal from "../UI/DeleteModal";

const UserDelete = (props) => {
  const [isValid, setIsValid] = useState(false);
  const deleteHandler = () => {
    props.onDelete(props.id);
    // console.log(props.id);
  };
  const popHandler = () => {
    setIsValid(true);
  };
  const cancelHandler = () => {
    setIsValid(false);
  };

  return (
    <>
      {isValid && (
        <DeleteModal
          title="Delete Item"
          message="Are you sure want to delete"
          onYes={deleteHandler}
          onConfirm={cancelHandler}
        />
      )}
      <li onClick={popHandler}>{props.children}</li>
    </>
  );
};

export default UserDelete;
