import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { transparentize, darken } from 'polished'
import Prism from 'prismjs'

// Assets
import ChevronIcon from '../vectors/chevron-icon'
import PlayIcon from '../vectors/play-icon'
import DeleteIcon from '../vectors/delete-icon'

import TypeIconId from '../vectors/type-icon-id'
import TypeIconString from '../vectors/type-icon-string'
import TypeIconBoolean from '../vectors/type-icon-boolean'
import TypeIconArray from '../vectors/type-icon-array'
import TypeIconDatetime from '../vectors/type-icon-datetime'
import TypeIconObject from '../vectors/type-icon-object'

// require('prismjs/components/prism-graphql')


const Scratchpad = ({ queryCode, tableResult, codeResult, resultMode='table', resultExpanded=false }) => {

  const [isDeleted, setIsDeleted] = useState(false)
  const {name, columns, columnWidths} = tableResult
  const [mode, setMode] = useState(resultMode)
  const [isResultExpanded, setResultExpanded] = useState(resultExpanded)
  const [expandedRows, setExpandedRows] = useState([])

  const handleResultsToggleClick = () => {
    setResultExpanded(!isResultExpanded)
  }

  const handleRunClick = () => {
    setResultExpanded(true)
  }

  const handleFormatChange = (value) => {
    setMode(value)
    setResultExpanded(true)
  }

  const handleRowClick = (rowId) => {
    expandedRows.includes(rowId)
      ? setExpandedRows(expandedRows.filter(id => id !== rowId))
      : setExpandedRows([...expandedRows, rowId])
  }

  useEffect(() => Prism.highlightAll())

  return (
    !isDeleted &&
    <Wrapper>
      <CodeContainer>
        <LineNumbers>{ queryCode.split(/\r\n|\r|\n/).map((_, i) => <Line>{i + 1}</Line>) }</LineNumbers>
        <Pre><Code contentEditable className="language-js">{queryCode}</Code></Pre>
      </CodeContainer>

      <ActionBar>
        <Name isOpen={isResultExpanded} onClick={() => handleResultsToggleClick()}><ChevronIcon /> {name}</Name>
        <Nav>
          <NavLink onClick={() => setIsDeleted(true)}>
            <NavLinkIcon><DeleteIcon /></NavLinkIcon>
          </NavLink>
          <NavLink>
            <NavLinkLabel>Open in databrowser</NavLinkLabel>
          </NavLink>

          <FormatSelectContainer>
            <FormatSelect onChange={({ target: { value } }) => handleFormatChange(value)} value={mode}>
              <option value="table">Table</option>
              <option value="code">JSON</option>
            </FormatSelect>
            <FormatSelectLabel>{mode === 'table' ? "Table" : "JSON"}</FormatSelectLabel>
          </FormatSelectContainer>

          <RunButton onClick={() => handleRunClick()}>
            <PlayIcon />
          </RunButton>
        </Nav>
      </ActionBar>

      { isResultExpanded && (mode === 'table') &&
        <Table>
          <Header>
            {columns.map((column, i) =>
              <HeaderCell width={columnWidths[i]}>
                <HeaderCellName>{column}</HeaderCellName>
              </HeaderCell>
            )}
          </Header>

          <Body>
            { tableResult.rows.map(row => (
                <RowContainer isExpanded={expandedRows.includes(row.id)} onClick={() => handleRowClick(row.id)}>
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
                  { expandedRows.includes(row.id) &&
                    <RowExpansion onClick={e => e.stopPropagation()}>
                      { codeResult.map(codeRow => renderCodeRow(codeRow)) }
                    </RowExpansion>
                  }
                </RowContainer>
              )
            )}
          </Body>
        </Table>
      }

      { isResultExpanded && (mode === 'code') &&
        <CodeResult onClick={e => e.stopPropagation()}>
          { codeResult.map(codeRow => renderCodeRow(codeRow)) }
        </CodeResult>
      }

    </Wrapper>
  )
}

const renderCodeRow = row => ['id', 'string', 'boolean', 'datetime'].includes(row.type) ? renderFlatCodeRow(row) : renderNestedCodeRow(row)
const renderFlatCodeRow = row => <CodeRow type={row.type} label={row.label} value={row.value} />
const renderNestedCodeRow = row => <CodeRow type={row.type} label={row.label} value={row.value} preview={row.preview} children={row.children.map(r => renderCodeRow(r))} />

const CodeRow = ({ type, label, value, preview, count, children, defaultIsExpanded=false }) => {
  let typeIcon

  const [isExpanded, setIsExpanded] = useState(defaultIsExpanded)

  switch (type) {
    case ('id'): typeIcon = <TypeIconId />; break
    case ('string'): typeIcon = <TypeIconString />; break
    case ('boolean'): typeIcon = <TypeIconBoolean />; break
    case ('object'): typeIcon = <TypeIconObject />; break
    case ('array'): typeIcon = <TypeIconArray />; break
    case ('datetime'): typeIcon = <TypeIconDatetime />; break
    default: break
  }

  return (
    <>
      <CodeRowContainer type={type} onClick={() => setIsExpanded(!isExpanded)}>
        <CodeRowToggle isExpanded={isExpanded}>{['object', 'array'].includes(type) && <ChevronIcon />}</CodeRowToggle>
        <CodeRowTypeIcon>{typeIcon}</CodeRowTypeIcon>
        { label && <CodeRowLabel>{label}:</CodeRowLabel> }
        { (type === 'array') && <span>{count}</span> }
        <CodeRowValue type={type}>{value}</CodeRowValue>
        { preview && !isExpanded && <CodeRowPreview>{preview}</CodeRowPreview> }
      </CodeRowContainer>

      { children && isExpanded && <div style={{paddingLeft: 16}}>{children}</div> }
    </>
  )
}

const CodeRowContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1px 0;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    ${ p => ['object', 'array'].includes(p.type) && `
      svg { opacity: 1; }
      cursor: pointer;
    `}
  }

  &:hover { cursor: ${ p => ['object', 'array'].includes(p.type) ? 'pointer' : 'default' }; }
`

const CodeRowToggle = styled.div`
  width: 16px;
  color: ${p => p.theme.code.foreground};
  flex-shrink: 0;

  svg {
    display: block;
    opacity: 0.5;
    transform: rotate(${p => p.isExpanded ? 0 : -90}deg);
  }
`

const CodeRowLabel = styled.div`
  margin-right: 4px;
`

const CodeRowValue = styled.div`
  color: ${
    p => ['id', 'string', 'datetime'].includes(p.type)
      ? p.theme.code.accent2
      : p.theme.code.accent1
  };
  margin-right: 4px;
`

const CodeRowTypeIcon = styled.div`
  margin-right: 6px;
  svg { display: block; }
  .foreground { fill: ${p => p.theme.code.background}; }
  .background { fill: ${p => transparentize(0.5, p.theme.code.foreground)}; }
`

const CodeRowPreview = styled.div`
  opacity: 0.5;
`

//////////////

const Wrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 1px 4px rgba(0,0,0,0.1);
`

const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.gray200};
`

const Name = styled.div`
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

const Nav = styled.div`
  display: flex;
  align-items: center;
`

const NavLinkLabel = styled.div`
  transition: opacity 0.1s ease;
  color: ${p => p.theme.main.foreground};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  opacity: 0.5;
`

const NavLinkIcon = styled.div`
  transition: opacity 0.1s ease;
  color: ${p => p.theme.main.foreground};
  opacity: 0.5;

  svg {
    display: block;
    height: 16px;
    width: 13px;
  }
`

const NavLink = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid ${p => transparentize(0.9, p.theme.card.foreground)};
  background-color: transparent;
  padding: 0 10px;
  height: 28px;

  &:hover {
    ${NavLinkLabel} { opacity: 1; }
    cursor: pointer;
    background-color: ${p => transparentize(0.95, p.theme.card.foreground)};
  }
`

const RunButton = styled.div`
  display: flex;
  transition: background-color 0.1s ease;
  width: 28px;
  height: 28px;
  color: ${p => p.theme.card.background};
  background-color: ${p => p.theme.main.success};

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.dark};
    background-color: ${
      p => p.hasChanged
      ? darken(0.1, p.theme.main.success)
      : p.theme.dark
    };
  }

  svg {
    display: block;
    margin: auto;
  }
`

const FormatSelectLabel = styled.div`
  transition: opacity 0.1s ease;
  color: ${p => p.theme.main.foreground};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  opacity: 0.5;
  pointer-events: none;
`

const FormatSelectContainer = styled.div`
  transition: background-color 0.1 ease;
  position: relative;
  display: flex;
  align-items: center;
  border-left: 1px solid ${p => transparentize(0.9, p.theme.card.foreground)};
  background-color: transparent;
  padding: 0 10px;
  height: 28px;

  &:hover {
    ${FormatSelectLabel} { opacity: 1; }
    background-color: ${p => transparentize(0.95, p.theme.card.foreground)};
  }
`

const FormatSelect = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: red;
  opacity: 0;
  font-size: 14px;
`

// Code
const CodeContainer = styled.div`
  display: flex;
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  line-height: 20px;
  padding: 4px;
  background-color: ${p => p.theme.code.background};
`

const LineNumbers = styled.div`
  text-align: right;
  padding: 8px;
  color: ${p => transparentize(0.66, p.theme.code.foreground)};
`

const Line = styled.div``

const Pre = styled.pre`
  margin: 0;
  padding: 8px;
`

const Code = styled.code`
  margin: 0;
  padding: 0;
  outline: none;
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

const CodeResult = styled.div`
  color: ${p => p.theme.code.foreground};
  background-color: ${p => p.theme.code.background};
  padding: 16px 8px;
  border-radius: 0 0 6px 6px;
  font-size: 13px;
  font-family: 'Roboto Mono', monospace;
`

const RowExpansion = styled.div`
  color: ${p => p.theme.card.code.foreground};
  margin: 0 8px 4px 8px;
  padding: 8px;
  border-radius: 6px;
  font-size: 13px;
  font-family: 'Roboto Mono', monospace;
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

export default Scratchpad