import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
          <Route
            path="*"
            element={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                  color: '#888',
                  fontFamily: 'sans-serif',
                }}
              >
                <p>
                  部署至 Cloudflare Pages 后将自动跳转，详见 _redirects 文件
                </p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
