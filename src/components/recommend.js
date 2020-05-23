import React from "react";
import "../styles/recommend.css";
import Button from "react-bootstrap/Button";
import faq from "../animated-svg/faq animated.svg";
import { Link as LinktoSomething } from "react-router-dom";
import { AUTH_TOKEN } from "../Constant";

class Recommendetion extends React.Component {

	handleClick() {
		alert("You must login first!")
	}

	handleQuiz() {

	}
	render() {
		return (
			<div className="main-block-recom">
				<div className="recom-left">
					<img src={faq} alt="" className="faq-g"></img>
				</div>
				<div className="recom-right">
					<div className="main-heading">
						<h1>Get Personalized Courses</h1>
					</div>
					<div className="content">
						<p>Get started answer some questions.</p>
						<LinktoSomething
							className="lkink-asbutton"
							to={
								localStorage.getItem(AUTH_TOKEN)
									? "/recommend"
									: "/login"
							}
							onClick={localStorage.getItem(AUTH_TOKEN)
								? this.handleQuiz
								: this.handleClick}
						>
							Get started
						</LinktoSomething>

					</div>
				</div>
			</div>
		);
	}
}

export default Recommendetion;