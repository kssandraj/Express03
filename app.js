require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.APP_PORT ?? 5001;

const usersHandlers = require("./usersHandlers");

app.use(express.json());

app.get("/api/users", usersHandlers.getUsers);
app.get("/api/users/:id", usersHandlers.getUsersById);

app.post("/api/users", usersHandlers.postUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
