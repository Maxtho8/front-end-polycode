import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../config";

interface User {}
export default function useRegister(username: string, email: string, password: string) {
  // response state
  const [response, setResponse] = useState<any>({ data: null, error: false, errorMessage: null });

  const sendRequest = () => {
    if (email != "" && password != "" && username != "") {
      axios
        .post(API_URL + "/auth/register", { username, email, password })
        .then(res => {
          setResponse({ data: res.data, error: false, errorMessage: null });
        })
        .catch(err => {
          setResponse({ data: null, error: true, errorMessage: err.response.data.message });
        });
    }
  };

  return [response, sendRequest];
}
