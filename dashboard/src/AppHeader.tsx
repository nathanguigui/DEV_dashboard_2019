import React from 'react';
import { AuthContext } from "./App";
import { Route, Redirect } from 'react-router-dom';
import NavBar from "./Components/Bar/navBar";
import SideBar from "./Components/Bar/sideBar";
import AuthPage from "./Pages/authPage";

// @ts-ignore
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        window.localStorage.getItem("token") === null && (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export function AppHeader() {
    return (
        <AuthContext.Consumer>
            {context => (
                <>
                    {(context.token) ?
                        <>
                            <NavBar/>
                            <SideBar/>
                        </>
                        :
                        <>
                            <Route path="/login"><AuthPage register={false}/></Route>
                            <Route path="/register"><AuthPage register={true}/></Route>
                            <PrivateRoute exact path="/"><p>yoyo</p></PrivateRoute>
                        </>
                    }

                </>
            )}
        </AuthContext.Consumer>
    );
}
