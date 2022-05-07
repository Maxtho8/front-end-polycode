import React from "react";
import { Grid, Container, Typography, Alert } from "@mui/material";
import AceEditor from "react-ace";
import ExecuteButton from "../../components/buttons/ExecuteButton";
import MuiMarkdown from "mui-markdown";
import { Box } from "@mui/material";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { bgcolor } from "@mui/system";

export default function Challenge() {
  return (
    <>
      <Grid container component="main">
        <Grid sx={{ bgcolor: "#363831", color: "white" }} pt={2} item xs={12} md={12} lg={5}>
          <Container sx={{ maxHeight: "calc(100vh - 284px)", overflow: "auto" }}>
            <MuiMarkdown>{`## Challenge: Hello World
            console.log() `}</MuiMarkdown>
          </Container>
        </Grid>
        <Grid position={"relative"} item xs={12} md={12} lg={7}>
          <AceEditor
            placeholder="Placeholder Text"
            mode="javascript"
            theme="monokai"
            name="blah2"
            fontSize={14}
            width="100%"
            height="calc(100vh - 264px)"
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={`function onLoad(editor) {
        console.log("i've loaded");
    }`}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
          <ExecuteButton />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5} pt={3} sx={{ height: "200px", bgcolor: "#272822", color: "white" }}>
          <Container>
            <Typography variant="h6">Test you need to pass:</Typography>
            <Alert severity="error">Print "Hello World"</Alert>
          </Container>
        </Grid>
        <Grid item xs={7} sx={{ height: "200px", bgcolor: "#2F3129", position: "relative" }}>
          <Box sx={{ bgcolor: "#363831", textAlign: "center", color: "white" }}>Console</Box>
        </Grid>
      </Grid>
    </>
  );
}
