import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const DeleteModal = (props) => {
  const BackdropModal = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
  };

  const OverlayModal = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onYes}>Yes</Button>
          <Button onClick={props.onConfirm}>No</Button>
        </footer>
      </Card>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <BackdropModal onConfirm={props.onConfirm} />,
        document.getElementById("backdropModal")
      )}
      {ReactDOM.createPortal(
        <OverlayModal
          title={props.title}
          message={props.message}
          onYes={props.onYes}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modalOverlay")
      )}
    </>
  );
};

export default DeleteModal;
