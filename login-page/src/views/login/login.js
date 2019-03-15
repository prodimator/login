import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";

import './login.scss';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitButton = this.submitButton.bind(this);
        this.displayError = this.displayError.bind(this);
        this.clearErrorMessage = this.clearErrorMessage.bind(this);

    }

    handleChange(event) {
        this.setState({
            username: event.target.username,
            password: event.target.password
        });
        this.clearErrorMessage();
    }

    handleSubmit(event) {
        this.displayError();
    }

    submitButton(event) {
        this.displayError();
    }

    displayError(){
        this.setState({error: 'Your credentials are incorrect!'});
    }
    clearErrorMessage(){
        this.setState({error: ''});
    }

    render() {
        return (
            <Row className="login-component" center="md" middle="lg">
                <Col md={4}>
                    <div className="login-container">
                        <p className="login-header">Sign In</p>
                        <div className="username-entry">
                            <input type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
                        </div>
                        <div className="password-entry">
                            <input type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
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
