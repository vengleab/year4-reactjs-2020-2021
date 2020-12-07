import './App.css';
import Head from './components/Header'

// functional component
// function App() {
//   return <div>Hello world</div>
// }

export const App = () => {
  return (
    <>
      <Head/>
      <div>Body</div>
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