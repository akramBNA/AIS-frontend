import { Alert } from '@mui/material';

export default function CustomAlert({ severity, message }: { severity: 'error' | 'warning' | 'info' | 'success'; message: string }) {
  return (
    <Alert severity={severity} sx={{ mb: 2 }}>
      {message}
    </Alert>
  );
}

// example use:
/* 
<CustomAlert severity="success" message="Your operation was successful!" />
*/