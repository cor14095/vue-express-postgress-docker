const express = require("express");

const database = require("./dbconfig");

// Define app
const app = express();

// Test DB connection.
app.get("/", function (req, res, next) {
  database.raw("SELECT * FROM information_schema.tables WHERE table_name = 'states'")
    .then((result) => {
      res.json({
        message: "Postgress connected.",
        table: result
      })
    }).catch((e) => {
      res.json({
        message: e
      })
    });
});

app.get("/invalid", function (req, res, next) {
  res.json({
    message: "Invalid endpoint."
  })
})

app.get("/states", function (req, res, next) {
  database.raw("SELECT state FROM usa_states")
    .then((result) => {
      let states = []

      // Doing the parsing work in the backend
      result.rows.forEach((value) => {
        states.push(value.state)
      })

      res.json({
        rowCount: result.rowCount,
        rows: states
      });
      console.log(`Request on: /states yielded: ${result.rowCount} results...`)
  })
    .catch((e) => {
      console.log("PostgreSQL not connected");
      console.error(e);
    });
});

app.get("/states/:state", function (req, res, next) {
  database
    .select("state", "population", "counties")
    .from("usa_states")
    .where("state", req.params.state)
    .then((result) => {
      res.json({
        message: "Results from: " + req.params.state,
        detail: result
      });
      console.log(`Request on: /states/${req.params.state} yielded: ${result.detail} results...`)
    })
    .catch((e) => {
      console.log("Failed to query, see logs.");
      console.error(e);
    });
});

app.get("/states/:state/detail", function (req, res, next) {
  database
    .select("*")
    .from(req.params.state.toLowerCase())
    .then((result) => {
      res.json({
        message: "Results from: " + req.params.state,
        stateCounties: result
      });
      console.log(`Request on: /states/${req.params.state}/detail yielded: ${result.rowCount} results...`)
    })
    .catch((e) => {
      console.log("Failed to query, see logs.");
      console.error(e);
    });
});

app.get("/states/:state/detail/sum", function (req, res, next) {
  database
    .from(req.params.state.toLowerCase())
    .sum("population")
    .then((result) => {
      res.json({
        message: "Results from: " + req.params.state,
        populationSum: result
      });
      console.log(`Request on: /states/${req.params.state}/detail/sum yielded: ${result.rowCount} results...`)
    })
    .catch((e) => {
      console.log("Failed to query, see logs.");
      console.error(e);
    });
});

module.exports = app;