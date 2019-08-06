// Libraries
import * as React from 'react'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'

// Locals
import { documentStyles } from '../styles/global'
import themes from '../styles/themes'
import Tabbar from '../components/tabbar'

// Layout
const Layout = ({ children, title = 'Prisma Studio' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <GlobalStyle />
    <Wrapper>
      <Tabbar />
      <Main>{children}</Main>
    </Wrapper>
  </div>
)

// Global Styles
const GlobalStyle = createGlobalStyle`
  ${documentStyles}
  ${themes[0].code.theme}
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  /* background: red; */
`

const Main = styled.div`
  display: flex;
  flex: 1;
`

export default Layout