import React from "react";
import Container from "@mui/material/Container";
import { CssBaseline, Grid, Paper, Typography } from "@mui/material";
import Logo from "./../../assets/img/logo.png";
import Background from "./../../assets/img/coding.png";
import { theme } from "../theme/DO";
import StartButton from "../../components/buttons/StartButton";
import { Link } from "react-router-dom";

export default function Landingpage() {
  return (
    <Container sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Paper elevation={23} sx={{ overflow: "auto" }}>
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Container sx={{ position: "relative" }}>
              <img width={300} src={Logo} alt="logo" />
            </Container>
          </Grid>
          <Grid mt={4} item xs={12} sx={{ textAlign: "center" }}>
            <Typography sx={{ color: theme.palette.primary.main }} variant="h2">
              The interview cracking platform
            </Typography>
          </Grid>
          <Grid mt={4} p={4} item xs={12} sx={{ textAlign: "center" }}>
            <Typography sx={{}}>
              {" "}
              Nam vulputate aliquam ipsum sit amet pretium. Etiam iaculis luctus turpis, eu malesuada quam luctus in. Maecenas a sapien lectus. Integer laoreet nulla ut massa
              suscipit lacinia. Nunc consectetur lacus eget auctor eleifend. Curabitur id augue quam. Donec egestas sodales nulla, et luctus orci dictum id. In tincidunt tortor eu
              tortor convallis tincidunt. Donec ligula eros, molestie eget maximus non, tincidunt nec libero. Aenean elementum, neque vitae bibendum posuere, tellus nisl semper
              nisl, vel tristique nisi lorem id nisl. Proin leo elit, consequat id nibh eget, consectetur maximus diam.
            </Typography>
          </Grid>
          <Grid mt={4} p={4} item xs={12} sx={{ textAlign: "center" }}>
            <Link to="/login">
              {" "}
              <StartButton />
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
