const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

// Listando tarefas dos cards dentro da lista
router.use("/", async (req, res) => {
  const cardid = req.query.cardid;

  let checklists = await fetch(
    `https://api.trello.com/1/cards/${cardid}/checklists?key=${process.env.KEY}&token=${process.env.TOKEN}`
  );
  let resp = await checklists.json();

  // const count = resp[0].length;
  resp[0].checkItems.forEach((checkItems) => {
    resp[checkItems.name] = [checkItems.state, checkItems.shortLink];
  });

  console.table(resp);
  res.render("tarefas", { resp: resp });
  // res.send(resp);
});
module.exports = router;
