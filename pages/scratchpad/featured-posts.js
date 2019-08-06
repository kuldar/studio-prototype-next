// Libraries
import React from 'react'

// Example data
import data from '../../data'

// Components
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Main from '../../components/main'
import PageTitle, { PageTitleLink, PageTitleButton } from '../../components/page-title'
import Scratchpad from '../../components/scratchpad'

// Assets
import PlayIcon from '../../vectors/play-icon'

// Databrowser
const DatabrowserPage = () => {
  return (
    <Layout title="Prisma Studio">
      <Sidebar activeGroup='scratchpad' />
      <Main>
        <PageTitle title="Pro Membership users">
          <PageTitleLink children="Delete" />
          <PageTitleLink children="Export" />
          <PageTitleButton children="Run all" icon={<PlayIcon />} />
        </PageTitle>
        <Scratchpad
          resultExpanded
          queryCode={data.queryCodes[0]}
          tableResult={data.tableResults[0]}
          codeResult={data.codeResults[0]} />
        <Scratchpad
          queryCode={data.queryCodes[1]}
          tableResult={data.tableResults[1]}
          codeResult={data.codeResults[1]}
          resultMode="code"/>
      </Main>
    </Layout>
  )
}

export default DatabrowserPage