import {Component, CSSProperties} from "react";
import React from "react";
import LoginForm from "../Components/Auth/loginForm";
import Background from "../../public/background.jpg"
import OnOffSwitch from "../Components/miniComponent/onOffSwitch";

interface AuthPageProps {
    register: boolean
}

interface AuthPageState {
    register: boolean
}

class AuthPage extends Component<AuthPageProps, AuthPageState> {
    constructor(props: AuthPageProps) {
        super(props);
        this.state = {
            register: this.props.register
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e: any) => {
        this.setState({register: !this.state.register})
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={containerStyle}>
                <div style={formContainerStyle}>
                    {this.state.register ?
                        <>
                            <h1>Inscription</h1>

                        </>
                        :
                        <>
                            <h1>Connexion</h1>
                            <LoginForm/>
                        </>
                    }
                    <OnOffSwitch label={!this.state.register ? "Switch to register" : "Switch to login"} checked={this.state.register} onClick={this.handleChange} />
                </div>
            </div>
        )
    }
}

const containerStyle : CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundImage: `url(/background.jpg)`
};

const formContainerStyle : CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backgroundSize: "cover",
    padding: "2rem 4rem 2rem 4rem",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    WebkitBoxShadow:"0px 10px 5px 0px rgba(50, 50, 50, 0.75)",
    MozBoxShadow:"0px 10px 5px 0px rgba(50, 50, 50, 0.75)",
    boxShadow:"0px 10px 5px 0px rgba(50, 50, 50, 0.75)"
};

export default AuthPage;
