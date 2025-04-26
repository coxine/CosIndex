import { alpha } from '@mui/material/styles'
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material'
import { GitHub, Search } from '@mui/icons-material'
import { useState } from 'react'

import ColorSchemeToggle from './ColorSchemeToggle'
import { siteTitle } from '../config/site'
import { Link } from 'react-router-dom'

export default function Header({
  onSearch,
}: {
  onSearch: (term: string) => void
}) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value
    setSearchTerm(newTerm)
    onSearch(newTerm)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'primary.main',
          backdropFilter: 'blur(10px)',
          background: (theme) => alpha(theme.palette.primary.main, 0.75),
          boxShadow: (theme) =>
            `0 4px 20px 0 ${alpha(theme.palette.common.black, 0.1)}`,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: 'block' }}
          >
            {siteTitle}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={(theme) => ({
              position: 'relative',
              backgroundColor: alpha(theme.palette.common.white, 0.15),
              '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
              },
              marginRight: { xs: theme.spacing(1), sm: theme.spacing(2) },
              marginLeft: 0,
              width: { xs: '60%', sm: 'auto' },
              borderRadius: theme.shape.borderRadius,
            })}
          >
            <Box
              sx={(theme) => ({
                padding: theme.spacing(0, 2),
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              })}
            >
              <Search />
            </Box>
            <InputBase
              placeholder="搜索网站"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleSearchChange}
              sx={(theme) => ({
                color: 'inherit',
                '& .MuiInputBase-input': {
                  padding: theme.spacing(1, 1, 1, 0),
                  // vertical padding + font size from searchIcon
                  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                  transition: theme.transitions.create('width'),
                  width: '100%',
                  [theme.breakpoints.up('md')]: {
                    width: '20ch',
                  },
                },
              })}
            />
          </Box>
          <ColorSchemeToggle />
          <Link to="https://github.com/coxine/CosIndex">
            <IconButton>
              <GitHub />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />{' '}
      {/* This empty Toolbar creates space equal to the AppBar height */}
    </Box>
  )
}
