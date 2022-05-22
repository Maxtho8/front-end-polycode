import React from "react";
import Button from "@mui/material/Button";

export default function ExecuteButton() {
  return (
    <Button
      style={{
        position: "absolute",
        opacity: 0.9,
        top: "30px",
        right: "20px",
        backgroundColor: "orange",
      }}
      variant="contained"
    >
      Execute code
    </Button>
  );
}
