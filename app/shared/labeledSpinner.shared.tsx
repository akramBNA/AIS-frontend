import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function LabeledSpinner() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <CircularProgress size="6rem" thickness={5} color="primary" />
      <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
        Loading...
      </Typography>
    </Box>
  );
}
