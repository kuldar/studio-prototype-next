// Libraries
import React from 'react'

// Components
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Main from '../../components/main'

// Databrowser
const DatabrowserPage = () => {
  return (
    <Layout title="Prisma Studio">
      <Sidebar />
      <Main />
    </Layout>
  )
}

export default DatabrowserPage