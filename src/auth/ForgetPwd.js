import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { Link as LinktoSomething } from "react-router-dom";
import logani from "../animated-svg/landing-page-g animated.svg";
import gql from "graphql-tag";

const CHANGE_PASSS = gql`
	mutation($answer: String!, $username: String!, $password: String!) {
		changePassword(
			newPassword: $password
			username: $username
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

class Forget extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			answer: "",
			password: "",
			password2: "",
			errorPass: ""
		};
	}

	moveToLogin = () => {
		window.location.href = "/login";
	};

	onPassVerify = (event) => {
		if (event.target.value === this.state.password) {
			this.setState({
				password2: event.target.value,
				errorPass: ""
			})
		}
		else {
			this.setState({
				password2: event.target.value,
				errorPass: "*Enter same password"
			})
		}
	};

	render() {
		const { answer, password, username, password2 } = this.state;
		return (
			<div className="LS-App">
				<div className="LS-left">
					<h3> Welcome</h3>
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
							<label className="FormField__Label">
								User Name
							</label>
							<input
								name="username"
								value={username}
								onChange={(e) =>
									this.setState({
										username: e.target.value
									})
								}
								className="FormField__Input"
								type="text"
								placeholder="Your username"
								required
							/>
						</div>
						<div className="FormField">
							<label className="FormField__Label">
								What is your favourite Subject?
							</label>
							<input
								value={answer}
								onChange={(e) =>
									this.setState({
										answer: e.target.value
									})
								}
								className="FormField__Input"
								type="text"
								placeholder="For security purposes"
							/>
						</div>

						<div className="FormField">
							<label className="FormField__Label">Password</label>
							<input
								name="password"
								value={password}
								onChange={(e) =>
									this.setState({
										password: e.target.value
									})
								}
								className="FormField__Input"
								type="password"
								placeholder="Choose a safe password"
								required
							/>
						</div>
						<div className="FormField">
							<label className="FormField__Label">
								Confirm Password
							</label>
							<input
								name="password"
								value={password2}
								onChange={this.onPassVerify}
								className="FormField__Input"
								type="password"
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										document.getElementById("confirmpress").click();
									}
								}}
								placeholder="Confirm your password"
								required
							/>
							<div style={{ color: "red" }}>{this.state.errorPass}</div>
						</div>

						<div className="FormField__bottom">
							<Mutation
								mutation={CHANGE_PASSS}
								onCompleted={this.moveToLogin}
								onError={(error) => {
									console.log(
										"=>",
										error.graphQLErrors[0].message
									);
									alert(error.graphQLErrors[0].message);
								}}
								variables={{
									answer: answer,
									username: username,
									password: password
								}}
							>
								{(mutation, { error, data }) => {
									return (
										<button
											className="FormField__Button mr-20"
											id="confirmpress"
											onClick={(this.onSubmit, mutation)}
										>
											Submit
										</button>
									);
								}}
							</Mutation>
						</div>
						<LinktoSomething
							to="/login"
							className="FormField__Link"
						>
							Remembered you account?
						</LinktoSomething>
					</div>
				</div>
			</div>
		);
	}
}

export default Forget;