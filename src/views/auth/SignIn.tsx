import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { theme } from "../theme/DO";
import CodingBackground from "./../../assets/img/coding.png";
import Logo from "./../../assets/img/logo.png";
import useLogin from "../../hooks/useLogin";
import { Snackbar } from "@mui/material";
import Link from "@mui/material/Link";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignInSide() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [response, sendRequest] = useLogin(email, password);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    setError(response.error);
    setErrorMessage(response.errorMessage);
    if (!error) {
      if (!!response && response.data) {
        setSuccess(true);
        localStorage.setItem("token", response.data.accessToken);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    }
  }, [response]);

  const handleSubmit = () => {
    sendRequest();
  };

  const handleErrorClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
    setErrorMessage("");
  };

  const handleSuccessClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${CodingBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: t => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={Logo} alt="logo" style={{ width: 300 }} />
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <TextField onChange={handleEmail} margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
            <TextField onChange={handlePassword} margin="normal" required fullWidth name="password" label="Password" type="password" autoComplete="current-password" />
            <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor: "primary.main" }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <LinkRouter to="/register">
                  <Link variant="body2">Don't have an account? Sign Up</Link>
                </LinkRouter>
              </Grid>
            </Grid>

            <Snackbar
              sx={{ width: "100%" }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              open={error}
              autoHideDuration={6000}
              onClose={handleErrorClose}
            >
              <Alert sx={{ bgcolor: "red", color: "white" }} severity="error">
                {errorMessage}
              </Alert>
            </Snackbar>

            <Snackbar
              sx={{ width: "100%" }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              autoHideDuration={6000}
              open={success}
              onClose={handleSuccessClose}
            >
              <Alert severity="success">{"Success. Redirection ..."}</Alert>
            </Snackbar>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
