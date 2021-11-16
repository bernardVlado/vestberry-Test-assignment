import React from 'react';
import styles from "./Styles.scss";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Select = ({ label, placeholder, values, selected, setselected }) => {
  return (
    <label
      className={styles.label}
    >
      {label}
      <select
        required
        name={label}
        id=""
        className={styles.input}
        value={selected}
        onChange={(event) => setselected(event.target.value)}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {values.map((value, i) => (
          <option value={value} key={i}>
            {value}
          </option>
        ))}
      </select>
      <RiArrowDropDownLine
        className={styles.icon}
      />
    </label>
  );
};

export default Select;