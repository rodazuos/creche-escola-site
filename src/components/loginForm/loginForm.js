"use client";

import Button from "@mui/material/Button";
import { useMediaQuery } from "react-responsive";
import Paper from "@mui/material/Paper";
import Text from "../shared/Text";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { cpfIsvalid } from "../utils/isValid";
import styles from "./loginForm.module.css";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const router = useRouter();


  const responsiveBreakpoint = process.env.NEXT_PUBLIC_RESPONSIVEBREAKPOINT;
  const isMobile = useMediaQuery({
    query: `(max-width: ${responsiveBreakpoint}px)`,
  });
  const currentYear = new Date().getUTCFullYear().toString();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorAuth, setErrorAuth] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const validForm = (formData) => {
    setLoading(true);
    if (!cpfIsvalid(formData.cpf) || formData.password.trim().length == 0) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const bodyData = {};
    formData.forEach((value, key) => (bodyData[key] = value));
    if (validForm(bodyData)) {
      try {
        const response = await fetch("/api/auth", {
          method: form.method,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        });
        if (response.status === 200) {
          // Verificar se é primeiro acesso result.firstAccess e soliciar a alteração de senha
          const result = await response.json();
          Cookies.set("token", result.token);
          router.push("/home");
          return true;
        } else {
          setErrorAuth(true);
          setLoading(false);
        }
      } catch (error) {
        setErrorAuth(true);
        setLoading(false);
      }
    } else {
      setErrorAuth(true);
      setLoading(false);
    }
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className={isMobile ? styles.ContainerMobile : styles.Container}>
        <div className={styles.Background}></div>
        <Paper
          className={isMobile ? styles.PaperMobile : styles.Paper}
          elevation={3}
        >
          {/* <Image src={logoImage} width="200" height="80" /> */}
          <span
            className={isMobile ? styles.SeparatorButton : styles.Separator}
          >
            {errorAuth && !loading && (
              <Text size={isMobile ? "small" : "medium"} color="error">
                Informações inválidos!
              </Text>
            )}
          </span>
          {loading ? (
            <Stack spacing={2} alignItems={"center"}>
              <CircularProgress
                size={30}
                sx={{ color: "var(--color-brand-primary)" }}
              />
              <Text size="medium" color="primary">
                Fazendo login...
              </Text>
            </Stack>
          ) : (
            <div className={styles.Login}>
              <Stack spacing={2}>
                <TextField
                  type="input"
                  id="cpf"
                  name="cpf"
                  label="CPF"
                  required
                  error={errorAuth}
                  onChange={() => {
                    setErrorAuth(false);
                  }}
                />
                <FormControl variant="outlined"
                  error={errorAuth}
                  onChange={() => {
                    setErrorAuth(false);
                  }}>
                  <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword ? 'hide the password' : 'display the password'
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Senha"
                  />
                </FormControl>
                {/* <Text size="small" color="primary">
                  Esqueceu sua senha?
                </Text> */}
              </Stack>
              <span className={styles.SeparatorButton}></span>
              <Button type="submit" variant="contained">
                ENTRAR
              </Button>
            </div>
          )}
          <div className={styles.FooterLogin}>
            <div className={styles.FooterPart1}>
              {/* <Image src={iconAzuos} width="24" height="24" /> */}
              {isMobile ? (
                <Text size="small" color="primary">
                  Azuos Tecnologia
                </Text>
              ) : (
                <Text size="small" color="primary">
                  Azuos Tecnologia © Copyright {currentYear}
                </Text>
              )}
            </div>
            {isMobile && (
              <div className={styles.FooterPart2}>
                <Text size="small" color="primary">
                  Copyright © {currentYear}
                </Text>
              </div>
            )}
          </div>
        </Paper>
      </div>
    </form>
  );
};

export default LoginForm;
