import React from "react";
import logo from "../../assets/images/logo.png";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: "white",
          padding: "24px ",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          width={"100%"}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            maxWidth: "1200px", // Limite máximo para o conteúdo
            mx: "auto", // Centraliza o Box horizontalmente
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: { xs: "100px", sm: "147px" }, // Tamanho da imagem para diferentes tamanhos de tela
              height: { xs: "24px", sm: "36px" },
              objectFit: "contain",
            }}
          />
          <Typography
            color="#212429"
            sx={{
              fontFamily: "Darker Grotesque",
              fontWeight: 700,
              fontSize: { xs: "18px", sm: "24px" }, // Responsivo com base no tamanho da tela
              textAlign: { xs: "center", sm: "left" }, // Ajusta o alinhamento do texto para pequenas telas
            }}
          >
            Gerador de Cartão de Visita
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
