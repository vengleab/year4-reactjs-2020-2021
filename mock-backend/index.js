const express = require('express');
const server = express();

const articles = require('./data/articles.json')

const port = 8080;

server.get("/articles", (req, res)=>{
  res.send(articles.result);
})

server.get("/articles/:id", (req, res)=>{
  const {id} = req.params
  const {result} = articles;
  res.send(result.filter(arc => arc._id === id)[0]);
})

server.listen(port, ()=>{
  console.log("Server is running on port:"+port);
})