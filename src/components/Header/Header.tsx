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
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: { xs: "100px", sm: "147px" },
              height: { xs: "24px", sm: "36px" },
              objectFit: "contain",
            }}
          />
          <Typography
            color="#212429"
            sx={{
              fontFamily: "Darker Grotesque",
              fontWeight: 700,
              fontSize: { xs: "18px", sm: "24px" },
              textAlign: { xs: "center", sm: "left" },
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
