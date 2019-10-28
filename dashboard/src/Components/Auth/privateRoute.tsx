import { AuthContext } from "../../App";
import React from "react";
import { RouteProps, Route, Redirect } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
    component: any
}

export function PrivateRoute(props: PrivateRouteProps) {
    const { component: Component, ...rest } = props;
    return (
        <AuthContext.Consumer>
            {context => (
                <>
                    {(context.token) ?
                        (<Route
                            {...rest}
                            render={props =>
                                <Component {...props} />
                            }
                        />)
                        :
                        (<Route
                            {...rest}
                            render={props =>
                                <Redirect to={{
                                    pathname: "/login",
                                    state: { from: props.location }
                                }
                                }/>
                            }
                        />)
                    }

                </>
            )}
        </AuthContext.Consumer>
    );
}
