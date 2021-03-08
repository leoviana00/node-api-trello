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

