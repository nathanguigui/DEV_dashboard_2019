import React from 'react';
import { AuthContext } from "../App";
import { Route, Redirect } from 'react-router-dom';
import NavBar from "./Bar/navBar";
import SideBar from "./Bar/sideBar";
import AuthPage from "../Pages/authPage";

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

export function AppHeader(disableSidebar: () => void, sidebarDisabled: boolean, switchWidgetMenu: (val:boolean) => void, widgetMenu: boolean) {
    return (
        <AuthContext.Consumer>
            {context => (
                <>
                    {(context.token) ?
                        <>
                            <NavBar sidebarDisabled={sidebarDisabled} disableSidebar={disableSidebar} switchWidgetMenu={switchWidgetMenu} widgetMenuOpened={widgetMenu}/>
                            <SideBar sidebarDisabled={sidebarDisabled} switchWidgetMenu={switchWidgetMenu} widgetMenuOpened={widgetMenu}/>
                        </>
                        :
                        <>
                            <Route path="/login"><AuthPage register={false}/></Route>
                            <Route path="/register"><AuthPage register={true}/></Route>
                            <PrivateRoute exact path="/"><p>redirecting...</p></PrivateRoute>
                        </>
                    }

                </>
            )}
        </AuthContext.Consumer>
    );
}
