import React from 'react'

export default class Chart extends React.Component {

  constructor(props){
    super(props);
    console.log('constructor');

    // set default state or map data from props
    this.state = {
      body: 'Chart Component -------'
    }
  }

  // deprecated, not recommend to use
  componentWillMount(){
    console.log('componentWillMount')
  }

  // modify state
  componentDidMount(){
    console.log('componentDidMount')
    alert('Updating chart')
    this.setState({
      body: 'Update chart component'
    })
  }


  //============== Updating life cycle

  // not recommend to use, since will face a lot of bug
  shouldComponentUpdate() {
    alert('shouldComponentUpdate chart')
    console.log('shouldComponentUpdate')
    return false;
  }

  componentWillUpdate(){
    alert('componentWillUpdate chart')
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    alert('componentDidUpdate chart')
    console.log('componentDidUpdate')
  }

// ============ unmount

  componentWillUnmount() {
    alert('componentWillUnMount')
    console.log('componentWillUnMount')
  }

  render(){
    const { body } = this.state;
    console.log('render');
    return <div>{body}</div>
  }

}
