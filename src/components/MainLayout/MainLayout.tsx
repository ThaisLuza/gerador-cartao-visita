import { Box } from "@mui/material";
import React from "react";
import Header from "../Header/Header";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    sx={{
      backgroundColor: "#6C5AE0",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Header />

    <Box
      sx={{
        flex: 1,
      }}
    >
      {children}
    </Box>
  </Box>
);

export default MainLayout;
