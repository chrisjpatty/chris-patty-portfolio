import React from 'react'
import  { ThemeProvider } from 'emotion-theming'
import theme from '../theme'

export default ({children}) => {

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
