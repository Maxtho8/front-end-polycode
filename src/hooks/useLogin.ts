import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../config";

interface User {}
export default function useLogin(email: string, password: string) {
  // response state
  const [response, setResponse] = useState<any>({ data: null, error: false, errorMessage: null });

  useEffect(() => {
    if (email != "" && password != "") {
      axios
        .post(API_URL + "/auth/login", { email, password })
        .then(res => {
          setResponse({ data: res.data, error: false, errorMessage: null });
        })
        .catch(err => {
          setResponse({ data: null, error: true, errorMessage: err.response.data.message });
        });
    }
  }, [email, password]);

  return response;
}
