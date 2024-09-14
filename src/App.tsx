import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import MainLayout from "./components/MainLayout/MainLayout";
import Intro from "./components/Intro/Intro";
import workMan from "./assets/images/landingpage1.png";
import Card from "./components/Card/Card";

interface IFormInput {
  name: string;
  phone: string;
  email: string;
}

function App() {
  const [formData, setFormData] = useState<IFormInput | null>(null);

  return (
    <MainLayout>
      {!formData ? (
        <>
          <Intro />
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="space-evenly"
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
                width: { xs: "268px", sm: "25%" },
                height: { xs: "198px", sm: "auto" },
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
            <Form setFormData={setFormData} />
          </Box>
        </>
      ) : (
        <Card formData={formData} setFormData={setFormData} />
      )}
    </MainLayout>
  );
}

export default App;
