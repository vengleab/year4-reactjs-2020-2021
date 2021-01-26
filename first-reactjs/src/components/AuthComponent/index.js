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

  render() {
    const {isLogin} = this.state 
    return (
      isLogin ? (<div>{this.props.children}</div>): <Login/>
    )
  }
}
