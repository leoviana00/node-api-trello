const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();

const port = process.env.PORT | 3000;

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const sprint = require("./src/routes/sprint");
const todo = require("./src/routes/todo");
const doing = require("./src/routes/doing");
const users = require("./src/routes/users");
const terceiros = require("./src/routes/terceiros");
const tarefas = require("./src/routes/tarefas");
const cards = require("./src/routes/cards");

app.use("/sprint", sprint);
app.use("/todo", todo);
app.use("/doing", doing);
app.use("/users", users);
app.use("/terceiros", terceiros);
app.use("/tarefas", tarefas);
app.use("/cards", cards);

app.get("/actuator/health", (req, res) => {
  res.send({
    Titulo: "Sprints Informations",
    Versão: "0.1.0",
    Status: "UP!",
  });
});

app.get("/", async (req, res) => {
  res.render("index");
});

app.listen(port, (erro) => {
  if (erro) {
    console.log("Ocorreu um erro");
  } else {
    console.log(`Servidor rodando em: http://localhost:${port}`);
  }
});
