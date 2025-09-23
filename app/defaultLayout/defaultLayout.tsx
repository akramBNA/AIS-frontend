import { Link, Typography, Box } from "@mui/material";
import { Outlet } from "react-router";

export default function DefaultLayout() {
    const current_year = new Date().getFullYear();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%)",
      }}
    >
      <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
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
            sx={{ fontWeight: "bolder", color: "inherit" }} >
            Deevium
            </Link>{" "}
            team. All rights reserved © {current_year}
        </Typography>
      </Box>
    </Box>
  );
}
