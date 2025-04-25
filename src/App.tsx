import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Redirect from './pages/Redirect'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
