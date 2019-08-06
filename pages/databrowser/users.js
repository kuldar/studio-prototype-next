// Libraries
import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

// Example data
import data from '../../data'

// Components
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Main from '../../components/main'
import Scratchpad from '../../components/scratchpad'

// Assets
import PlusIcon from '../../vectors/plus-icon-small'

// Databrowser
const DatabrowserPage = () => {
  return (
    <Layout title="Prisma Studio">
      <Sidebar activeGroup='scratchpad' />
      <Main>
        <Top>
          <Title>User</Title>
          <Nav>
            <Link>Delete</Link>
            <Link>Add a record</Link>
            <Button>
              <PlusIcon /><span>New User</span>
            </Button>
          </Nav>
        </Top>
        <Scratchpad
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

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Title = styled.div`
  color: ${p => p.theme.main.foreground};
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
`

const Link = styled.div`
  transition: opacity 0.1s ease;
  color: ${p => p.theme.main.foreground};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  opacity: 0.5;
  padding: 4px 8px;
  margin-right: 8px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 4px;
  flex-shrink: 0;
  transition: background-color 0.1s ease;
  height: 28px;
  color: white;
  background-color: ${p => p.theme.main.success};

  &:hover {
    cursor: pointer;
    background-color: ${p => darken(0.1, p.theme.main.success)};
  }

  span {
    color: white;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
  }

  svg {
    display: block;
    margin-right: 4px;
  }
`

export default DatabrowserPage