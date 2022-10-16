import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Albums from './components/Albums'
import Layout from './components/Layout';

import './App.css'

function App() {
  
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Layout />
        <Albums />
      </div>
    </ThemeProvider>
  )
}

export default App
