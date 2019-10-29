import {Component, CSSProperties} from "react";
import React from "react";
import LoginForm from "../Components/Auth/loginForm";

interface AuthPageProps {
    register: boolean
}

class AuthPage extends Component<AuthPageProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={containerStyle}>
                {this.props.register ?
                    (
                        <>
                            <h1>Inscription</h1>
                            <p>inscr</p>
                        </>
                    ) :
                    (
                        <>
                            <h1>Connexion</h1>
                            <LoginForm/>
                        </>
                    )
                }
            </div>
        )
    }
}

const containerStyle : CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

export default AuthPage;
