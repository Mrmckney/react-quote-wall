import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateQuote from "./components/CreateQuote";
import QuoteWall from "./components/QuoteWall";
import Login from "./components/Login";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/Signup";
import { useState } from "react";

function App() {

  const [user, setUser] = useState(null)

  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/" style={{textDecoration: "none", color: "white"}}>
                <h1>QuoteWall</h1>
              </Link>
            </li>
            <li>
              <Link to="/quote" style={{textDecoration: "none", color: "white"}}>
                <h4>Add Quote</h4>
              </Link>
            </li>
            <li>
              <Link to="/login" style={{textDecoration: "none", color: "white"}}>
                <h4>Login</h4>
              </Link>
            </li>
            <li>
              <Link to="/signup" style={{textDecoration: "none", color: "white"}}>
                <h4>Sign Up</h4>
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/quote">
            <CreateQuote />
          </Route>
          <Route path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser}/>
          </Route>
          <Route path="/">
            <QuoteWall />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;