// Libraries
import React from 'react'

// Components
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Main from '../../components/main'
import Databrowser from '../../components/databrowser'
import PageTitle, { PageTitleLink, PageTitleButton } from '../../components/page-title'

// Assets
import DotsIcon from '../../vectors/dots-icon'
import PlusIcon from '../../vectors/plus-icon-small'

// Data
import data from '../../data'

// Databrowser
const DatabrowserPage = () => {
  return (
    <Layout title="Prisma Studio">
      <Sidebar />
      <Main>
      <PageTitle title="User" secondTitle="All">
          <PageTitleLink children={<DotsIcon/>} />
          <PageTitleButton><PlusIcon /> Add User</PageTitleButton>
        </PageTitle>
        <Databrowser tableItems={data.tableResults[0]} />
      </Main>
    </Layout>
  )
}

export default DatabrowserPage