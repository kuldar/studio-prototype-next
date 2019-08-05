// Libraries
import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

// Locals
import themes from '../styles/themes'

// My App
export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={themes[0]}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}