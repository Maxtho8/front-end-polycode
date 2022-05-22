import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

export default function useChallenge(id?: string) {
  const [challenges, setChallenges] = useState<any>([]);

  React.useEffect(() => {
    axios
      .get(API_URL + "/challenge" + (id ? "/" + id : ""))
      .then(res => {
        setChallenges(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return [challenges];
}
