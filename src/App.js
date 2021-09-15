import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateQuote from "./components/CreateQuote";
import QuoteWall from "./components/QuoteWall";
import Login from "./components/Login";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
                <h4>User</h4>
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/quote">
            <CreateQuote />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <QuoteWall />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;