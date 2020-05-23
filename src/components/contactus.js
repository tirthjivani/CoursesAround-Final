import React from "react";
import { IoMdMail } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import img1 from "../imgs/img1.svg";
import img2 from "../imgs/img2.svg";
import img3 from "../imgs/img3.svg";
import "../styles/contactus.css";
import FeedBack from "./Feedback";
import cont from "../animated-svg/contact animated.svg";

class Contactus extends React.Component {
	constructor() {
		super();
		this.state = {
			fields: {},
			errors: {}
		};

		this.handleChange = this.handleChange.bind(this);
		this.contactForm = this.contactForm.bind(this);
	}

	handleChange(e) {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
	}

	contactForm(e) {
		e.preventDefault();
		if (this.validateForm()) {
			let fields = {};
			fields["name"] = "";
			fields["emailid"] = "";
			fields["message"] = "";
			this.setState({ fields: fields });
			alert("Your query is submitted");
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

		if (fields["message"] == null) {
			formisValidate = false;
			errors["message"] = "*Please enter your suggestions or queries.";
		}

		this.setState({
			errors: errors
		});
		return formisValidate;
	}

	render() {
		return (
			<div className="main-block-contact">
				<h1 className="contact-heading">Contact Us</h1>
				<div className="contact-info">
					<div className="contact-left">
						<img src={cont} alt="" className="cont-g"></img>
					</div>
					<div className="contact-right">
						<FeedBack />
					</div>
				</div>
				<div className="contact-bottom">
					<i
						style={{
							cursor: "pointer",
							fontSize: "30px",
							margin: "10px",
							width: "fit-content"
						}}
						onClick={this.icon1click}
					>
						<img src={img1} />
					</i>
					<i
						style={{
							cursor: "pointer",
							fontSize: "35px",
							margin: "10px",
							width: "fit-content"
						}}
						onClick={this.icon2click}
					>
						<img src={img2} />
					</i>
					<i
						style={{
							cursor: "pointer",
							fontSize: "30px",
							margin: "10px",
							width: "fit-content"

						}}
						onClick={this.icon3click}
					>
						<img src={img3} />
					</i>

				</div>
				<div className="copy-right">
					<p onClick={() => {
						window.location.href = "/";
					}}> Copyright © 2020 All rights reserved | CoursesAround </p>
				</div>
			</div>
		);
	}

	icon1click = () => {
		window.open("mailto:coursesaround@gmail.com");
	};

	icon2click = () => {
		window.open("https://www.linkedin.com/company/coursesaround/");
	};

	icon3click = () => {
		window.open("https://instagram.com/coursesaround?igshid=1hkmrojdxjygr");
	};
}

export default Contactus;