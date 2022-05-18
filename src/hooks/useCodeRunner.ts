import { useEffect, useState } from "react";
import axios from "axios";
import { RUNNER_URL } from "../config";

export default function useCodeRunner() {
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  function runCode(_code: string) {}

  useEffect(() => {
    axios.post(RUNNER_URL, { code }).then(res => setOutput(res.data.output));
  }, [code]);

  return [runCode, output];
}
