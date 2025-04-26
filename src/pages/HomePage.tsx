import { useState } from 'react'
import { Container, Box, Divider } from '@mui/material'
import { navData } from '../config/nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LinkSection from '../components/LinkSection'
import { introduction } from '../config/introduction'
import MarkdownRenderer from '../components/MarkdownRenderer'

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflow: 'auto',
      }}
    >
      <Header onSearch={handleSearch} />

      <Container
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          mt: 4,
          mb: 2,
        }}
        disableGutters
      >
        {navData.map((section, index) => (
          <LinkSection key={index} section={section} searchTerm={searchTerm} />
        ))}
        {introduction && (
          <>
            <Divider sx={{ my: 2 }} />
            <MarkdownRenderer content={introduction} />
          </>
        )}
      </Container>
      <Footer />
    </Box>
  )
}

export default HomePage
