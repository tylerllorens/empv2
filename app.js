import express from "express";
const app = express();
export default app;

import employeesRouter from "#api/employees";

app.use(express.json());

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
  res.status(500).send("Sorry, something went wrong :(");
});
