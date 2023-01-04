import React from "react";

function Children(props) {
    return (
        <form>
            <h1 className="Children-title">
                {props.title}
            </h1>
            <p className="Children-message">
                {props.message}
            </p>
            {props.children}
        </form>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome to concert, ${this.state.login}!`);
    }

    render() {
        return (
            <Children title="Ticket to The Weeknd concert"
                    message="Email">
                <input value={this.state.login}
                       onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign in!
                </button>
            </Children>
        );
    }

}

export default SignUpDialog;