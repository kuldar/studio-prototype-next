// Libraries
import * as React from 'react'
import Head from 'next/head'
import styled, { createGlobalStyle, css } from 'styled-components'

// Fonts
// TODO: Figure out why these don't work
// import 'typeface-open-sans'
// import 'typeface-roboto-mono'

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
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700&display=swap');
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