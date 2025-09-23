import { Box, Typography, Avatar, Button, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  username: string;
  onLogout: () => void;
}

export default function Header({ username, onLogout }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        backgroundColor: "#1976d2",
        color: "white",
        flexWrap: "wrap",
      }}
    >
      {!isMobile && (
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {username}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: isMobile ? 1 : 0,
        }}
      >
        <Avatar
          sx={{ bgcolor: "secondary.main", cursor: "pointer" }}
          onClick={() => alert("User settings clicked!")}
        />
        <Button
          variant={isMobile ? "contained" : "outlined"}
          color="inherit"
          size={isMobile ? "small" : "medium"}
          onClick={onLogout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}
