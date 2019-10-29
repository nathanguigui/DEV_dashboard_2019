import React, {Component} from 'react';
import './App.css';
import ApoloClient from 'apollo-boost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AuthPage from "./Pages/authPage";
import HomePage from "./Pages/homePage";
import {PrivateRoute} from "./Components/Auth/privateRoute";
import {AppHeader} from "./AppHeader";


const LoginComponent = <AuthPage register={false}/>

const InitialState = {
    token: window.localStorage.getItem("token"),
    search: "",
    component: LoginComponent,
    sidebarDisabled: false
};

type AuthState = Readonly<typeof InitialState>

export const AuthContext = React.createContext(InitialState);

export const GraphqlClient = new ApoloClient({
  uri: 'http://pastek.space:4000'
});


class App extends Component<object, AuthState> {
    constructor(props:any) {
        super(props);
        this.state = InitialState;
        this.handleSidebarDisable = this.handleSidebarDisable.bind(this)
    }

    handleSidebarDisable = () => {
        this.setState({sidebarDisabled: !this.state.sidebarDisabled})
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let appState = this.state;
        return (
            <AuthContext.Provider value={appState}>
                <div className="App">
                    <Router>
                        {AppHeader(this.handleSidebarDisable, this.state.sidebarDisabled)}
                    </Router>
                </div>
            </AuthContext.Provider>
        );
    }
}

export default App;
