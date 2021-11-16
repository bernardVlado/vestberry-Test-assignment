import React from "react";
import styles from "./Styles.scss";

const ListOfCompanies = ({ data }) => {
  return (
    <div className={styles.companiesGrid}>
      {data.map((company, i) => {
        return (
          <div className={styles.companyRow} key={i}>
            <div
              className={styles.circle}
              style={{ background: company.color}}
            ></div>
            <span key={i}>{company.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfCompanies;
