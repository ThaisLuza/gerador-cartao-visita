import { Box } from "@mui/material";
import React from "react";
import Header from "../Header/Header";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    sx={{
      backgroundColor: "#6C5AE0",
      minHeight: "100vh", // Garante que o Box preencha pelo menos a altura da viewport
      display: "flex",
      flexDirection: "column", // Permite que o Box se expanda verticalmente
    }}
  >
    <Header />

    <Box
      sx={{
        flex: 1, // Faz com que o Box de conteúdo se expanda para preencher o espaço restante
      }}
    >
      {children}
    </Box>
  </Box>
);

export default MainLayout;
