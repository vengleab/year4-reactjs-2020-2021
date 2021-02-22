import React, { Component } from 'react'
import Login from '../../pages/Login'
import {connect} from 'react-redux';

// class AuthComponent extends Component {
//   state = {}

//   componentDidMount() {
//     // check session/ request whether the site is login or not
//     this.setState({
//       isLogin: false
//     })
//   }

//   setToken = (token) => {
//     // console.log('token',  token);
//     // this.setState({
//     //   isLogin:true,
//     //   token,
//     // })
//   }

//   render() {
//     // const {isLogin} = this.state 
//     return (
//       this.props.authenticated ? (<div>{this.props.children}</div>): <Login setToken={this.setToken}/>
//     )
//   }
// }

const AuthComponent = (props) => {
  console.log(props);
  return props.authenticated ? (<div>{props.children}</div>): <Login/>
}

const mapStateToProps = (state) => {
  console.log('redux state',state);
  return {
    authenticated: state?.auth?.isLogin
  }
}

export default connect(mapStateToProps)(AuthComponent);
