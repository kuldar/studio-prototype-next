// Libraries
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { useRouter } from 'next/router'

// Assets
import CloseIcon from '../vectors/close-icon'
import SettingsIcon from '../vectors/settings-icon'

// Tabbar
const Tabbar = () => (
  <Wrapper>
    <Dots>
      <Dot color="#ED655A" />
      <Dot color="#E1C04C" />
      <Dot color="#71BE47" />
    </Dots>
    <Tabs>
      <Tab name="Pro Membership users" href="/scratchpad/pro-membership-users" />
      <Tab name="Featured posts" href="/scratchpad/featured-posts" />
      <Tab name="Users" href="/databrowser/users" />
      <Tab name="Project" href="/project" />
    </Tabs>
    <Spacer />
    <Status />
    {/* <Settings links={[
      { label: 'Credentials', href: '/credentials' },
      { label: 'Help', href: 'https://github.com/prisma/prisma2' }
    ]} /> */}
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

const Settings = ({ links }) => {
  return (
    <SettingsLink>
      <SettingsIcon />
      <SettingsNav>
        <SettingsNavLink>Credentials</SettingsNavLink>
        <SettingsNavLink>Help</SettingsNavLink>
      </SettingsNav>
    </SettingsLink>
  )
}

const Status = () => (
  <StatusBox>
    <StatusDot/>
    <span>Connected</span>
  </StatusBox>
)

const StatusBox = styled.div`
  display: flex;
  align-items: center;
  /* background-color: ${p => p.theme.colors.green100}; */
  padding: 4px 6px;
  border-radius: 3px;
  color: ${p => p.theme.colors.green700};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  margin-right: 8px;
`

const StatusDot = styled.div`
  background-color: ${p => p.theme.colors.green500};
  margin-right: 8px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(21, 189, 118, 0.4);
  animation: pulse 3s infinite;

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(21, 189, 118, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(21, 189, 118, 0); }
    100% { box-shadow: 0 0 0 0 rgba(21, 189, 118, 0); }
  }
`

const Wrapper = styled.div`
  -webkit-app-region: drag;
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  background-color: ${p => p.theme.tabbar.background};
  box-shadow: ${p => p.theme.shadows.normal};
  flex-shrink: 0;
`

const Dots = styled.div`
  display: flex;
  padding: 14px;
  border-right: 1px solid ${p => p.theme.tabbar.border};
`

const Dot = styled.div`
  /* opacity: 0; */
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${p => p.color};
  /* border: 1px solid ${p => p.theme.tabbar.border}; */

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

const SettingsNav = styled.div`
  position: absolute;
  top: 46px;
  right: 4px;
  background-color: ${p => p.theme.colors.gray800};
  width: 100px;
  border-radius: 6px;
  padding: 4px;
  display: none;
`

const SettingsNavLink = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: ${p => p.theme.colors.white};
  border-radius: 4px;
  padding: 4px 6px;

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.gray900};
  }
`

const SettingsLink = styled.div`
  transition: color ${p => p.theme.transitions.normal};
  display: flex;
  width: 40px;
  height: 40px;
  border-left: 1px solid ${p => p.theme.sidebar.border};
  color: ${p => p.isActive ? p.theme.sidebar.foreground : transparentize(0.66, p.theme.sidebar.foreground)};
  background-color: ${p => p.isActive ? p.theme.sidebar.hoverBackground : 'transparent'};

  &:hover {
    cursor: pointer;
    color: ${p => p.theme.sidebar.foreground};
    ${SettingsNav} { display: block; }
  }

  svg {
    display: block;
    margin: auto;
  }
`

const Spacer = styled.div`
  flex: 1;
`

export default Tabbar