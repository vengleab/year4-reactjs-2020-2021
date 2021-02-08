import React, { Component } from 'react'
import Login from '../../pages/Login'

export default class AuthComponent extends Component {
  state = {}

  componentDidMount() {
    // check session/ request whether the site is login or not
    this.setState({
      isLogin: false
    })
  }

  setToken = (token) => {
    console.log('token',  token);
    this.setState({
      isLogin:true,
      token,
    })
  }

  render() {
    const {isLogin} = this.state 
    return (
      isLogin ? (<div>{this.props.children}</div>): <Login setToken={this.setToken}/>
    )
  }
}
