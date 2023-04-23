const express = require("express");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");
const User = require("./models/User");
const shop = require("./routes/friends")
const dares = require('./routes/dares');

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

// /**
//  * Router Middleware
//  * Router - /user/*
//  * Method - *
//  */
app.use("/user", user);
app.use("/friends", shop);
app.use('/dares', dares);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
