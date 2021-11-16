import React from 'react'
import styles from "./Styles.scss";

const InvestmentSize = ({ investmentSize, setinvestmentSize }) => {

  const onChange = (value) => {
    setinvestmentSize(value.replace(/[^\d]/, ""));
  }

  return (
    <label className={styles.label}>
      Investment size
      <input
        required
        className={styles.inputInvestmentSize}
        value={investmentSize}
        onChange={(event) => onChange(event.target.value)}
        type="number"
        name="investmentSize"
        placeholder="Enter amount"
        min="1"
      />
      <span className={styles.investmentSizePostfix}>EUR</span>
    </label>
  );
};

export default InvestmentSize;