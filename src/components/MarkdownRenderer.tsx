import remarkGfm from 'remark-gfm'
import {
  Box,
  Typography,
  Link,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import Markdown, { Components } from 'react-markdown'

const markdownTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: '1rem',
        },
      },
    },
  },
  typography: {
    fontFamily: '"ceym", Arial, sans-serif',
  },
})

interface MarkdownComponentProps {
  children?: React.ReactNode
  className?: string
  [key: string]: unknown
}

const MarkdownComponents = {
  h1: ({ children, ...props }: MarkdownComponentProps) => (
    <Typography variant="h3" component="h1" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  h2: ({ children, ...props }: MarkdownComponentProps) => (
    <Typography variant="h4" component="h2" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  h3: ({ children, ...props }: MarkdownComponentProps) => (
    <Typography variant="h5" component="h3" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  h4: ({ children, ...props }: MarkdownComponentProps) => (
    <Typography variant="h6" component="h4" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  h5: ({ children, ...props }: MarkdownComponentProps) => (
    <Typography variant="subtitle1" component="h5" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  h6: ({ children, ...props }: MarkdownComponentProps) => (
    <Typography variant="subtitle2" component="h6" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  p: ({ children, ...props }: MarkdownComponentProps) => (
    <Typography variant="body1" {...props}>
      {children}
    </Typography>
  ),
  a: ({ children, ...props }: MarkdownComponentProps) => (
    <Link color="primary" {...props}>
      {children}
    </Link>
  ),
  li: ({ children, ...props }: MarkdownComponentProps) => (
    <Typography
      component="li"
      variant="body1"
      style={{ marginBottom: '0.5rem' }}
      {...props}
    >
      {children}
    </Typography>
  ),
}

function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ThemeProvider theme={markdownTheme}>
      <Box sx={{ px: 2 }}>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={MarkdownComponents as Components}
        >
          {content}
        </Markdown>
      </Box>
    </ThemeProvider>
  )
}

export default MarkdownRenderer
