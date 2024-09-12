import React, { useState } from "react";
import { TextField, Button, Typography, InputLabel, Box } from "@mui/material";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputLabel htmlFor="name">Nome*</InputLabel>
      <TextField
        sx={{ backgroundColor: "white" }}
        size="small"
        label="Seu nome aqui"
        name="name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          <InputLabel htmlFor="name" sx={{ color: "white" }}>
            Telefone*
          </InputLabel>
          <TextField
            sx={{ backgroundColor: "white" }}
            size="small"
            label="(00) 0 0000-0000"
            name="phone"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Box>
        <Box>
          <InputLabel htmlFor="name">Email*</InputLabel>
          <TextField
            sx={{ backgroundColor: "white" }}
            size="small"
            label="nome@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Box>
      </Box>
      <ul>
        <li>
          Ao preencher o formulário, concordo * em receber comunicações de
          acordo com meus interesses.
        </li>
        <li>
          Ao informar meus dados, eu concordo com a{" "}
          <u>Política de privacidade.</u>
        </li>
      </ul>
      <Typography>
        *Você pode alterar suas permissões de comunicação a qualquer tempo.
      </Typography>

      <Button type="submit" variant="contained" color="primary">
        Gerar cartão grátis
      </Button>
    </form>
  );
};

export default Form;
