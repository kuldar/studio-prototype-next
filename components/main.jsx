import React from 'react'
import styled from 'styled-components'

const Main = ({ children, ...props }) => (
  <Wrapper children={children} {...props} />
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px;
  background-color: ${p => p.theme.main.background};
  overflow: scroll;
`

export default Main