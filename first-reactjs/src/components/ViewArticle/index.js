import React, { Component } from 'react'

export default class ViewArticle extends Component {

  componentDidMount() {
    // get article by id from server
    this.setState({
      article: {}
    })
  }

  render() {
    console.log(this.props);
    const {params} = this.props?.match || {}
    const id = 'test-id';
    return (
      <div>
        View Article: id: {params.id}
      </div>
    )
  }
}
