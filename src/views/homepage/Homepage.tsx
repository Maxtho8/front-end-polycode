import React from "react";
import MainPanel from "../../components/panel/MainPanel";
import MiniPanel from "../../components/panel/MiniPanel";
import { Container, Grid, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { theme } from "../../views/theme/DO";
import SpringChallengeImg from "../../assets/img/spring_challenge.png";

export default function Homepage() {
  return (
    <body>
      <CssBaseline />
      <MainPanel title="Spring Challenge 2022" image_url={SpringChallengeImg} />
      <Container style={{ position: "relative" }}>
        <h1>Top challenges</h1>
        <Typography
          variant="h6"
          color={theme.palette.primary.main}
          sx={{
            position: "absolute",
            top: "10px",
            right: "25px",
            //color from theme
          }}
        >
          {"View more >"}
        </Typography>
        <Grid container spacing={1}>
          <Grid item md={3} sm={6} xs={12}>
            <MiniPanel title="Spring Challenge 2022" image_url="https://source.unsplash.com/random/400x400?nature,water" />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <MiniPanel title="Spring Challenge 2022" image_url="https://source.unsplash.com/random/400x400?nature,water" />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <MiniPanel title="Spring Challenge 2022" image_url="https://source.unsplash.com/random/400x400?nature,water" />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <MiniPanel title="Spring Challenge 2022" image_url="https://source.unsplash.com/random/400x400?nature,water" />
          </Grid>
        </Grid>
      </Container>
      <Container style={{ position: "relative" }}>
        <h1>Last challenge</h1>
        <Typography
          variant="h6"
          color={theme.palette.primary.main}
          sx={{
            position: "absolute",
            top: "10px",
            right: "25px",
            //color from theme
          }}
        >
          {"View more >"}
        </Typography>
        <Grid container item spacing={1}>
          <Grid item md={3} sm={6} xs={12}>
            <MiniPanel title="Spring Challenge 2022" image_url="https://source.unsplash.com/random/400x400?nature,water" />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <MiniPanel title="Spring Challenge 2022" image_url="https://source.unsplash.com/random/400x400?nature,water" />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <MiniPanel title="Spring Challenge 2022" image_url="https://source.unsplash.com/random/400x400?nature,water" />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <MiniPanel title="Spring Challenge 2022" image_url="https://source.unsplash.com/random/400x400?nature,water" />
          </Grid>
        </Grid>
      </Container>
    </body>
  );
}
