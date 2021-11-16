import React from "react";
import Dashboard from "components/shared/Dashboard/Dashboard";
import Row from "./Row";
import "./Styles.scss";
import headerStyles from "../shared/Header/Header.scss";

export const TableWrapper = ({ companies, children }) => {
  return (
    <Dashboard>
      <div style={{ backgroundColor: "white" }}>
        <table>
          <thead>
            <tr className={headerStyles.header}>
              <th>
                <p>COMPANY NAME</p>
              </th>
              <th>
                <p>STAGE</p>
              </th>
              <th>
                <p>SECTOR</p>
              </th>
              <th>
                <p>INVESTMENT SIZE</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, i) => (
              <Row company={company} key={i} />
            ))}
          </tbody>
        </table>
      </div>
      {children}
    </Dashboard>
  );
};

export default TableWrapper;
