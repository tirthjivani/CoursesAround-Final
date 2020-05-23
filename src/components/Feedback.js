import React, { Fragment } from "react";
import "../styles/Feedback.css";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";


const SUBMIT_FEEDBACK = gql`
	mutation($email: String!, $name: String!, $message: String!) {
		addFeedback(name: $name, emailId: $email, feedbackField: $message) {
			Addfeedback {
				name
			}
		}
	}
`;

class FeedBack extends React.Component {
	constructor() {
		super();
		this.state = {
			fields: {},
			errors: {}
		};

		this.handleChange = this.handleChange.bind(this);
		this.feedbackForm = this.feedbackForm.bind(this);
	}

	handleChange(e) {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
	}

	feedbackForm(e) {
		e.preventDefault();
		if (this.validateForm()) {
			let fields = {};
			fields["name"] = "";
			fields["emailid"] = "";
			fields["message"] = "";
			this.setState({ fields: fields });
			alert("Your valuable feedback is submitted successfully!");
		}
	}

	validateForm() {
		let fields = this.state.fields;
		let errors = {};
		let formisValidate = true;

		if (!fields["name"]) {
			formisValidate = false;
			errors["name"] = "*Please enter your name in proper format.";
		}

		if (typeof fields["name"] !== "undefined") {
			if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
				formisValidate = false;
				errors["name"] = "*Please enter alphabet characters only.";
			}
		}

		if (!fields["emailid"]) {
			formisValidate = false;
			errors["emailid"] = "*Please enter your email in proper format.";
		}

		if (typeof fields["emailid"] !== "undefined") {
			var pattern = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);
			if (!pattern.test(fields["emailid"])) {
				formisValidate = false;
				errors["emailid"] = "*Please enter valid email-ID.";
			}
		}

		this.setState({
			errors: errors
		});
		return formisValidate;
	}

	render() {
		return (
			<Fragment>
				<div className="feedback-content">
					<p style={{ textAlign: "left" }}>
						Please fill the feedback form below:
					</p>
					<form
						className="feedback-form"
						method="post"
						name="feedbackForm"
						onSubmit={this.feedbackForm}
					>
						<div className="feedback-field">
							<label className="main1">Name:</label>
							<input
								className="feedback-input"
								type="text"
								name="name"
								value={this.state.fields.name}
								placeholder="Enter your name"
								onChange={this.handleChange}
							/>
							<div className="errorMsg">
								{this.state.errors.name}
							</div>
						</div>

						<div className="feedback-field">
							<label className="main1">Email ID:</label>
							<input
								className="feedback-input"
								type="text"
								name="emailid"
								value={this.state.fields.emailid}
								placeholder="Enter your E-mail"
								onChange={this.handleChange}
							/>
							<div className="errorMsg">
								{this.state.errors.emailid}
							</div>
						</div>

						<div className="feedback-field">
							<label className="main1">
								Suggestions/FeedBack:
							</label>
							<textarea
								className="feedback-text"
								placeholder="Enter your query here"
								value={this.state.fields.message}
								onChange={this.handleChange}
								required
							/>
							<div className="errorMsg">
								{this.state.errors.message}
							</div>
						</div>
						<div className="feedback-field">
							<Mutation
								mutation={SUBMIT_FEEDBACK}
								onError={(error) =>
									console.log("this will trigger", error)
								}
								variables={{
									email: this.state.fields.emailid,
									feedbackField: this.state.fields.message,
									name: this.state.fields.name
								}}
							>
								{(mutation, { error }) => {
									console.log(error);
									return (
										<button
											className="btn-submit"
											type="submit"
											onClick={mutation}
										>
											Submit
										</button>
									);
								}}
							</Mutation>
						</div>
					</form>
				</div>
			</Fragment>
		);
	}
}

export default FeedBack;
