import React, { useState } from "react";
import styles from "./Styles.scss";
import Modal from "components/shared/Modal/Modal";
import Form from "./Form";

const AddCompany = ({ onRefetch }) => {
  const [showModal, setModal] = useState(false);

  const onNewCompanyAdded = () => {
    setModal(false);
    onRefetch();
  }

  return (
    <>
      {showModal === true && (
        <Modal oncloseEvent={() => setModal(false)}>
          <Form
            onNewCompanyAddedEvent={() => onNewCompanyAdded()}
          />
        </Modal>
      )}

      <div className={styles.addNewCompany}>
        <button
          className={styles.button}
          onClick={() => {
            setModal(true);
          }}
        >
          Add new Company
        </button>
      </div>
    </>
  );
};

export default AddCompany;
