import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlayButton from "../buttons/PlayButton";

export default function MainPanel(props: { title: string; image_url: string }) {
  return (
    <Container>
      <h1>{props.title}</h1>
      <Grid
        container
        component="main"
        sx={{
          height: "50vh",
          position: "relative",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage: `url(${props.image_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
          }}
        />
        <PlayButton />
      </Grid>
    </Container>
  );
}
