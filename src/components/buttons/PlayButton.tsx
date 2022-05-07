import React from "react";
import Button from "@mui/material/Button";

export default function PlayButton(props: { isMini?: boolean }) {
  return (
    <Button
      style={{
        position: "absolute",
        opacity: 0.9,
        bottom: "10px",
        left: "10px",
      }}
      variant="contained"
    >
      {!props.isMini ? "Play this challenge" : "▶︎"}
    </Button>
  );
}
