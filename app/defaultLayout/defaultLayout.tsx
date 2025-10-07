import { useState, useEffect } from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  Link,
  Typography,
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";

export default function DefaultLayout() {
  const current_year = new Date().getFullYear();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [user, setUser] = useState<{ firstName?: string }>({});

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    navigate("/login");
    handleMenuClose();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
      setUser(storedUser);
    }
  }, []);

  return (
      <ProtectedRoute>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%)",
          }}
        >
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
                Welcome Back,
                <span className="block md:inline md:ml-2 text-yellow-200 font-semibold">
                  {user?.firstName || "User"}
                </span>
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

          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}>
            <Outlet />
          </Box>

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
      </ProtectedRoute>
  );
}
