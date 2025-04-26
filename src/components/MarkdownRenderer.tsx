import remarkGfm from 'remark-gfm'
import { Box, Typography, Link, useTheme } from '@mui/material'
import Markdown, { Components } from 'react-markdown'

interface MarkdownComponentProps {
  children?: React.ReactNode
  className?: string
  [key: string]: unknown
}

function MarkdownRenderer({ content }: { content: string }) {
  const theme = useTheme()

  const MarkdownComponents = {
    h1: ({ children, ...props }: MarkdownComponentProps) => (
      <Typography variant="h4" component="h1" gutterBottom {...props}>
        {children}
      </Typography>
    ),
    h2: ({ children, ...props }: MarkdownComponentProps) => (
      <Typography variant="h5" component="h2" gutterBottom {...props}>
        {children}
      </Typography>
    ),
    h3: ({ children, ...props }: MarkdownComponentProps) => (
      <Typography variant="h6" component="h3" gutterBottom {...props}>
        {children}
      </Typography>
    ),
    h4: ({ children, ...props }: MarkdownComponentProps) => (
      <Typography variant="subtitle1" component="h4" gutterBottom {...props}>
        {children}
      </Typography>
    ),
    h5: ({ children, ...props }: MarkdownComponentProps) => (
      <Typography variant="subtitle2" component="h5" gutterBottom {...props}>
        {children}
      </Typography>
    ),
    h6: ({ children, ...props }: MarkdownComponentProps) => (
      <Typography variant="subtitle2" component="h6" gutterBottom {...props}>
        {children}
      </Typography>
    ),
    p: ({ children, ...props }: MarkdownComponentProps) => (
      <Typography variant="body1" {...props} sx={{ my: 2 }}>
        {children}
      </Typography>
    ),
    a: ({ children, ...props }: MarkdownComponentProps) => (
      <Link sx={{ color: theme.palette.primary.contrastText }} {...props}>
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
    blockquote: ({ children, ...props }: MarkdownComponentProps) => (
      <Typography
        variant="body1"
        component="blockquote"
        sx={{
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          paddingLeft: 2,
          marginBottom: 2,
          fontStyle: 'italic',
        }}
        {...props}
      >
        {children}
      </Typography>
    ),
    code: ({ children, ...props }: MarkdownComponentProps) => {
      const isInlineCode = !props.className?.includes('language-')

      if (isInlineCode) {
        return (
          <Typography
            component="code"
            variant="body2"
            sx={{
              padding: 0.5,
              borderRadius: 1,
              backgroundColor:
                theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
              color:
                theme.palette.mode === 'light'
                  ? theme.palette.grey[900]
                  : theme.palette.grey[100],
              fontFamily: 'monospace',
            }}
            {...props}
          >
            {children}
          </Typography>
        )
      }

      return <code {...props}>{children}</code>
    },
    pre: ({ children, ...props }: MarkdownComponentProps) => (
      <Box
        component="pre"
        sx={{
          padding: 2,
          backgroundColor:
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          color:
            theme.palette.mode === 'light'
              ? theme.palette.grey[900]
              : theme.palette.grey[100],
          borderRadius: 1,
          overflowX: 'auto',
          fontFamily: 'monospace',
        }}
        {...props}
      >
        {children}
      </Box>
    ),
  }

  return (
    <Box sx={{ px: 2 }}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={MarkdownComponents as Components}
      >
        {content}
      </Markdown>
    </Box>
  )
}

export default MarkdownRenderer
