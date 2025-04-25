import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Redirect.css'

function Redirect() {
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    window.location.href = `https://go.cos.tg${path}`
  }, [path])

  return (
    <div className="redirect-container">
      <p>正在穿越仙河传送门...</p>
    </div>
  )
}

export default Redirect
