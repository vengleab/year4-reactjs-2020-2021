import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';
import {Link, Route, Switch} from 'react-router-dom';
import Chart from '../../components/Chart'
import Profile from '../../components/Profile'
import Widget from '../../components/Widget'
import Card from '@bit/nsebhastian.react_fusejs.card';
 
const Home = (props) => {
  return <Row>
  <Col md={8}>
  <Card  
		image="https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg"
		title="Steve Jobs"
		author="Walter Isaacson"
		url="/view-article/12345"
	/>
  </Col>
</Row>;
};


export default Home;