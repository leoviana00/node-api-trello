## Projeto
Desenvolvimento de uma aplicação para trazer informações do trello

## Executando o app de dentro de um container
`docker run --rm -it -v $(pwd)/:/usr/src/app -p 8085:3000 node:15 bash`

``` bash
yarn install
yarn start
```
## Tecnologias
- docker
- nodejs
- Express
- trello-node-api
- dotenv


## Executando o app de dentro de um container

## Card

### Pegar board de um determinado card
https://api.trello.com/1/cards/<card>/board?key=<key>&token=<token>

### Pegar checklist de um determinado card
https://api.trello.com/1/cards/<card>/checklists?key=<key>&token=<token>

### Pegar informacoes dos itens do checklist de um card
https://api.trello.com/1/cards/<card>/checkItemStates?key=<key>&token=<token>

### Pegar lists de um card
https://api.trello.com/1/cards/<card>/list?key=<key>&token=<token>

## Board

### Pegar determinado card de um board
https://api.trello.com/1/boards/<board>/cards/<card>?key=<key>&token=<token>

### Pegar todos os cards de um board
https://api.trello.com/1/boards/<board>/cards?key=<key>&token=<token>

## Listas
### GetTheBoardAList
https://api.trello.com/1/lists/5fe9dda1034d92360da257a9/board?key=<key>&token=<token>

### GetCardsInAlist
https://api.trello.com/1/lists/5fe9dda1034d92360da257a9/cards?key=<key>&token=<token>


https://api.trello.com/1/cards/<%= idList.shortLink %>/checklists?key=<key>&token=<token>

## Members

### Members
'https://api.trello.com/1/members/<id>/{field}?key=<key>&token=<token>

### Pegar cards de um membro
https://api.trello.com/1/members/<id>/cards?key=<key>&token=<token>


## GetCardsOnBoard
https://api.trello.com/1/boards/{id}/cards?key=<key>&token=<token>

### GetCardsOnBoard - Pegar os cards do quadro DevOps
https://api.trello.com/1/boards/ojEiqbeQ/cards?key=<key>&token=<token>

---
## GetMembersOfABoard
https://api.trello.com/1/boards/{id}/members

### GetMembersOfABoard - Pegando os mebros do quadro devops
https://api.trello.com/1/boards/ojEiqbeQ/members

## GetMembersOfaCards
https://api.trello.com/1/cards/{id}/members?key=<key>&token=<token>

### GetMembersOfaCards - Pegar os membros de um card
https://api.trello.com/1/cards/wvsEwUKD/members?key=<key>&token=<token>

## Get Cards The Members on
https://api.trello.com/1/members/{id}/cards?key=<key>&token=<token>

## Get Cards User
https://api.trello.com/1/members/5c8c18121ea22d351896eac5/cards?key=<key>&token=<token>


## GetCardsInAlist - Pegar os cards de uma lista
https://api.trello.com/1/cards/{id}/list?key=<key>&token=<token>


### Lista Sprint  - Pegando cards da lista sprint
https://api.trello.com/1/lists/5fe9dda1034d92360da257a9/cards?key=<key>&token=<token>

### Lista To Do - Pegando cards da lista To Do
https://api.trello.com/1/lists/5d31bc43e3625c2663823899/cards?key=<key>&token=<token>
### Lista Doing - Pegando cards da lista Doing
https://api.trello.com/1/lists/5d31bc45f4782270e71811a9/cards?key=<key>&token=<token>

### Lista Terceiros - Pegando cards da lista Terceiros
https://api.trello.com/1/lists/5d5209b8f6fcf6703194db3e/cards?key=<key>&token=<token>
