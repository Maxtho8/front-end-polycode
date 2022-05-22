import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link as LinkRouter } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { Alert } from "../../components/form/Alert";
import { theme } from "../theme/DO";
import CodingBackground from "./../../assets/img/coding.png";
import Logo from "./../../assets/img/logo.png";
import { Snackbar } from "@mui/material";
import Link from "@mui/material/Link";
import useRegister from "../../hooks/useRegister";

export default function SignInSide() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [acceptAge, setAcceptAge] = React.useState(false);
  const [acceptCGU, setAcceptCGU] = React.useState(false);
  const [response, sendRequest] = useRegister(username, email, password);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    setError(response.error);
    setErrorMessage(response.errorMessage);
    console.log(response);
    if (!error) {
      if (!!response && response.data) {
        setSuccess(true);
      }
    }
  }, [response]);

  const handleSubmit = () => {
    if (!acceptAge || !acceptCGU) {
      setError(true);
      setErrorMessage("You need to enter your age and accept the CGU");
      return;
    }
    if (password !== rePassword) {
      setErrorMessage("Two passwords are different");
      setError(true);
      return;
    }
    sendRequest();
  };

  const handleAgeConfirmation = () => {
    setAcceptAge(!acceptAge);
  };

  const handleCGUConfirmation = () => {
    setAcceptCGU(!acceptCGU);
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

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRePassword(e.target.value);
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
              Sign Up
            </Typography>

            <TextField margin="normal" onChange={handleUsername} required fullWidth name="username" label="Username" type="text" id="username" autoComplete="username" />
            <TextField margin="normal" onChange={handleEmail} required fullWidth name="email" id="email" label="Email Address" autoComplete="email" autoFocus />
            <TextField margin="normal" onChange={handlePassword} required fullWidth name="password" label="Password" type="password" autoComplete="current-password" />
            <TextField margin="normal" onChange={handleRePassword} required fullWidth name="rePassword" label="Re-Password" type="password" autoComplete="current-password" />
            <FormControlLabel control={<Checkbox value="remember" color="primary" onClick={handleCGUConfirmation} />} label="I accept GCU" />
            <FormControlLabel control={<Checkbox value="remember" color="primary" onClick={handleAgeConfirmation} />} label="13+" />
            <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor: "primary.main" }}>
              {" "}
              Sign Up
            </Button>

            <Grid container>
              <Grid item>
                <LinkRouter to="/login">
                  <Link variant="body2">Have an account? Sign In</Link>
                </LinkRouter>
              </Grid>
            </Grid>

            <Snackbar
              open={error}
              sx={{ width: "100%" }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
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
              <Alert severity="success">{"Success. You can now login"}</Alert>
            </Snackbar>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
