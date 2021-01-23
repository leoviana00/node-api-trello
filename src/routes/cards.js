const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

router.get("/cards", async (req, res) => {
  let lists = await fetch(
    `https://api.trello.com/1/boards/ojEiqbeQ/cards?key=${key}&token=${token}`
  );
  let list = await lists.json();

  list.forEach((id) => {
    list[id.name] = [id.due, id.labels, id.shortLink];
  });
  console.log(list);
  res.render("cards", { list: list });
});

module.exports = router;
