import React, {Component, CSSProperties} from "react";
import {GraphqlClient} from "../../App";
import {SIGNUP_MUTATION, SignupMutationData, SignupMutationsVars} from "../../Graphql/Auth/Mutation/Register";
import "../../Styles/outlinedForm.css";

interface RegisterFormState {
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    phone: string,
    valid: boolean,
    error: string
}

class RegisterForm extends React.Component <Object, RegisterFormState>{
    constructor(props: any) {
        super(props);
        this.state = {
            name:  "",
            surname: "",
            email: "",
            password: "",
            address: "",
            phone: "",
            valid: false,
            error: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e:any) {
        let tmp: RegisterFormState = this.state;
        e.target.name === "name" && (tmp.name = e.target.value);
        e.target.name === "surname" && (tmp.surname = e.target.value);
        e.target.name === "email" && (tmp.email = e.target.value);
        e.target.name === "password" && (tmp.password = e.target.value);
        e.target.name === "address" && (tmp.address = e.target.value);
        e.target.name === "phone" && (tmp.phone = e.target.value);
        tmp.valid = !!(tmp.name.length && tmp.surname.length && tmp.email.length && tmp.password.length && tmp.address.length && tmp.phone.length)
        this.setState(tmp)
    }

    handleSubmit(e:any) {
        e.preventDefault();
        if (this.state.valid) {
            GraphqlClient.mutate<SignupMutationData, SignupMutationsVars>({
                mutation:SIGNUP_MUTATION,
                variables: {
                    name: this.state.name,
                    surname: this.state.surname,
                    email: this.state.email,
                    password: this.state.password,
                    address: this.state.address,
                    phone: this.state.phone
                }
            }).then((res) => {
                res.data && res.data.signup && window.localStorage.setItem("token", res.data.signup.token);
                window.location.href = "/"
            })
        } else
            this.setState({error: "Informations incomplètes"});
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <form style={formStyle}>
                <label className="matter-textfield-outlined">
                    <input onChange={this.handleChange} type="name" id="name" name="name" placeholder=" "/>
                    <span>Name:</span>
                </label>
                <label className="matter-textfield-outlined">
                    <input onChange={this.handleChange} type="surname" id="surname" name="surname" placeholder=" "/>
                    <span>surname:</span>
                </label>
                <label className="matter-textfield-outlined">
                    <input onChange={this.handleChange} type="email" id="email" name="email" placeholder=" "/>
                    <span>email:</span>
                </label>
                <label className="matter-textfield-outlined">
                    <input onChange={this.handleChange} type="password" id="password" name="password" placeholder=" "/>
                    <span>password:</span>
                </label>
                <label className="matter-textfield-outlined">
                    <input onChange={this.handleChange} type="address" id="address" name="address" placeholder=" "/>
                    <span>address:</span>
                </label>
                <label className="matter-textfield-outlined">
                    <input onChange={this.handleChange} type="phone" id="phone" name="phone" placeholder=" "/>
                    <span>Phone:</span>
                </label>
                <button style={{marginTop: 6, marginBottom: 12}} className="matter-button-contained" type="submit" onClick={this.handleSubmit}>Register</button>
                {this.state.error.length !== 0 && <p>{this.state.error}</p>}
            </form>
        );
    }
}

const formStyle : CSSProperties = {
    display: "flex",
    flexDirection: "column",
};

export default RegisterForm;
