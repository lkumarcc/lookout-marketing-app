import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Home from './Home' 
import Features from "./Pages/Features"
import Pricing from "./Pages/Pricing"
import ContactUs from "./Pages/ContactUs"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Pages/Pricing/' element={<Home />} />
          <Route path='/Pages/Features/' element={<Home />} />
          <Route path='/Pages/ContactUs/' element={<Home />} />
        </Routes>
    </div>
  );
}

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

export default App;
