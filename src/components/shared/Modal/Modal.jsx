import React from "react";
import styles from "./Modal.scss";

const Modal = ({ oncloseEvent, children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={() => oncloseEvent()}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;