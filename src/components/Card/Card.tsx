import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/symbol.png";
import workMan from "../../assets/images/landingpage.png";
import arrow from "../../assets/images/chevron-left.svg";
import downlong from "../../assets/images/downlong.svg";
import arrowRight from "../../assets/images/long-arrow-alt-right1.svg";

interface ICardProps {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  formData: any;
}

const Card: React.FC<ICardProps> = ({ formData, setFormData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        paddingTop: { xs: "20px", sm: "100px" },
      }}
    >
      {formData && (
        <Box
          display={"flex"}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            gap: { xs: 2, sm: 10 },
          }}
        >
          <Box
            component="img"
            src={workMan}
            alt="workMan"
            sx={{
              maxWidth: { xs: "0px", sm: "50%" },
              height: "auto",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Box
            sx={{
              textAlign: "center",
              flex: 1,
            }}
          >
            <Box
              mb={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              onClick={() => setFormData(null)}
              sx={{
                cursor: "pointer",
                fontFamily: "Nunito Sans",
                fontWeight: 400,
                fontSize: { xs: "14px", sm: "20px" },
                color: "white",
              }}
            >
              <img src={arrow} alt="Arrow" />
              Gerar outro cartão
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              bgcolor={"white"}
              borderRadius={"24px"}
              sx={{
                width: { xs: "329px", sm: "510px" },
                height: { xs: "159px", sm: "247px" },
                margin: "0 auto",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  width: { xs: "45px", sm: "70px" },
                  height: { xs: "38px", sm: "60px" },
                  objectFit: "contain",
                  flex: 0.6,
                }}
              />
              <Divider
                orientation="vertical"
                sx={{
                  height: "75%",
                  borderRightWidth: "3px",
                  borderColor: "#D8D9FD",
                }}
              />
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                marginLeft={3}
              >
                <Typography
                  sx={{
                    fontFamily: "Nunito Sans",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "20px" },
                    padding: "10px 0",
                  }}
                >
                  {formData.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Nunito Sans",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "20px" },
                    padding: "10px 0",
                  }}
                >
                  {formData.phone}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Nunito Sans",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "20px" },
                    padding: "10px 0",
                  }}
                >
                  {formData.email}
                </Typography>
              </Box>
            </Box>
            <Button
              type="submit"
              variant="contained"
              disabled
              sx={{
                fontFamily: "Nunito Sans",
                fontWeight: 800,
                fontSize: { xs: "14px", sm: "16px" },
                width: { xs: "329px", sm: "510px" },
                height: { xs: "36px", sm: "48px" },
                marginTop: "30px",
                borderBottom: "4px solid #97A1AC",
                boxShadow: "none",
                borderRadius: "0",
                "&:disabled": {
                  backgroundColor: "#E1E4E8",
                  color: "#97A1AC",
                },
              }}
            >
              <img src={downlong} alt="Arrow" />
              Baixar cartão
            </Button>
            <Typography
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                marginTop: 2,
                fontFamily: "Nunito Sans",
                fontSize: { xs: "14px", sm: "16px" },
                color: "white",
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              <a
                href="https://app.rdstation.com.br/signup"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                FAZER UM TESTE GRÁTIS DO RD STATION MARKETING
                <img
                  src={arrowRight}
                  alt="Arrow"
                  style={{ marginLeft: "8px" }}
                />
              </a>
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Card;
