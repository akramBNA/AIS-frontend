import * as React from 'react';
import Box from '@mui/material/Box';

export default function DotsSpinner() {
  return (
    <Box className="flex justify-center items-center space-x-2 h-screen">
      {[...Array(3)].map((_, i) => (
        <Box
          key={i}
          sx={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            animation: `bounce 1.2s infinite ease-in-out`,
            animationDelay: `${i * 0.2}s`,
            '@keyframes bounce': {
              '0%, 80%, 100%': { transform: 'scale(0)' },
              '40%': { transform: 'scale(1)' },
            },
          }}
        />
      ))}
    </Box>
  );
}
