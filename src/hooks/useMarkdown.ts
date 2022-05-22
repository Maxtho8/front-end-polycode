import React, { useEffect, useState } from "react";
import axios from "axios";
import { BUCKET_URL } from "../config";

export default function useMarkdown(id: string) {
  const [markdown, setMarkdown] = useState<any>("");

  React.useEffect(() => {
    console.log(id);
    axios
      .get(BUCKET_URL + "/" + id)
      .then(res => {
        setMarkdown(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return [markdown];
}
