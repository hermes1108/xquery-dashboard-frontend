import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAccountCenter } from '@web3-onboard/react'

import { light, dark } from './theme'
import { Dashboard, Login } from './pages'
import './App.css'

const App = () => {
  const updateAccountCenter = useAccountCenter()
  updateAccountCenter({ position: 'bottomRight' })
  const mode = useSelector(state => state.toogle.darkMode)

  return (
    <ThemeProvider theme={mode === 'true' ? dark : light}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
