import React from "react";

class HeaderItem extends React.Component {
  render() {
    const label =this.props.label;
    return <div>{label}</div>
  }
}

export default HeaderItem;