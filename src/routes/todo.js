const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

router.get("/", async (req, res) => {
  const userId = req.query.user;
  const listId = "5d31bc43e3625c2663823899";

  let lists = await fetch(
    `https://api.trello.com/1/lists/${listId}/cards?key=${process.env.KEY}&token=${process.env.TOKEN}`
  );
  let list = await lists.json();

  list.map((idList) => {
    return list[idList.name] = [
      idList.shortLink,
      idList.badges.checkItems,
      idList.badges.checkItemsChecked,
    ];
  });

  res.render("todo", { list: list });
});

module.exports = router;
