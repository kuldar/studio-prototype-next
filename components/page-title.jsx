// Libraries
import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

// Assets
import ChevronIcon from '../vectors/chevron-icon'

// Page Title
const PageTitle = ({ title, secondTitle, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    { secondTitle &&
      <SecondTitle>
        <Slash children="/" />
        <span>{secondTitle}</span>
        <ChevronIcon />
      </SecondTitle>
    }
    <Spacer/>
    <Nav>{children}</Nav>
  </Wrapper>
)

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const Spacer = styled.div`
  flex: 1;
`

const Title = styled.div`
  color: ${p => p.theme.main.foreground};
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
`

const Slash = styled.span`
  opacity: 0.4;
  margin: 0 6px;
`

const SecondTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.main.foreground};
  font-size: 14px;
  font-weight: 600;

  svg {
    transition: opacity ${p => p.theme.transitions.normal};
    color: ${p => p.theme.main.foreground};
    margin-left: 6px;
    opacity: 0.4;
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

const PageTitleLink = styled.div`
  transition: opacity 0.1s ease;
  color: ${p => p.theme.main.foreground};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  opacity: 0.5;
  padding: 4px 8px;
  margin-right: 8px;

  svg { display: block; }

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

const PageTitleButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  height: 24px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  background-color: ${p => p.theme.main.success};

  &:hover {
    cursor: pointer;
    background-color: ${p => darken(0.1, p.theme.main.success)};
  }

  svg {
    display: block;
    margin-right: 4px;
  }
`

export default PageTitle
export {
  PageTitleLink,
  PageTitleButton
}