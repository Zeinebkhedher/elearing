import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import { Row, Container } from "react-bootstrap";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
const initialState = {
  nom: "",
  prenom: "",
  mail: "",
  password: "",
};
function SignupForm() {
  const [form, setForm] = useState(initialState);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: true,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.nom]: e.target.value });
    console.log(form);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangePassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  //eye-show du mot de passe
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <center>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              alignItems: "center",
              "& > :not(style)": { m: 1 },
              width: "55ch",
            }}
          >
            <TextField
              sx={{ width: "35ch", height: "52px" }}
              id="demo-helper-text-misaligned"
              label="Votre Nom"
              onChange={handleChange}
            />

            <TextField
              sx={{ width: "35ch" }}
              id="demo-helper-text-misaligned-no-helper"
              label="Votre Prénom"
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "35ch" }}
              id="demo-helper-text-misaligned-no-helper"
              label="E_mail"
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Mot de passe
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "password" : "text"}
              value={values.password}
              onChange={handleChangePassword("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <center>
              <button
                className="bg-Darkblue-100 text-white rounded-md p-1 w-32 mt-2 flex-justify-center"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                }}
              >
                S'INSCRIRE
              </button>
            </center>
          </FormControl>
        </form>
      </center>
    </>
  );
}

export default SignupForm;
