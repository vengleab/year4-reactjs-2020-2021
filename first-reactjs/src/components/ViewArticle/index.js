import React, { Component } from 'react'
import axios from 'axios';
import ArticleRequest from '../../api/ArticleRequest';

export default class ViewArticle extends Component {
  state = {};

  async componentDidMount() {
    // get article by id from server
    // const id = this.props?.match?.id;
    // const name = this.props?.match?.name;
    const {id} = this.props?.match?.params || {}; // props.match.params??
    // const response = await axios.get(`/articles/${id}`);
    const article = await ArticleRequest.findById(id);
    this.setState({
      article: article
    })
  }

  render() {
    console.log(this.props);
    const {params} = this.props?.match || {}
    const id = 'test-id';
    return (
      <div>
        View Article: id: {params.id} - {JSON.stringify(this.state.article)}
      </div>
    )
  }
}
