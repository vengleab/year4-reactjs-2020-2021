import React from 'react';
import {Button, Row, Col} from 'react-bootstrap';
import {Link, Route, Switch} from 'react-router-dom';
import Chart from '../../components/Chart'
import Profile from '../../components/Profile'
import Widget from '../../components/Widget'
 
const Home = (props) => {
  const currentPath ='/dashboard';
  console.log({props});
  return <Row>
  <Col md={3}>
    <Link to={`${currentPath}/chart`}><Button block title="Chart">Chart</Button></Link> 
    <Link to={`${currentPath}/widget`}><Button block >Widget</Button></Link>
    <Link to={`${currentPath}/profile`}><Button block>Profile</Button></Link>
  </Col>
  <Col md={9}>
    <Switch>
      <Route path={`${currentPath}/chart`} component={Chart} />
      <Route path={`${currentPath}/widget`} component={Widget} />
      <Route path={`${currentPath}/profile`} component={Profile} />
    </Switch>
  </Col>
</Row>;
};


export default Home;