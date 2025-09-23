import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
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

      <Box sx={{ py: 2, textAlign: "center", backgroundColor: "rgba(255,255,255,0.1)" }}>
        <Typography variant="body2" color="white">
         Created by <span>Deevium</span> team, All rights reserved © 2025.
        </Typography>
      </Box>
    </Box>
  );
}
