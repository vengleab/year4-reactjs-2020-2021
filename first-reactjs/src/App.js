import "./App.css";
import Head from "./components/Header";
import Body from "./components/Body";
import HeaderItem from "./components/HeaderItem";
import React from "react";
import Button from "react-bootstrap/Button";
// easy manage code, prevent production error
// import 'bootstrap/dist/css/bootstrap.min.css';

// functional component
// function App() {
//   return <div>Hello world</div>
// }

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.emailInputRef = React.createRef();
  }

  // onload after render
  componentDidMount() {
    // alert("On load")
    this.emailInputRef.current.focus();
    console.log("emailInputRef", this.emailInputRef.current.value);
  }

  render() {
    const val = {
      active: true,
      text: "value"
    };
    return (
      <>
        <Head>
          <HeaderItem active={val.active} text={val.text}>Home</HeaderItem>
          <HeaderItem {...val}>Home</HeaderItem>
          {/* <HeaderItem label="Home" active/>*/}
          <HeaderItem>Contact Us</HeaderItem>
          <HeaderItem>About Us</HeaderItem>
          <Button
            style={{ float: "right" }}
            className="float-end"
            variant="danger"
          >
            Login
          </Button>
        </Head>
        {/* <Body/> */}
        <div style={{ marginTop: "10px" }}>Login</div>
        <div>
          <label for="email">Email</label>
          <input ref={this.emailInputRef} name="email" value="vengleab@g.com" />
        </div>
        <div>
          <label for="password">Password</label>
          <input name="password" />
        </div>
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
