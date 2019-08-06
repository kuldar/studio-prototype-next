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
import PlusIcon from '../../vectors/plus-icon-small'
import DotsIcon from '../../vectors/dots-icon'

// Scratchpad
const ScratchpadPage = () => {
  return (
    <Layout title="Prisma Studio">
      <Sidebar activeGroup='scratchpad' />
      <Main>
        <PageTitle title="Pro Membership users">
          <PageTitleLink children={<DotsIcon/>} />
          <PageTitleButton><PlusIcon /> New User</PageTitleButton>
        </PageTitle>
        <Scratchpad
          resultExpanded
          queryCode=""
          tableResult={data.tableResults[0]}
          codeResult={data.codeResults[0]} />
      </Main>
    </Layout>
  )
}

export default ScratchpadPage