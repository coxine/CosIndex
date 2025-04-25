import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import { IconButton, IconButtonProps, useColorScheme } from '@mui/material'
import React, { useEffect } from 'react'

function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, ...other } = props
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = React.useState(false)

  useEffect(() => {
    setMounted(true)

    const savedMode = localStorage.getItem('theme-mode')
    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      setMode(savedMode)
    }
  }, [setMode])

  const handleToggleMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)

    // Save the preference to localStorage
    localStorage.setItem('theme-mode', newMode)

    // Call the original onClick handler if provided
    if (onClick) {
      onClick(event)
    }

    console.log('Theme toggled to:', newMode) // Debug log
  }

  return (
    <IconButton
      aria-label="toggle light/dark mode"
      size="small"
      disabled={!mounted}
      onClick={handleToggleMode}
      {...other}
    >
      {mode === 'light' ? <DarkModeRounded /> : <LightModeRounded />}
    </IconButton>
  )
}

export default ColorSchemeToggle
