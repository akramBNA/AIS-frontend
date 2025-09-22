import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Link,
} from "@mui/material";
import authService from "../../services/authentication.services";
import LoadingSpinner from "~/shared/loadingSpinner.shared";
import ModernSpinner from "~/shared/modernSpinner.shared";
import LabeledSpinner from "~/shared/labeledSpinner.shared";
import DotsSpinner from "~/shared/dotsSpinner.shared";
import CustomAlert from "~/shared/customAlert.shared";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await authService.login({ email, password });
      if (response.success) {
        setLoading(false);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/mainPage");
      } else {
        setLoading(false);
        setError("Login failed");
      }
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Login failed");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%)",
        p: 2,
      }}
    >
         {loading ? (
        <DotsSpinner />
      ) : (
        <>
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
            Welcome to Agricultural Impact Simulator App
          </Typography>

          {error && <CustomAlert severity="error" message={error} />}

          <Box component="form" onSubmit={handleSubmit}>
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
              disabled={loading}
              sx={{
                mt: 3,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Box>

          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Not a member?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate("/signup")}
              sx={{ fontWeight: "bold" }}
            >
              Sign up
            </Link>
          </Typography>
        </Paper>
      </Container>
        </>)}
    </Box>
  );
}
