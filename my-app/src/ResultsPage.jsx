import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Button, CssBaseline, Stack, Typography, Box } from '@mui/material';
import DrawerAppBar from './DrawerAppBar'; // Adjust the import path as necessary

export default function ResultsPage() {
  const location = useLocation();
  const { result } = location.state || {};
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <DrawerAppBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 64px)', // Adjust height to account for the AppBar
          textAlign: 'center',
          mt: -12, // Adjust this value to move the content higher
        }}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          {result ? result.message : 'No result available'}
        </Typography>
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/inputspeech')}
            sx={{ minWidth: '150px', fontSize: '1rem', padding: '8px 16px' }}
          >
            Try Again
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ minWidth: '150px', fontSize: '1rem', padding: '8px 16px' }}
          >
            Home
          </Button>
        </Stack>
      </Box>
    </>
  );
}