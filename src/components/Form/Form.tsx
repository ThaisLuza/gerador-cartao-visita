import React from "react";
import { TextField, Button, Typography, InputLabel, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validations";
import arrow from "../../assets/images/long-arrow-alt-right.svg";

interface IForm {
  setFormData: any;
}
interface IFormInput {
  name: string;
  phone: string;
  email: string;
}

const Form: React.FC<IForm> = ({ setFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IFormInput) => {
    setFormData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputLabel
        htmlFor="name"
        sx={{
          fontFamily: "Nunito Sans",
          color: "white",
          fontSize: "14px",
          fontWeight: "700",
          marginTop: "10px",
        }}
      >
        Nome*
      </InputLabel>
      <TextField
        {...register("name")}
        sx={{ backgroundColor: "white" }}
        size="small"
        placeholder="Seu nome aqui"
        variant="outlined"
        margin="normal"
        fullWidth
        error={!!errors.name}
        helperText={errors.name?.message}
        InputProps={{
          sx: {
            borderRadius: 0,
          },
        }}
      />

      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={2}
        mt={2}
      >
        <Box flex={1}>
          <InputLabel
            htmlFor="phone"
            sx={{
              fontFamily: "Nunito Sans",
              color: "white",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Telefone*
          </InputLabel>
          <TextField
            {...register("phone")}
            sx={{ backgroundColor: "white" }}
            size="small"
            placeholder="(00) 0 0000-0000"
            margin="normal"
            fullWidth
            error={!!errors.phone}
            helperText={errors.phone?.message}
            InputProps={{
              sx: {
                borderRadius: 0,
              },
            }}
          />
        </Box>

        <Box flex={1}>
          <InputLabel
            htmlFor="email"
            sx={{
              fontFamily: "Nunito Sans",
              color: "white",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Email*
          </InputLabel>

          <TextField
            {...register("email")}
            sx={{ backgroundColor: "white" }}
            size="small"
            placeholder="nome@email.com"
            margin="normal"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              sx: {
                borderRadius: 0,
              },
            }}
          />
        </Box>
      </Box>

      <ul>
        <li
          style={{
            fontFamily: "Nunito Sans",
            color: "white",
            fontSize: "12px",
            fontWeight: 400,
          }}
        >
          Ao preencher o formulário, concordo * em receber comunicações de
          acordo com meus interesses.
        </li>
        <li
          style={{
            fontFamily: "Nunito Sans",
            color: "white",
            fontSize: "12px",
            fontWeight: 400,
          }}
        >
          Ao informar meus dados, eu concordo com a{" "}
          <u>Política de privacidade.</u>
        </li>
      </ul>
      <Typography
        style={{
          fontFamily: "Nunito Sans",
          color: "white",
          fontSize: "12px",
          fontWeight: "400",
        }}
      >
        *Você pode alterar suas permissões de comunicação a qualquer tempo.
      </Typography>

      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#F2BF4E",
            color: "#100C27",
            fontFamily: "Nunito Sans",
            fontWeight: 800,
            fontSize: "16px",
            width: { xs: "327px", sm: "620px" },
            height: "48px",
            marginTop: "30px",
            border: "1px solid black",
            borderBottom: "4px solid black",
            boxShadow: "none",
            borderRadius: "0",
          }}
        >
          Gerar cartão grátis
          <img src={arrow} alt="Arrow" />
        </Button>
      </Box>
    </form>
  );
};

export default Form;
