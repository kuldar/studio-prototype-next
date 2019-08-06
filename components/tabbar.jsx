// Libraries
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'

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
      <Tab name="Pro Membership users" href="/scratchpad/pro-membership-users" />
      <Tab name="Featured posts" href="/scratchpad/featured-posts" />
      <Tab name="Project" href="/project" />
      <Tab name="Users" href="/databrowser/users" />
    </Tabs>
  </Wrapper>
)

const Tab = ({ name, href }) => {
  const router = useRouter()
  const [isDeleted, setAsDeleted] = useState(false)
  const isActive = router.asPath === href

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  const handleDelete = e => {
    setAsDeleted(true)
    e.preventDefault()
  }

  return (
    !isDeleted &&
    <TabContainer isActive={isActive} onClick={handleClick}>
      <TabName>{name}</TabName>
      <TabClose onClick={handleDelete}><CloseIcon /></TabClose>
    </TabContainer>
  )
}

const Wrapper = styled.div`
  -webkit-app-region: drag;
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
  opacity: 0;
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
  opacity: 0.5;
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
  -webkit-app-region: no-drag;
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