import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import { Box, Typography } from "@mui/material";
import workMan from "./assets/images/landingpage.png";

function App() {
  return (
    <Box sx={{ backgroundColor: "#6C5AE0" }} height={"100vh"}>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          // Adicionando espaçamento e centralização
          padding: 2,
          textAlign: "center",
          // Breakpoints para responsividade
          "@media (max-width: 600px)": {
            padding: 1,
          },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: 700,
            fontFamily: "Darker Grotesque",
            fontSize: { xs: "24px", sm: "40px" },
          }}
        >
          Gerador de Cartão de Visita
        </Typography>
        <Box
          border={"1px solid black"}
          sx={{
            maxWidth: "600px", // Define a largura máxima para o Box
            width: "100%", // Garante que o Box ocupe toda a largura disponível até o maxWidth
            margin: "0 auto", // Centraliza o Box horizontalmente
            padding: 2, // Adiciona um pouco de padding interno
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Nunito Sans",
              color: "white",
              fontWeight: 400,
              fontSize: { xs: "16px", sm: "20px" },
            }}
          >
            Crie grátis seu cartão de visita em passos rápidos! Você o insere no
            Instagram e demais canais digitais.
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }} // FlexDirection para responsividade
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: 2,
          // Adicionando espaçamento
          gap: 2,
          // Breakpoints para responsividade
          "@media (max-width: 600px)": {
            gap: 1,
          },
        }}
      >
        <Box
          component="img"
          src={workMan}
          alt="workMan"
          sx={{
            maxWidth: "100%", // Garantir que a imagem não ultrapasse a tela
            height: "auto",
          }}
        />
        <Form />
      </Box>
    </Box>
  );
}

export default App;
