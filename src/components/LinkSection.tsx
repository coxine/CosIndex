import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material'
import { LinkGroup } from '../types/link'
import { Link } from 'react-router-dom'

const LinkSection = ({
  section,
  searchTerm,
}: {
  section: LinkGroup
  searchTerm: string
}) => {
  const filteredItems = searchTerm
    ? section.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : section.items

  const isSearchResultEmpty = searchTerm && filteredItems.length === 0

  return (
    <Box sx={{ mb: 2, px: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {section.title} &nbsp;
        <Typography variant="body2" component="span" color="text.secondary">
          {section.desc}
        </Typography>
      </Typography>

      {!isSearchResultEmpty && (
        <Grid container spacing={3}>
          {filteredItems.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardActionArea
                  component={item.link ? Link : 'div'}
                  to={item.link || undefined}
                  target={item.link ? '_blank' : undefined}
                  sx={{ height: '100%' }}
                >
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      gutterBottom
                      sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.name}
                    </Typography>
                    {item.desc && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.desc}
                      </Typography>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default LinkSection
