import { useState } from "react";
import { Link, Typography, Box, Avatar, IconButton, Menu, MenuItem, useTheme, useMediaQuery } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";

export default function DefaultLayout() {
  const current_year = new Date().getFullYear();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Mobile menu state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    handleMenuClose();
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          backgroundColor: "linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%)",
          color: "white",
          flexWrap: "wrap",
        }}
      >
        {!isMobile && (
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Welcome Back, {user?.firstName || "User"}
          </Typography>
        )}

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {isMobile ? (
            <>
              <IconButton onClick={handleMenuOpen} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <MenuItem disabled>{user?.firstName || "User"}</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Box
                component="button"
                onClick={handleLogout}
                style={{
                  backgroundColor: "red",
                  border: "none",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: 4,
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Logout
              </Box>
              <Avatar
                sx={{ bgcolor: "secondary.main", cursor: "pointer" }}
                onClick={() => alert("User settings clicked!")}
              />
            </>
          )}
        </Box>
      </Box>

      {/* Main content */}
      <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Box sx={{ py: 2, textAlign: "center" }}>
        <Typography variant="body2" color="white">
          Created by{" "}
          <Link
            href="https://www.deevium.com"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ fontWeight: "bolder", color: "inherit" }}
          >
            Deevium
          </Link>{" "}
          team. All rights reserved © {current_year}
        </Typography>
      </Box>
    </Box>
  );
}
