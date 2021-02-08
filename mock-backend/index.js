const express = require('express');
const server = express();
server.use(require('body-parser').json())
const token = require('./data/login.json')

const articles = require('./data/articles.json')

const port = 8080;

server.get("/articles", (req, res)=>{
  res.send(articles.result);
})

server.post("/articles", (req, res)=>{
  const {imageUrl, description, title} = req.body;
  const newArticle = {imageUrl, description, title};
  articles.result.push(newArticle);
  res.send(newArticle);
})

server.post("/login", (req, res)=>{
  const {user, password} = req.body;
  if( user==="admin" && password==="admin") {
    res.send(token.result);
  }
  res.status(401).send();
})

server.get("/articles/:id", (req, res)=>{
  const {id} = req.params
  const {result} = articles;
  res.send(result.filter(arc => arc._id === id)[0]);
})

server.listen(port, ()=>{
  console.log("Server is running on port:"+port);
})