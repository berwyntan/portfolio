import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Albums from './components/Albums'
import Layout from './components/Layout';
import About from './components/About';

import './App.css'


function App() {
  
  const theme = createTheme();

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
