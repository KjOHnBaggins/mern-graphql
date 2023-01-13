const express = require("express");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const schema = require("./schema/schema.js");
const connectDB = require("./config/db.js");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log("server port", port));
