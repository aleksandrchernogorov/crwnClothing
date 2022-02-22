import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({email:'', password:''});
    }

    handleChange(e) {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value={this.state.email} type='email' label='email' handleChange={this.handleChange} required />
                    <FormInput name='password' value={this.state.password} type='password' label='password' required handleChange={this.handleChange} />
                    <CustomButton type='submit'> Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}> {' '} {'Sign in with Google'} {' '}</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;