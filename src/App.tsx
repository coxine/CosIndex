import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Redirect from './pages/Redirect'
import HomePage from './pages/HomePage'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { customTheme } from './config/theme'

const theme = createTheme(customTheme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
