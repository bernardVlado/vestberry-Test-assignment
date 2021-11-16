import React from "react";
import styles from "./Sector.scss";
import { FaChartPie, FaCogs, FaRegChartBar } from "react-icons/fa";
import { MdOutlineFileCopy } from "react-icons/md"

const Sector = (props) => {
  const sectors = new Map([
    ["FINTECH", <MdOutlineFileCopy />],
    ["INSURETECH", <FaChartPie/>],
    ["ROBOADVISORY", <FaCogs />],
    ["IOT", <FaRegChartBar/>],
  ]);

  return (
    <div className={styles.sector}>
      <span className={styles.numberOfCompanies}>
        {props.numberOfCompanies}
      </span>
      <span className={styles.sectorName}>{props.sector}</span>
      <span className={styles.icon}>{sectors.get(props.sector)}</span>
    </div>
  );
};

export default Sector;