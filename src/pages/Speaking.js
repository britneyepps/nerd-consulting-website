import React from 'react';
import { Box, Typography, Stack, Paper, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';

// Keep this public-facing list limited to appearances confirmed by Nerd or
// documented by a post-event organizer follow-up. Photos are optional.
const appearances = [
  {
    date: 'May 30, 2026',
    title: 'Preservation Panel',
    host: 'DIVINE Magazine',
    format: 'Panel discussion',
    topics: 'Fashion, cultural preservation, craftsmanship, Black creative legacy, and sustainable practices.',
    venue: 'Electric Studio, Detroit',
  },
  {
    date: 'February 17, 2026',
    title: 'Sustainable Fashion Education Night',
    host: 'Michigan Fashion',
    format: 'Featured panelist',
    topics: 'Responsible fashion production, materials, sustainability, and building fashion businesses.',
    venue: 'The Edit, Detroit',
    link: 'https://www.michiganfashionweek.com/the-green-label',
  },
  {
    date: 'April 18, 2025',
    title: 'Crossroads',
    host: 'CreativeMornings/Detroit',
    format: 'Panelist',
    topics: 'The future of sustainable fashion, Detroit creativity, and design at the crossroads of change.',
    venue: 'Boyer Campbell Building, Detroit',
    link: 'https://www.creativemornings.com/cities/DET',
  },
];

const Speaking = () => (
  <Box component="main" sx={{ py: { xs: 4, md: 7 }, maxWidth: 900, mx: 'auto' }}>
    <Typography variant="overline" sx={{ color: '#A65300', fontWeight: 700 }}>
      NERD / BRITNEY EPPS
    </Typography>
    <Typography component="h1" variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2 }}>
      Speaking &amp; Conversations
    </Typography>
    <Typography variant="body1" sx={{ maxWidth: 720, mb: 4, lineHeight: 1.8 }}>
      I speak at the intersection of sustainable fashion, creative technology,
      entrepreneurship, and community-centered design. From STEM pathways to the
      preservation of creative culture, these conversations connect the work of
      building new things with the people and communities they serve.
    </Typography>

    <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
      Selected panels
    </Typography>
    <Stack spacing={2} component="section" aria-label="Confirmed speaking appearances">
      {appearances.map((event) => (
        <Paper
          component="article"
          key={event.title}
          variant="outlined"
          sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 2 }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700 }}>
                {event.date} · {event.host}
              </Typography>
              <Typography component="h3" variant="h6" sx={{ fontWeight: 700, my: 1 }}>
                {event.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>{event.topics}</Typography>
              <Typography variant="body2" color="text.secondary">{event.venue}</Typography>
            </Box>
            <Chip label={event.format} variant="outlined" size="small" sx={{ flexShrink: 0 }} />
          </Stack>
          {event.link && (
            <Button
              component="a"
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 1, px: 0, color: '#A65300', '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' } }}
            >
              Explore organizer
            </Button>
          )}
        </Paper>
      ))}
    </Stack>

    <Box sx={{ mt: 5, p: { xs: 3, md: 4 }, borderRadius: 2, backgroundColor: '#FFF2E6' }}>
      <Typography component="h2" variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        Bring this conversation to your event
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Available for panels, moderated conversations, workshops, and curriculum collaborations
        covering fashion, technology, sustainable design, and creative learning.
      </Typography>
      <Button component={Link} to="/contact" variant="contained" sx={{ backgroundColor: '#A65300', '&:hover': { backgroundColor: '#7C3D00' } }}>
        Inquire about speaking
      </Button>
    </Box>
  </Box>
);

export default Speaking;
