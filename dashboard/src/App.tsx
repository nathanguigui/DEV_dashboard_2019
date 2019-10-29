import React, {Component} from 'react';
import './App.css';
import {HttpLink} from 'apollo-boost';
import ApolloClient from "apollo-client";
import {InMemoryCache, NormalizedCacheObject} from "apollo-cache-inmemory";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AuthPage from "./Pages/authPage";
import {ApolloLink, FetchResult, NextLink, Operation} from 'apollo-link';
import HomePage from "./Pages/homePage";
import {PrivateRoute} from "./Components/Auth/privateRoute";
import {AppHeader} from "./AppHeader";
import { Observable } from 'apollo-client/util/Observable';


const request = (operation:Operation) => {
    let token = localStorage.getItem('token');
    operation.setContext({
    headers: {
        Authorization: "Bearer " + token
    }
  });
};

const requestLink = new ApolloLink((operation:Operation, forward?:NextLink): Observable<FetchResult> | null =>
    new Observable(observer => {
        let handle :ZenObservable.Subscription | undefined;
        Promise.resolve(operation)
            .then(oper => request(oper))
            .then(() => {
                handle = forward && forward(operation).subscribe({
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer),
                });
            })
            .catch(observer.error.bind(observer));
        return () => {
            if (handle) handle.unsubscribe();
        };
    })
);

export const GraphqlClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
        requestLink,
        new HttpLink({uri: "http://pastek.space:4000"})
    ])
});

const LoginComponent = <AuthPage register={false}/>;

const InitialState = {
    token: window.localStorage.getItem("token"),
    search: "",
    component: LoginComponent,
    sidebarDisabled: false
};

type AuthState = Readonly<typeof InitialState>

export const AuthContext = React.createContext(InitialState);


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
