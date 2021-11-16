import React from 'react'
import {GET_COMPANIES} from './Page.queries'
import {useQuery} from '@apollo/client'
import SectorWrapper from "components/companiesBySector/SectorWrapper";
import InvestmentSizeWrapper from "components/companiesByInvestmentSize/InvestmentSizeWrapper";
import TableWrapper from 'components/companiesTable/TableWrapper';
import AddCompany from "components/addNewCompany/AddCompany";
import styles from "App.scss";

export const Page = () => {
  const {
    loading,
    error,
    data: companyData,
    refetch,
  } = useQuery(GET_COMPANIES);

  if (loading) {
    return <span>Loading data...</span>
  }

  if (error) {
    return (
      <span>
        <pre>
          {JSON.stringify(error, null, 2)}
        </pre>
      </span>
    )
  }

  const {companies} = companyData

  return (
    <div className={styles.page}>
      <SectorWrapper companies={companies} />
      <InvestmentSizeWrapper companies={companies} />
      <TableWrapper companies={companies}>
        <AddCompany onRefetch={() => refetch()} />
      </TableWrapper>
    </div>
  );
}

export default Page
