import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Typography, useTheme } from '@mui/material'
import { isShortLinkEnabled, shortLinkBaseUrl } from '../config/site'

function Redirect() {
  const location = useLocation()
  const path = location.pathname
  const theme = useTheme()

  useEffect(() => {
    if (isShortLinkEnabled) {
      window.location.href = `${shortLinkBaseUrl}${path}`
    }
  }, [path])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backdropFilter: 'blur(10px)',
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        color: theme.palette.mode === 'dark' ? '#e8e8e8' : '#333333',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        {isShortLinkEnabled ? '正在穿越仙河传送门...' : '404 Not Found!'}
      </Typography>
    </Box>
  )
}

export default Redirect
