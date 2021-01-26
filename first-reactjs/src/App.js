import './App.css';
import React from 'react';

// easy manage code, prevent production error
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import PostArticle from './pages/PostArticle';
import AuthComponent from './components/AuthComponent';
import ViewArticle from './components/ViewArticle';

const AuthPostArticle = (props) => <AuthComponent><PostArticle {...props}/></AuthComponent>

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // onload after render
  componentDidMount() {
    // alert("On load")
  }

  render() {
    return (
      <>
        <Header/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route exact path="/" component={Home}/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/login" component={Login}/>
          <Route path="/post-article" component={AuthPostArticle}/>
          <Route path="/view-article/:id" component={ViewArticle}/>
        </Switch>
      </>
    );
  }
}

// class components
// export class App extends Component {
//   render() {
//     return <div>Hello</div>
//   }
// }

// export default App;
