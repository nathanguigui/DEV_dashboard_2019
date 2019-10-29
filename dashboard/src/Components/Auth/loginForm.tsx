import React, {Component, CSSProperties} from "react";
import {GraphqlClient} from "../../App";
import {LOGIN_MUTATION, LoginMutationData, LoginMutationsVars} from "../../Graphql/Auth/Mutation/Login";
import "../../Styles/outlinedForm.css"

interface LoginFormState {
    email: string,
    password: string,
    valid: boolean,
    error: string
}

class LoginForm extends Component<Object, LoginFormState> {

    constructor(props:Object) {
        super(props);
        this.state = {
            email: "",
            password: "",
            valid: false,
            error: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: any) {
        let tmp: LoginFormState = this.state;
        e.target.name === "email" && (tmp.email = e.target.value);
        e.target.name === "password" && (tmp.password = e.target.value);
        tmp.valid = !!(tmp.email.length && tmp.password.length);
        this.setState(tmp)
    }

    handleSubmit(e:any) {
        e.preventDefault();
        if (this.state.valid) {
            GraphqlClient.mutate<LoginMutationData, LoginMutationsVars>({
                mutation: LOGIN_MUTATION,
                variables: {
                    email: this.state.email,
                    password: this.state.password
                }
            }).then((res) => {
                res.data && res.data.login && window.localStorage.setItem("token", res.data.login.token);
                window.location.href = "/";
            }).catch((res) => {
                this.setState({error: "Informations invalides", valid: false})
            })
        } else
            this.setState({error: "Informations incomplètes"});
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <form style={formStyle}>
                <label className="matter-textfield-outlined">
                    <input placeholder=" " onChange={this.handleChange} type="email" id="email" name="email"/>
                    <span>Email:</span>
                </label>
                <label className="matter-textfield-outlined">
                    <input placeholder=" " onChange={this.handleChange} type="password" id="password" name="password"/>
                    <span>Mot de passe:</span>
                </label>
                <button style={{marginTop: 6, marginBottom: 6}} className="matter-button-contained" type="submit" onClick={this.handleSubmit}>Connexion</button>
                {this.state.error.length !== 0 &&
                <p style={{marginTop: 0, color: "red"}}>{this.state.error}</p>}
            </form>
        );
    }
}

const formStyle : CSSProperties = {
    display: "flex",
    flexDirection: "column",
};

export default LoginForm;
