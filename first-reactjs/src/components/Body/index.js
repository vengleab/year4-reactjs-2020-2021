import React from 'react';
import './body.scss';

const content = {
  "introduction": `What is HTML?
  HTML stands for Hyper Text Markup Language
  HTML is the standard markup language for creating Web pages
  HTML describes the structure of a Web page
  HTML consists of a series of elements
  HTML elements tell the browser how to display the content
  HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.`,
  "css": `What is CSS?
  Cascading Style Sheets (CSS) is used to format the layout of a webpage.
  
  With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!`,
  "basic": `HTML Documents
  All HTML documents must start with a document type declaration: <!DOCTYPE html>.
  
  The HTML document itself begins with <html> and ends with </html>.
  
  The visible part of the HTML document is between <body> and </body>.`
}

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: content.introduction
    }
    this.updateContentCSS = this.updateContentCSS.bind(this);
  }

  // dynamic binding
  updateContent(topic) {
    // update state
    // this.state = {
    //   content: content.css,
    // }

    this.setState({
      content: topic
    })
  }


  // constructor binding
  updateContentCSS() {
    this.setState({
      content: content.css
    })
  }

  // arrow function binding
  updateContentBasic = ()=>{
    this.setState({content: content.basic})
  }

  render() {
    return (<div style={{marginTop: '30px'}}>
      <div className="panel">
        <div className="panel-item" onClick={this.updateContent.bind(this, content.introduction)}>
          Introduction
        </div>
        <div className="panel-item" onClick={this.updateContentBasic}>
          Basic
        </div>
        <div className="panel-item" onClick={this.updateContentCSS}>
          CSS
        </div>
      </div>
      <div className="context">
        {this.state.content}
      </div>

    </div>)
  }
}

export default Body;