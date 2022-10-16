import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Albums from './components/Albums'
import Layout from './components/Layout';
import About from './components/About';

import './App.css'


function App() {
  
  const theme = createTheme({
    palette: {
      primary: {
        light: '#58a5f0',
        main: '#0277bd',
        dark: '#004c8c',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#ff844c',
        main: '#f4511e',
        dark: '#b91400',
        contrastText: '#000000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <div className="App">
        <Layout />
        <Routes>          
          <Route path='/' element={<Albums />} />
          <Route path='/about' element={<About />} />
        </Routes>                   
      </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
