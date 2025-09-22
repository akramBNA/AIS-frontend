import { Box, Button, Typography, Paper, Container } from "@mui/material";
import { useNavigate } from "react-router";

export default function AccessDenied() {
  const navigate = useNavigate();

  return (
    <Box
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-400 to-red-600 p-4"
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: { xs: 4, sm: 6 },
            borderRadius: 3,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255,255,255,0.85)",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
            Access Denied
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            You must be logged in to access this content.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/login")}
            sx={{ py: 1.5, px: 4, fontSize: "1rem", fontWeight: "bold" }}
          >
            Go to Login
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
