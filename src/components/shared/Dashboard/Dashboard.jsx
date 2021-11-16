import React from "react";
import styles from "./Dashboard.scss";

const Dashboard = (props) => {
  return (
    <div className={styles.dashboard}>
      {props.children}
    </div>
  );
};

export default Dashboard;
