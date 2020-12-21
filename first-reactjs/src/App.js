import './App.css';
import Head from './components/Header'
import Body from './components/Body'
import HeaderItem from './components/HeaderItem'

// functional component
// function App() {
//   return <div>Hello world</div>
// }

export const App = () => {
  return (
    <>
      <Head>
        <HeaderItem active>Home</HeaderItem>
        {/* <HeaderItem label="Home" active/>*/}
        <HeaderItem>Contact Us</HeaderItem>
        <HeaderItem>About Us</HeaderItem>
      </Head>
      <Body/>
    </>
  )
}

// class components
// export class App extends Component {
//   render() {
//     return <div>Hello</div>
//   }
// }

// export default App;