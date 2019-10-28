import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ApoloClient from 'apollo-boost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import LoginForm from "./Components/Auth/loginForm";
import AuthPage from "./Pages/authPage";
import HomePage from "./Pages/homePage";
import {PrivateRoute} from "./Components/Auth/privateRoute";


const LoginComponent = <AuthPage register={false}/>

const InitialState = {
    token: window.localStorage.getItem("token"),
    search: "Pomme",
    component: LoginComponent,
};

type AuthState = Readonly<typeof InitialState>

export const AuthContext = React.createContext(InitialState);

export const GraphqlClient = new ApoloClient({
  uri: 'http://pastek.space:4000'
});


class App extends Component<object, AuthState> {
    constructor(props:any) {
        super(props);
        this.state = {
            token: window.localStorage.getItem("token"),
            search: "",
            component: LoginComponent,
        };
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
      let tmp = this.state;
      return (
        <AuthContext.Provider value={tmp}>
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
                <Switch>
                  <Route path="/login">
                    <AuthPage register={false}/>
                  </Route>
                  <Route path="/register">
                  </Route>
                  <PrivateRoute path="/" component={HomePage}/>
                </Switch>
              </div>
            </Router>
          </div>
        </AuthContext.Provider>
      );
    }
}

export default App;
