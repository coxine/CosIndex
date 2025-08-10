import { Box, Typography } from '@mui/material'
import { footerText, siteTitle } from '../config/loader/site'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', mb: 1 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {`© ${currentYear} ${siteTitle}`}
        <br />
        {footerText}
        <br />
      </Typography>
    </Box>
  )
}

export default Footer
