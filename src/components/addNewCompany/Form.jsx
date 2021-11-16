import React, { useState } from "react";
import styles from "./Styles.scss";
import { useMutation } from "@apollo/client";
import { ADD_COMPANY } from "../../Page.queries";
import CompanyName from "./CompanyName";
import Select from "./Select";
import InvestmentSize from "./InvestmentSize";

const Form = ({ onNewCompanyAddedEvent }) => {
  const [comapanyName, setcomapanyName] = useState("");
  const [selectedSector, setselectedSector] = useState("");
  const [selectedStage, setselectedStage] = useState("");
  const [investmentSize, setinvestmentSize] = useState("");
  const [addCompany, { data, loading, error }] = useMutation(ADD_COMPANY);

  if (loading) {
    return <span>Loading data...</span>;
  }

  if (error) {
    return (
      <span>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </span>
    );
  }

  const sectors = ["Fintech", "IOT", "Roboadvisory", "Insuretech"];
  const stages = [
    "Idea",
    "Prototype",
    "Seed",
    "Series A",
    "Series B",
    "Series C",
  ];

  const isFormFilled = () => {
    return (
      comapanyName !== "" &&
      selectedSector !== "" &&
      selectedStage !== "" &&
      investmentSize
    );
  }

  const createNewCompany = (event) => {
    event.preventDefault();
    addCompany({
      variables: {
        name: comapanyName,
        stage: selectedStage,
        sector: selectedSector,
        investmentSize: Number(investmentSize),
      },
    }).then(() => {
      onNewCompanyAddedEvent();
    });
    console.log("aoasoaso");
  };

  return (
    <div className={styles.form}>
      <p className={styles.formTitle}>ADD NEW COMPANY</p>
      <form>
        <CompanyName
          comapanyName={comapanyName}
          setcomapanyName={(value) => setcomapanyName(value)}
        />

        <Select
          label={"Sector"}
          placeholder={"Select sector from the list"}
          values={sectors}
          selected={selectedSector}
          setselected={(value) => setselectedSector(value)}
        />

        <Select
          label={"Stage"}
          placeholder={"Select stage from the list"}
          values={stages}
          selected={selectedStage}
          setselected={(value) => setselectedStage(value)}
        />

        <InvestmentSize
          investmentSize={investmentSize}
          setinvestmentSize={(value) => setinvestmentSize(value)}
        />

        <div className={styles.buttonWrapper}>
          <button
            className={
              isFormFilled() ? styles.buttonFilled : styles.buttonFilledDisabled
            }
            onClick={(e) => createNewCompany(e)}
          >
            Add new company
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
