import React, { Component } from "react";
import { AUTH_TOKEN, USER_NAME } from "../Constant";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Link as LinktoSomething } from "react-router-dom";
import "../styles/LoginSignup.css";
import logani from "../animated-svg/landing-page-g animated.svg";

const SIGNUP_MUTATION = gql`
	mutation(
		$email: String!
		$firstName: String!
		$lastName: String!
		$username: String!
		$password: String!
	) {
		createUser(
			email: $email
			firstName: $firstName
			lastName: $lastName
			username: $username
			password: $password
		) {
			user {
				id
				firstName
				lastName
				username
				password
			}
		}
	}
`;

const TOKEN_MUTATION = gql`
	mutation tokenAuth($username: String!, $password: String!) {
		tokenAuth(username: $username, password: $password) {
			token
			payload
		}
	}
`;

class Login extends Component {
	state = {
		login: true,
		email: "",
		password: "",
		Fname: "",
		Lname: "",
		username: ""
	};

	moveToSignUp = () => {
		this.props.history.push(`/signup`);
	};

	scrollToTop = () => {
		window.location.href = "/";
	};

	render() {
		const { login, email, password, Fname, Lname, username } = this.state;
		return (
			<div className="LS-App">
				<div className="LS-left">
					<h3> Login</h3>
					<h3> To </h3>
					<h1>Courses Around</h1>
					<img src={logani} alt="" className="log-g"></img>
				</div>
				<div className="LS-Form">
					<div className="Go-back-home">
						<a href="/" className="previous round">
							&#8249;
						</a>

						Back to Home
					</div>
					<div className="FormCenter1">
						<div className="FormField">
							<label className="FormField__Label">Username</label>
							<input
								value={username}
								onChange={(e) =>
									this.setState({ username: e.target.value })
								}
								type="text"
								className="FormField__Input"
								placeholder="Enter your username"
							/>
						</div>
						<div className="FormField">
							<label className="FormField__Label">Password</label>
							<input
								value={password}
								onChange={(e) =>
									this.setState({ password: e.target.value })
								}
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										document.getElementById("confirmpress").click();
									}
								}}
								className="FormField__Input"
								type="password"
								placeholder="Enter your password"
							/>
						</div>
						<div className="FormField__bottom">
							<Mutation
								mutation={
									login ? TOKEN_MUTATION : SIGNUP_MUTATION
								}
								onCompleted={
									login
										? (data) => this._confirm(data)
										: (data) => console.log(data)
								}
								onError={(error) => {
									console.log(
										"=>",
										error.graphQLErrors[0].message
									);
									alert(error.graphQLErrors[0].message);
								}}
								variables={
									login
										? { username, password }
										: {
											email: email,
											firstName: Fname,
											lastName: Lname,
											username: username,
											password: password
										}
								}
							>
								{(mutation, { error, data }) => {
									return (
										<button
											className="FormField__Button mr-20"
											id="confirmpress"
											onClick={mutation}
										>
											{login ? "Login" : "SignUp"}
										</button>
									);
								}}
							</Mutation>

							<LinktoSomething
								to="/signup"
								className="FormField__Link"
							>
								Create an account
							</LinktoSomething>


						</div>
						<LinktoSomething
							to="/forgetpwd"
							className="FormField__Link"
						>
							Forgot Password?
						</LinktoSomething>
					</div>
				</div>
			</div>
		);
	}

	_confirm = async (data) => {
		const { token } = data.tokenAuth;
		const { username } = data.tokenAuth.payload;
		this._saveUserData(token, username);
		this.props.history.push(`/`);
		window.location.reload(false);
	};

	_saveUserData = (token, username) => {
		localStorage.setItem(AUTH_TOKEN, token);
		localStorage.setItem(USER_NAME, username);
	};
}

export default Login;
