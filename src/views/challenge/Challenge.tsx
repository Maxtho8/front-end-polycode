import React, { useEffect } from "react";
import { Grid, Container, Typography, Alert, Button } from "@mui/material";
import AceEditor from "react-ace";
import ExecuteButton from "../../components/buttons/ExecuteButton";
import MuiMarkdown from "mui-markdown";
import { Box } from "@mui/material";
import useCodeRunner from "../../hooks/useCodeRunner";
import useChallenge from "../../hooks/useChallenges";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { Code } from "@mui/icons-material";
import NavBar from "../../components/navigation/NavBar";
import useMarkdown from "../../hooks/useMarkdown";

export default function Challenge() {
  const [langage, setLangage] = React.useState("");
  const [expectedOutput, setExpectedOutput] = React.useState("");
  const [code, setCode] = React.useState<string>("");
  const [runCode, stdout, stderr, statusCode, error] = useCodeRunner(code, langage);
  const [isTestSuccess, setIsTestSuccess] = React.useState(false);
  const [challenge] = useChallenge(window.location.pathname.split("/")[2]);
  const [markdown] = useMarkdown(window.location.pathname.split("/")[2]);

  React.useEffect(() => {
    setExpectedOutput(challenge.expected);
    setLangage(challenge.langage);
  }, [challenge]);

  const handleExecute = () => {
    //@ts-ignore
    runCode();
  };

  const checkOutput = (valueExpected: string) => {
    if (stdout) {
      if (stdout == valueExpected + "\n") {
        setIsTestSuccess(true);
      }
    }
  };

  // when stdout change , check if the output is the expected one
  useEffect(() => {
    checkOutput(expectedOutput);
  }, [stdout]);

  return (
    <>
      <NavBar />
      <Grid container component="main">
        <Grid sx={{ bgcolor: "#363831", color: "white" }} pt={2} item xs={12} md={12} lg={5}>
          <Container sx={{ maxHeight: "calc(100vh - 284px)", overflow: "auto", pb: 4 }}>
            <MuiMarkdown>{markdown}</MuiMarkdown>
          </Container>
        </Grid>
        <Grid position={"relative"} item xs={12} md={12} lg={7}>
          <AceEditor
            onChange={newValue => {
              setCode(newValue);
              console.log(newValue);
            }}
            placeholder="Placeholder Text"
            mode={langage}
            theme="monokai"
            name="blah2"
            fontSize={14}
            width="100%"
            height="calc(100vh - 264px)"
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={code}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
          <Button
            sx={{
              position: "absolute",
              top: "30px",
              right: "20px",
              color: "white",
              backgroundColor: "orange",
            }}
            onClick={handleExecute}
          >
            Execute
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5} pt={3} sx={{ height: "200px", bgcolor: "#272822", color: "white" }}>
          <Container>
            <Typography variant="h6">Test you need to pass:</Typography>
            <Alert severity={isTestSuccess ? "success" : "error"}>Print "Hello World"</Alert>
          </Container>
        </Grid>
        <Grid item xs={7} sx={{ height: "200px", bgcolor: "#2F3129", position: "relative", overflow: "scroll" }}>
          <Box sx={{ bgcolor: "#363831", textAlign: "center", color: "white" }}>Console</Box>
          <Typography sx={{ color: "white" }} m={1}>
            {stdout}
          </Typography>

          <Typography sx={{ color: "red" }} m={1}>
            {stderr}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
