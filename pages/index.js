// Libraries
import React from 'react'

// Example data
import data from '../data'

// Components
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import Scratchpad from '../components/scratchpad'

const IndexPage = () => {
  return (
    <Layout title="Prisma Studio">
      <Sidebar />
      <Main>
        <Scratchpad
          queryCode={data.queryCodes[0]}
          tableResult={data.tableResults[0]}
          codeResult={data.codeResults[0]} />
      </Main>
    </Layout>
  )
}

export default IndexPage