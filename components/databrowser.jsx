import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

// Assets
import ChevronIcon from '../vectors/chevron-icon'

// Components
import Filters from './filters'
import Pagination from './pagination'

// Databrowser
const Databrowser = ({ tableItems }) => {

  const [isFiltersExpanded, setFiltersExpanded] = useState(false)
  const { name, columns, columnWidths } = tableItems

  return (
    <Wrapper>
      <FiltersContainer>
        <FiltersBar>
          <FiltersButton
            isOpen={isFiltersExpanded}
            onClick={() => setFiltersExpanded(!isFiltersExpanded)}>
              <ChevronIcon />
              2 filters
            </FiltersButton>
          { !isFiltersExpanded && <NavLink>Add a filter</NavLink> }
        </FiltersBar>
        { isFiltersExpanded && <Filters /> }
      </FiltersContainer>

      <Table>
        <Header>
          {columns.map((column, i) =>
            <HeaderCell width={columnWidths[i]}>
              <HeaderCellName>{column}</HeaderCellName>
            </HeaderCell>
          )}
        </Header>

        <Body>
          { tableItems.rows.map(row => (
              <RowContainer>
                <Row>
                  <Cell width={columnWidths[0]}>{row.firstName}</Cell>
                  <Cell width={columnWidths[1]}>{row.lastName}</Cell>
                  <Cell width={columnWidths[2]}><Accent1>{row.isAdmin ? 'true' : 'false'}</Accent1></Cell>
                  <Cell width={columnWidths[3]}><Accent2>{row.age}</Accent2></Cell>
                  <Cell width={columnWidths[4]}>{ row.blog ? <CellModel>Blog</CellModel> : <CellNull>null</CellNull> }</Cell>
                  <Cell width={columnWidths[5]}>
                    <CellModelCount isEmpty={row.posts.length === 0}>{row.posts.length}</CellModelCount>
                    <CellModel>Post</CellModel>
                  </Cell>
                  <Cell width={columnWidths[6]}>{row.createdAt}</Cell>
                </Row>
              </RowContainer>
            )
          )}
        </Body>
      </Table>

      <Pagination />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 1px 4px rgba(0,0,0,0.1);
`

const FiltersContainer = styled.div`
  background-color: ${p => p.theme.colors.gray200};
`

const FiltersBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FiltersButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 28px;
  padding-left: 8px;
  color: ${p => p.theme.main.foreground};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;

  svg {
    transform: rotate(${p => p.isOpen ? 0 : -90}deg);
    transition: opacity 0.1s ease,
                transform 0.1s ease;
    opacity: 0.5;
    margin-right: 6px;
  }

  &:hover {
    cursor: pointer;
    svg { opacity: 1; }
  }
`

const NavLink = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid ${p => transparentize(0.9, p.theme.card.foreground)};
  background-color: transparent;
  padding: 0 10px;
  height: 28px;
  transition: opacity 0.1s ease;
  color: ${p => p.theme.main.foreground};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    cursor: pointer;
    background-color: ${p => transparentize(0.95, p.theme.card.foreground)};
  }
`

// Table
const Table = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.card.background};
`

const Header = styled.div`
  display: flex;
  flex-shrink: 0;
  border-bottom: 1px solid ${p => p.theme.card.border};
`

const HeaderCell = styled.div`
  flex-shrink: 0;
  width: ${p => p.width}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 1;
  padding: 8px 10px;

  &:first-child { padding-left: 16px; }
  &:last-child { padding-right: 16px; }
`

const HeaderCellName = styled.div`
  font-weight: 600;
  color: ${p => p.theme.card.foreground};
`

const Body = styled.div`
  flex: 1;
  overflow: scroll;
`

const RowContainer = styled.div`
  border-bottom: 1px solid ${p => p.theme.card.border};
  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.gray100};
  }
`

const Row = styled.div`
  display: flex;
  color: ${p => p.theme.card.foreground};
`

const Cell = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: ${p => p.width}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  font-family: 'Roboto Mono', monospace;
  line-height: 20px;
  padding: 6px 10px;

  &:first-child { padding-left: 16px; }
  &:last-child { padding-right: 16px; }
`

const CellNull = styled.div`
  opacity: 0.5;
`

const Accent2 = styled.div`
  color: ${p => p.theme.code.accent2};
`

const Accent1 = styled.div`
  color: ${p => p.theme.code.accent1};
`

const CellModelCount = styled.div`
  font-weight: ${p => p.isEmpty ? 400 : 500};
  margin-right: 4px;
  opacity: ${p => p.isEmpty ? 0.5 : 1};
`

const CellModel = styled.div`
  background: ${p => p.theme.card.border};
  border-radius: 3px;
  height: 18px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  font-weight: 500;
`

export default Databrowser