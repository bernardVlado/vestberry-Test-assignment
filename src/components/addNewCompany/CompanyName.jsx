import React, { useState } from "react";
import styles from "./Styles.scss";

export const CompanyName = ({ comapanyName, setcomapanyName }) => {
  const [warning, setwarning] = useState(false);
  
  const onChange = (value) => {
    if(value.length <= 2) {
      setwarning(true);
    } else {
      setwarning(false);
    }
    setcomapanyName(value);
  }

  return (
    <label className={styles.labelBase}>
      Company name
      <input
        required
        value={comapanyName}
        onChange={(event) => onChange(event.target.value)}
        className={styles.input}
        type="text"
        minLength="2"
        name="companyName"
        placeholder="Company name"
      />
      {warning && (
        <span className={styles.warning}>
          Company name has to be longer then 2 characters
        </span>
      )}
    </label>
  );
}

export default CompanyName;