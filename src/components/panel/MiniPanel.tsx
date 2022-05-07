import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlayButton from "../buttons/PlayButton";
import { Typography } from "@mui/material";

export default function MiniPanel(props: { title: string; image_url: string }) {
  return (
    <Container>
      <Grid
        container
        component="main"
        sx={{
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
            height: "150px",
          }}
        />
        <PlayButton isMini={true} />
      </Grid>
      <Typography>{props.title}</Typography>
    </Container>
  );
}
