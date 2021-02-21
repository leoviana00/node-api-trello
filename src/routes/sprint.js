const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

// Listando os cards dentro da lista SPRINT
router.get("/", async (req, res) => {
  let lists = await fetch(
    `https://api.trello.com/1/lists/5fe9dda1034d92360da257a9/cards?key=${process.env.KEY}&token=${process.env.TOKEN}`
  );
  let list = await lists.json();

  list.forEach((idList) => {
    list[idList.name] = [
      idList.shortLink,
      idList.badges.checkItems,
      idList.badges.checkItemsChecked,
    ];
  });
  console.table(list);
  res.render("sprint", { list: list });
});

module.exports = router;
