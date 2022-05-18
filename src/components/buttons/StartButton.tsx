import React from "react";
import Button from "@mui/material/Button";
import { theme } from "../../views/theme/DO";

export default function StartButton(props: { isMini?: boolean }) {
  return (
    <Button
      sx={{
        backgroundColor: "orange",
        fontSize: "20px",
        padding: "10px",
      }}
      variant="contained"
    >
      {"Start"}
    </Button>
  );
}
