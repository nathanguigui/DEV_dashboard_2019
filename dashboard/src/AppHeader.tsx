import React from 'react';
import { AuthContext } from "./App";
import { Route } from 'react-router-dom';
import NavBar from "./Components/Bar/navBar";
import SideBar from "./Components/Bar/sideBar";
import AuthPage from "./Pages/authPage";

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
                        </>
                    }

                </>
            )}
        </AuthContext.Consumer>
    );
}
