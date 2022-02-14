import React from "react";
import Stack from "@mui/material/Stack";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import Input from "@mui/material/Input";
import { Button } from "react-bootstrap";
import SignupForm from "./SignupForm/SignupForm";
import { Row, Container } from "react-bootstrap";
function RightLogin() {
  return (
    <div
      className="bg-white-100  m-16 bg-grey-500"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
    >
      <div>
        <button
          className="bg-Darkblue-100 text-white w-2/4 py-3"
          onClick={() => {}}
        >
          S'inscrire
        </button>

        <button className="bg-light-100 w-2/4 py-3" onClick={() => {}}>
          Se connecter
        </button>
      </div>

      <center className="pt-8 pb-2">
        {" "}
        <p>BIENVENU CHEZ OPUS !</p> <p>Inscrivez-vous dans 2 minutes !</p>
      </center>
      <Stack direction="row" spacing={2} className="flex justify-center">
        <button
          className="flex justify-center bg-grey-500 p-2"
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
        >
          <FcGoogle className="mt-1 mr-2" /> S'inscrire avec Google
        </button>
        <button
          className="flex justify-center  bg-grey-500 p-2"
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
        >
          <ImFacebook2 className="mt-1 mr-2 " /> S'inscrire avec Facebook
        </button>
      </Stack>

      <p className="flex justify-center pt-4">Ou bien</p>
      <SignupForm />
    </div>
  );
}

export default RightLogin;
