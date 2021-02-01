import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import Chart from '../../components/Chart';
import Profile from '../../components/Profile';
import Widget from '../../components/Widget';
import Card from '@bit/nsebhastian.react_fusejs.card';

class Home extends React.Component {
  state = {};

  componentDidMount() {
    // Get data from server
    // to integrate with server, we often "fetch" or "axios"
    fetch('/articles')
      .then(res=> res)
      .then(res=>{
        // logic
        return res.json()
      })
      .then(articles=>{
        // logic
        this.setState({ articles });
      });
    // const articles = await response.json();
    
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
