import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import Chart from '../../components/Chart';
import Profile from '../../components/Profile';
import Widget from '../../components/Widget';
import Card from '@bit/nsebhastian.react_fusejs.card';
import axios from 'axios';
import Request from '../../api/Request';
import ArticleRequest from '../../api/ArticleRequest';

class Home extends React.Component {
  state = {};

  async componentDidMount() {
    // Get data from server
    // to integrate with server, we often "fetch" or "axios"
    // fetch 
    // fetch('/articles')
    //   .then(res=> res)
    //   .then(res=>{
    //     // logic
    //     return res.json()
    //   })
    //   .then(articles=>{
    //     // logic
    //     this.setState({ articles });
    //   });
    // const articles = await response.json();
    
    // axios.get('/articles')
    //   .then(res => {

    //     axios.get('/articles')
    //     .then(res => {
    //        const data = axios.get('/articles')
    //         .then(res => {
    //           return res.data
    //           // this.setState({articles}) // short-cut
    //         })
    //     })


    //     // get data from nested request

    //     return res.data
        
    //     // this.setState({articles}) // short-cut
    //   }).then( articles =>{
    //     this.setState({articles: articles})
    //   })

    // const res = await axios.get('/articles');
    // const articles = await ArticleRequest.getAll();
    // this.setState({articles: articles });

  }

  render() {
    const { articles = [] } = this.state;

    return (
      <Row>
        <Col md={8}>
          {articles.map((article) => (
            <Card
              image={article.imageUrl}
              title={article.title}
              author={article.description}
              url={`/view-article/${article._id}`}
            />
          ))}
        </Col>
      </Row>
    );
  }
}

export default Home;
