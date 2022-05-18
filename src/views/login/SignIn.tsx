import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { theme } from "../theme/DO";
import CodingBackground from "./../../assets/img/coding.png";
import Logo from "./../../assets/img/logo.png";
import useLogin from "../../hooks/useLogin";
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignInSide() {
  const [isRegister, setIsRegister] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const response = useLogin(email, password);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (!!response) {
      setError(response.error);
      if (!error) {
      }
    }
  }, [response]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.get("email") as string);
    setPassword(data.get("password") as string);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
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
              Sign {!isRegister ? "In" : "Up"}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
              {isRegister && <TextField margin="normal" required fullWidth name="username" label="Username" type="text" id="username" autoComplete="username" />}
              <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
              <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
              {isRegister && <TextField margin="normal" required fullWidth name="repassword" label="Re-Password" type="password" id="password" autoComplete="current-password" />}
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor: "primary.main" }}>
                Sign {!isRegister ? "In" : "Up"}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={() => setIsRegister(!isRegister)} variant="body2">
                    {!isRegister ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              {error && (
                <Snackbar
                  sx={{ width: "100%" }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  open={error}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert sx={{ bgcolor: "red", color: "white" }} severity="error">
                    {response.errorMessage}
                  </Alert>
                </Snackbar>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
