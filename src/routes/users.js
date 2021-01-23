const { response } = require("express");
const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

const getTasksOfUser = async (user, idList) => {
  console.log(`Getting tasks of user ${user.username}`);

  // const idListTodo = "5d31bc43e3625c2663823899";

  const response = await fetch(
    `https://api.trello.com/1/members/${user.id}/cards?key=${process.env.KEY}&token=${process.env.TOKEN}&filter=visible`
  );
  const cards = await response.json();

  let cardsResult = [];
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].idList === idList) {
      cardsResult.push(cards[i]);
    }
  }

  return cardsResult;
};

const getUsers = async () => {
  console.log("Getting Users");
  const usersResponse = await fetch(
    `https://api.trello.com/1/boards/ojEiqbeQ/members?key=${process.env.KEY}&token=${process.env.TOKEN}`
  );
  const users = await usersResponse.json();
  for (let i = 0; i < users.length; i++) {
    
    const idList = {
      "todo":"5d31bc43e3625c2663823899",
      "doing":"5d31bc45f4782270e71811a9",
      "terceiros":"5d5209b8f6fcf6703194db3e",
    };
    for (let list in idList) {
      console.log(idList[list])
      const cards = await getTasksOfUser(users[i],idList[list]);
      users[i][list] = cards;
      // users[i].numTodoCards = cards.length;
      
    }
    
  }

  return users;
};

router.get("/", async (req, res) => {
  const users = await getUsers();
  // console.table(list);
  res.render("users", { users: users });
});
module.exports = router;
