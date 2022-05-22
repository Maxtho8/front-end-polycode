import React from "react";
import MainPanel from "../../components/panel/MainPanel";
import MiniPanel from "../../components/panel/MiniPanel";
import { Container, Grid, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { theme } from "../../views/theme/DO";
import SpringChallengeImg from "../../assets/img/spring_challenge.png";
import NavBar from "./../../components/navigation/NavBar";
import useChallenge from "../../hooks/useChallenges";
import { Link, useNavigate } from "react-router-dom";
import { BUCKET_URL } from "../../config";

export default function Homepage() {
  const [challenges] = useChallenge();
  const navigate = useNavigate();

  //if don't have token in localStorage redirect to the login page
  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <body>
      <NavBar />
      <CssBaseline />
      <MainPanel title="Spring Challenge 2022" image_url={SpringChallengeImg} />
      <Container style={{ position: "relative" }}>
        <h1>New challenges</h1>
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
          {challenges.map((challenge: any, index: number) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Link to={`/challenge/${challenge.id}`}>
                  <MiniPanel title={challenge.title} image_url={BUCKET_URL + "/" + challenge.img_path} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container style={{ position: "relative" }}>
        <h1>Last viewed</h1>
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
          {challenges
            .filter((challenge: any) => challenge.id === localStorage.getItem("idChall"))
            .map((challenge: any) => {
              return (
                <Grid item xs={12} md={6} lg={4}>
                  <Link to={`/challenge/${challenge.id}`}>
                    <MiniPanel title={challenge.title} image_url={BUCKET_URL + "/" + challenge.img_path} />
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </body>
  );
}
