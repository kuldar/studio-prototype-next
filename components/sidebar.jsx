// Libraries
import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { useRouter } from 'next/router'

// Assets
import DatabaseIcon from '../vectors/database-icon'
import ModelsIcon from '../vectors/models-icon'
import ScratchpadIcon from '../vectors/scratchpad-icon'
import Scratchpad2Icon from '../vectors/scratchpad-2-icon'
import ToggleIcon from '../vectors/toggle-icon'
import SearchIcon from '../vectors/search-icon'

const Sidebar = () => {
  const router = useRouter()

  const IconLink = ({ icon, href }) => {
    const isActive = router.asPath.includes(href)
    const handleClick = e => {
      e.preventDefault()
      router.push(href)
    }

    return(
      <Icon
        onClick={handleClick}
        isActive={isActive}
        children={icon} />
    )
  }

  return (
    <Wrapper>
      <Nav>
        {/* <IconLink
          href="/project"
          icon={<DatabaseIcon />} /> */}
        <IconLink
          href="/databrowser"
          icon={<ModelsIcon />} />
        <IconLink
          href="/scratchpad"
          icon={<Scratchpad2Icon />} />
      </Nav>
      <Spacer />
      <Nav>
        <IconLink id="search" icon={<SearchIcon />} />
        <IconLink id="toggle" icon={<ToggleIcon />} />
      </Nav>
    </Wrapper>
  )
}

// Styles
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 100%;
  background-color: ${p => p.theme.sidebar.background};
  box-shadow: ${p => p.theme.shadows.bold};
`

const Nav = styled.div`
  border-top: 1px solid ${p => p.theme.sidebar.border};
`

const Spacer = styled.div`flex: 1;`

const Icon = styled.a`
  transition: color ${p => p.theme.transitions.normal};
  display: flex;
  width: 40px;
  height: 40px;
  border-bottom: 1px solid ${p => p.theme.sidebar.border};
  color: ${p => p.isActive ? p.theme.sidebar.foreground : transparentize(0.66, p.theme.sidebar.foreground)};
  background-color: ${p => p.isActive ? p.theme.sidebar.hoverBackground : 'transparent'};

  &:hover {
    cursor: pointer;
    color: ${p => p.theme.sidebar.foreground};
    /* background-color: ${p => p.theme.sidebar.hoverBackground}; */
  }

  svg {
    display: block;
    margin: auto;
  }
`

export default Sidebar