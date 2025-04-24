import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function RedirectToExternal() {
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    window.location.href = `https://go.cos.tg${path}`
  }, [path])
  return <p>Redirecting...</p>
}

function HomePage() {
  return <h1>111</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<RedirectToExternal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
