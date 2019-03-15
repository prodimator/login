import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import axios from 'axios';

import './login.scss';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitButton = this.submitButton.bind(this);
        this.displayError = this.displayError.bind(this);
        this.clearErrorMessage = this.clearErrorMessage.bind(this);

    }

    handleUserChange(event) {
        this.setState({
            username: event.target.value,
        });
        this.clearErrorMessage();
    }
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value,
        });
        this.clearErrorMessage();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.displayError();
    }

    submitButton() {
        axios.get(`https://api.github.com/users/${this.state.username}`)
            .then(response => console.log(response))
    }

    displayError() {
        this.setState({ error: 'Your credentials are incorrect!' });
    }

    clearErrorMessage() {
        this.setState({ error: '' });
    }


    render() {
        return (
            <Row className="login-component" center="md" middle="lg">
                <Col md={4}>
                    <div className="login-container">
                        <p className="login-header title">Sign In</p>
                        <div className="username-entry">
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" value={this.state.username} onChange={this.handleUserChange} placeholder="Username" />
                            </form>
                        </div>
                        <div className="password-entry">
                            <form onSubmit={this.handleSubmit}>
                                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" />
                            </form>
                        </div>
                        <div className="submit">
                            <button onClick={this.submitButton}>
                                Submit
                            </button>
                        </div>
                        <div className="error-message">
                            {this.state.error}
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}
