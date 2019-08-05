// Libraries
import React, { useState } from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

// Assets
import DatabaseIcon from '../vectors/database-icon'
import ModelsIcon from '../vectors/models-icon'
import ScratchpadIcon from '../vectors/scratchpad-icon'
import ToggleIcon from '../vectors/toggle-icon'
import SearchIcon from '../vectors/search-icon'

const Sidebar = () => {
  const [activeGroup, setActiveGroup] = useState('project')
  const [hoveredGroup, setHoveredGroup] = useState(null)

  const IconLink = ({ id, icon }) => (
    <Icon
      onClick={() => setActiveGroup(id)}
      onMouseEnter={() => setHoveredGroup(id)}
      isActive={activeGroup === id}
      isHovered={hoveredGroup === id}
      children={icon} />
  )

  return (
    <Wrapper onMouseLeave={() => setHoveredGroup(null)}>
      <Nav>
        <IconLink id="project" icon={<DatabaseIcon />} />
        <IconLink id="models" icon={<ModelsIcon />} />
        <IconLink id="scratchpad" icon={<ScratchpadIcon />} />
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
  position: relative; /* TODO: Check if needed */
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 100%;
  background-color: ${p => p.theme.sidebar.background};
  box-shadow: ${p => p.theme.shadows.bolder};
`

const Nav = styled.div``
const Spacer = styled.div`flex: 1;`

const Icon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-bottom: 1px solid ${p => p.theme.sidebar.border};
  color: ${p => p.isActive ? p.theme.sidebar.foreground : transparentize(0.5, p.theme.sidebar.foreground)};
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