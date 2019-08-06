// Libraries
import React from 'react'
import styled, { css } from 'styled-components'

// Assets
import CloseIcon from '../vectors/close-icon'

// Tabbar
const Tabbar = () => (
  <Wrapper>
    <Dots>
      <Dot />
      <Dot />
      <Dot />
    </Dots>
    <Tabs>
      <Tab name="Admin Users" isActive={true} />
      <Tab name="End Subscription" />
      <Tab name="Schema" />
    </Tabs>
  </Wrapper>
)

const Tab = ({ name, isActive }) => (
  <TabContainer isActive={isActive}>
    <TabName isActive={isActive}>{name}</TabName>
    <TabClose><CloseIcon /></TabClose>
  </TabContainer>
)

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  background-color: ${p => p.theme.tabbar.background};
  box-shadow: ${p => p.theme.shadows.normal};
`

const Dots = styled.div`
  display: flex;
  padding: 14px;
  border-right: 1px solid ${p => p.theme.tabbar.border};
`

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  border: 1px solid ${p => p.theme.tabbar.border};
  & + & { margin-left: 8px; }
`

const Tabs = styled.div`
  display: flex;
`

const TabName = styled.div`
  transition: opacity ${p => p.theme.transitions.normal};
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  margin-right: 10px;
  opacity: ${p => p.isActive ? 1 : 0.5};
  color: ${p => p.theme.tabbar.foreground};
`

const TabClose = styled.div`
  transition: opacity ${p => p.theme.transitions.normal};
  color: ${p => p.theme.tabbar.foreground};
  opacity: 0.1;
  svg { display: block; }
`

const activeTabStyles = css`
  cursor: pointer;
  background-color: ${p => p.theme.tabbar.hoverBackground};
  ${TabClose} { opacity: 0.5; }
  ${TabName} { opacity: 1; }
`

const TabContainer = styled.div`
  transition: background-color ${p => p.theme.transitions.normal};
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 40px;
  padding: 0 14px;
  border-right: 1px solid ${p => p.theme.tabbar.border};
  ${p => p.isActive ? activeTabStyles : null }
  &:hover { ${activeTabStyles} }
`

export default Tabbar