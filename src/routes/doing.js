const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

// Listando cards dentro da lista Doing
router.get("/", async (req, res) => {
  const idmembers = req.query.idmembers

  let lists = await fetch(
    `https://api.trello.com/1/lists/5d31bc45f4782270e71811a9/cards?key=${process.env.KEY}&token=${process.env.TOKEN}`
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
  res.render("doing", { list: list });
});

module.exports = router;
