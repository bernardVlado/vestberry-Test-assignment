import React from "react";
import styles from "./Header.scss";

const Header = ({ header }) => {
  return (
    <div className={styles.header}>
      <p>{header}</p>
    </div>
  );
};

export default Header;
