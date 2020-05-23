import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { Link as LinktoSomething } from "react-router-dom";
import gql from "graphql-tag";
import "../styles/LoginSignup.css";
import logani from "../animated-svg/landing-page-g animated.svg";

const SIGNUP_MUTATION = gql`
	mutation(
		$email: String!
		$firstName: String!
		$lastName: String!
		$username: String!
		$password: String!
		$answer: String!
	) {
		createUser(
			email: $email
			firstName: $firstName
			lastName: $lastName
			username: $username
			password: $password
			securityAnswer: $answer
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

class SignUp extends Component {
	state = {
		email: "",
		password: "",
		Fname: "",
		Lname: "",
		username: "",
		answer: "",
		emailError: ""
	};

	moveToLogin = () => {
		this.props.history.push(`/login`);
	};

	validateMail = (event) => {
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (reg.test(event.target.value.toLowerCase())) {
			this.setState({
				email: event.target.value,
				emailError: ""
			});

		} else {
			this.setState({
				emailError: "*Enter a valid email",
				email: event.target.value
			});
		}
	};

	render() {
		const {
			login,
			email,
			answer,
			password,
			Fname,
			Lname,
			username
		} = this.state;
		return (
			<div className="LS-App">
				<div className="LS-left">
					<h3> Sign Up</h3>
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
					<div className="FormCenter2">
						<div className="FormField">
							<label className="FormField__Label">
								First Name
							</label>
							<input
								value={Fname}
								onChange={(e) =>
									this.setState({ Fname: e.target.value })
								}
								className="FormField__Input"
								type="text"
								placeholder="Your first name"
							/>
						</div>
						<div className="FormField">
							<label className="FormField__Label">
								Last Name
							</label>
							<input
								value={Lname}
								onChange={(e) =>
									this.setState({ Lname: e.target.value })
								}
								className="FormField__Input"
								type="text"
								placeholder="Your last name"
							/>
						</div>
						<div className="FormField">
							<label className="FormField__Label">Username</label>
							<input
								value={username}
								onChange={(e) =>
									this.setState({ username: e.target.value })
								}
								className="FormField__Input"
								type="text"
								placeholder="Your username"
							/>
						</div>
						<div className="FormField">
							<label className="FormField__Label">
								Email Address
							</label>
							<input
								value={email}
								onChange={this.validateMail}
								className="FormField__Input"
								type="text"
								placeholder="Your email address"
							/>
							<div style={{ color: "red" }}>{this.state.emailError}</div>
						</div>
						<div className="FormField">
							<label className="FormField__Label">
								What is your favourite Subject?
							</label>
							<input
								value={answer}
								onChange={(e) =>
									this.setState({ answer: e.target.value })
								}
								className="FormField__Input"
								type="text"
								placeholder="For security purposes"
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
								placeholder="Choose a safe password"
							/>
						</div>
						<div className="FormField__bottom">
							<Mutation
								mutation={SIGNUP_MUTATION}
								onCompleted={this.moveToLogin}
								onError={(error) => {
									console.log(
										"=>",
										error.graphQLErrors[0].message
									);
									alert(error.graphQLErrors[0].message);
								}}
								variables={{
									email: email,
									firstName: Fname,
									lastName: Lname,
									username: username,
									password: password,
									answer: answer
								}}
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
								to="/login"
								className="FormField__Link"
							>
								Already have an account?
							</LinktoSomething>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;
