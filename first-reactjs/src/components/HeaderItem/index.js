import React from "react";

class HeaderItem extends React.Component {
  render() {
    // const label =this.props.label;
    return <div>{this.props.children}</div>
  }
}

export default HeaderItem;