"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ListIssue = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    axios.get("/api/issues").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);

  return (
    <div>
      {data?.map((issue: any) => (
        <div key={issue.id}>{issue.title}</div>
      ))}
    </div>
  );
};

export default ListIssue;
