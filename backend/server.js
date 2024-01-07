// const express = require("express");
import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.status(200).send("sever is  running ");
// });

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "first Title",
    },
    {
      id: 2,
      title: "second Title",
    },
    {
      id: 3,
      title: "third Title",
    },
    {
      id: 4,
      title: "fourth Title",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`serve at http://localhost:${port}`);
});
