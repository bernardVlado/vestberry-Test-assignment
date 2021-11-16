import React from "react";
import "./Styles.scss";

function formatInvestmentSize(investment, postfix = " EUR") {
  return investment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + postfix;
}

const Row = ({ company }) => {
  return (
    <tr>
      <td>{company.name}</td>
      <td>{company.stage}</td>
      <td>{company.sector}</td>
      <td>{formatInvestmentSize(company.investmentSize ?? 0)}</td>
    </tr>
  );
};

export default Row;

//