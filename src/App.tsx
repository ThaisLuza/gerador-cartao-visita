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
          padding: 2,
          textAlign: "center",
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
          sx={{
            maxWidth: "600px",
            width: "100%",
            margin: "0 auto",
            padding: 2,
            "@media (max-width: 360px)": {
              maxWidth: "90%",
              padding: 1,
            },
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
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: 2,
          gap: 2,
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
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <Form />
      </Box>
    </Box>
  );
}

export default App;
