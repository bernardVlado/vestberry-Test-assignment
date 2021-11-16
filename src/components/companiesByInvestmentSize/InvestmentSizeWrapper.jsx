import React from "react";
import Header from "components/shared/Header/Header";
import Dashboard from "components/shared/Dashboard/Dashboard";
import Chart from "components/companiesByInvestmentSize/Chart";
import ListOfCompanies from "./ListOfCompanies";
import styles from "./Styles.scss";

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

const InvestmentSizeWrapper = ({ companies }) => {

  const totalInvestment = companies.reduce((acc, company) => {
    return acc + company.investmentSize;
  }, 0);

  const data = companies.map((company) => {
    return {
      value: company.investmentSize / totalInvestment,
      color: generateRandomColor(),
      name: company.name,
    };
  });

  return (
    <Dashboard>
      <Header header={"COMPANIES BY INVESTMENT SIZE"} />
      <div className={styles.investmentSizeWrapper}>
        <Chart data={data} />
        <ListOfCompanies data={data} />
      </div>
    </Dashboard>
  );
};

export default InvestmentSizeWrapper;
