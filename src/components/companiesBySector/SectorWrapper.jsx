import React from "react";
import Sector from "./Sector";
import styles from "./Sector.scss";
import Header from "components/shared/Header/Header";
import Dashboard from "components/shared/Dashboard/Dashboard";

const SectorWrapper = ({ companies }) => {

  const displayedSectors = ["FINTECH", "INSURETECH", "ROBOADVISORY", "IOT"];

  let sectorsCount = new Map();

  displayedSectors.forEach((sector) => {
    sectorsCount.set(
      sector,
      companies.reduce((count, company) => {
        if (company.sector === null) {
          return count;
        }
        if (company.sector.toUpperCase() === sector) {
          return count + 1;
        } else {
          return count;
        }
      }, 0)
    );
  });

  return (
    <Dashboard>
      <Header header={"COMPANIES BY SECTORS"} />
      <div className={styles.sectorsGrid}>
        {Array.from(sectorsCount).map(([key, value], index) => (
          <div className={styles.sectorWrapper} key={index}>
            <Sector numberOfCompanies={value} sector={key} />
          </div>
        ))}
      </div>
    </Dashboard>
  );
};

export default SectorWrapper;