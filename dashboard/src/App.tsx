import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApoloClient from 'apollo-boost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


export const GraphqlClient = new ApoloClient({
  uri: 'http://pastek.space:4000'
});

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/register">register</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
            </Route>
            <Route path="/register">
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
