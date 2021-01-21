const express = require('express')
const app = express()
require('dotenv').config()
const fetch = require('node-fetch');
var path = require('path');
const port = 3000
const key = (process.env.KEY)
const token = (process.env.TOKEN)

app.set('views','./src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



app.get("/actuator/health", (req, res) =>{
  res.send({
      "Titulo":"Sprints Informations", 
      "Versão": "0.1.0",
      "Status": "UP!"
  });
})

app.get('/', async (req, res) => {  
  res.render('index');

});

// Listando os cards dentro da lista SPRINT
app.get('/trello', async (req, res) => {

  let lists = await fetch(`https://api.trello.com/1/lists/5fe9dda1034d92360da257a9/cards?key=${key}&token=${token}`);
  let list = await lists.json();

  list.forEach((idList) => {
  list[idList.name] = [idList.shortLink, idList.badges.checkItems, idList.badges.checkItemsChecked]
  });
  console.table(list);
  res.render('trello', {list: list});

});

// Listando tarefas dos cards dentro da lista
app.use('/tarefas', async (req, res) => {
  console.log(req.query)
  const cardid = req.query.cardid
  let checklists = await fetch(`https://api.trello.com/1/cards/${cardid}/checklists?key=${key}&token=${token}`);
  let resp = await checklists.json();
  // const count = resp[0].length;
  resp[0].checkItems.forEach((checkItems) => {
  resp[checkItems.name] = [checkItems.state, checkItems.shortLink]
  });

  console.table(resp);
  res.render('tarefas', {resp: resp});
  // res.send(resp);
});

app.get('/cards', async (req, res) => {

  let lists = await fetch(`https://api.trello.com/1/boards/ojEiqbeQ/cards?key=${key}&token=${token}`);
  let list = await lists.json();

  list.forEach((id) => {
  list[id.name] = [ id.due, id.labels, id.shortLink ]
  });
  console.log(list);
  res.render('cards', {list: list});

});


app.listen(port, (erro) => {
  if(erro){
      console.log("Ocorreu um erro");
  }else{
      console.log(`Servidor rodando em: http://localhost:${port}`);
  }
});


