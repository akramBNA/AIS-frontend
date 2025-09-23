import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import authService from "../../services/authentication.services";
import DotsSpinner from "~/shared/dotsSpinner.shared";
import SwalService from "~/shared/sweetAlert.shared";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const newUser = { firstName, lastName, email, password };

    try {
      const response = await authService.signup(newUser);
      if (response.success) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setLoading(false);
        SwalService.showSuccess(`Welcome ${response.data.firstName}!`);
        // navigate("/login");
      } else {
        setLoading(false);
        SwalService.showError(`Could not sign you up! ${response.message}`);
      }
    } catch (err: any) {
      setLoading(false);
      SwalService.showError("Signup failed. Please try again.");
    }
  };

  return (
    <>
      {loading ? (
        <DotsSpinner />
      ) : (
        <Container maxWidth="sm">
          <Paper
            elevation={8}
            sx={{
              p: { xs: 4, sm: 6 },
              borderRadius: 3,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255,255,255,0.85)",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Sign Up
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 3, py: 1.5, fontSize: "1rem", fontWeight: "bold" }}
                disabled={loading}
              >
                Sign Up
              </Button>

              <Button
                fullWidth
                variant="contained"
                color="error"
                onClick={() => navigate("/login")}
                sx={{ mt: 3, py: 1.5, fontSize: "1rem", fontWeight: "bold" }}
              >
                Go Back
              </Button>
            </Box>
          </Paper>
        </Container>
      )}
    </>
  );
}
