import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardActionArea,
  Link,
} from '@mui/material'
import { LinkGroup } from '../types/link'

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

  if (searchTerm && filteredItems.length === 0) {
    return null
  }

  return (
    <Box sx={{ mb: 2, px: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {section.title} &nbsp;
        <Typography variant="body2" component="span" color="text.secondary">
          {section.desc}
        </Typography>
      </Typography>

      <Grid container spacing={3}>
        {filteredItems.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardActionArea
                component={Link}
                href={item.link}
                target="_blank"
                sx={{ height: '100%' }}
              >
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {item.name}
                  </Typography>
                  {item.desc && (
                    <Typography variant="body2" color="text.secondary">
                      {item.desc}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default LinkSection
