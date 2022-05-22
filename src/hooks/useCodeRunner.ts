import { useEffect, useState } from "react";
import axios from "axios";
import { RUNNER_URL } from "../config";

export default function useCodeRunner(code: string, langage: string) {
  const [stdout, setStdout] = useState<string>("");
  const [stderr, setStderr] = useState<string>("");
  const [statusCode, setStatusCode] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const runCode = () => {
    axios
      .post(RUNNER_URL + "/" + langage, { code })
      .then(res => {
        setStdout(res.data.stdout);
        setStderr(res.data.stderr);
        setError(res.data.status.statusCode);
      })
      .catch(err => {
        setStdout("");
        setStderr("");
        setStatusCode(1);
        setError(true);
      });
  };

  return [runCode, stdout, stderr, statusCode, error];
}
