// Libraries
import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

// Page Title
const PageTitle = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Nav>{children}</Nav>
  </Wrapper>
)

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  height: 28px;
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
  padding: 0 10px;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  height: 28px;
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