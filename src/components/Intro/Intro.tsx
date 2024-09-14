import React from "react";
import { Box, Typography } from "@mui/material";

const Intro: React.FC = () => (
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
        // width: "100%",
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
);

export default Intro;
