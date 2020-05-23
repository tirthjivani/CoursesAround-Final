import React, { Component } from "react";
import "../styles/navbar.css";
import logo from "../imgs/logo.png";
import { Link as LinktoSomething } from "react-router-dom";
import { AUTH_TOKEN, USER_NAME } from "../Constant";

const authToken = localStorage.getItem(AUTH_TOKEN);

export default class Navbary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			value: ""
		};
	}

	scrollToTop = () => {
		window.location.href = "/";
	};


	render() {
		return (
			<nav className="navy" id="navbar">
				<div className="nav-content">
					<img
						src={logo}
						className="nav-logo"
						alt="Logo"
						onClick={this.scrollToTop}
					/>
					<ul className="nav-items">
						<li className="nav-item">
							<div className="flex flex-fixed">
								{authToken ? (
									<div className="dropdown">
										<button className="dropbtn">
											{localStorage.getItem(USER_NAME)}  ⌄
										</button>
										<div className="dropdown-content">
											<a href="/recommend">Take Quiz </a>
											<a href="/prev">
												Previous Recommended Courses{" "}
											</a>
											<div
												className="nav-logout"
												onClick={() => {
													localStorage.removeItem(
														AUTH_TOKEN
													);
													console.log(this.props.history);
													window.location.reload(false);
													this.props.history.push(`/`);
												}}
											>
												Logout
											</div>
										</div>
									</div>
								) : (
										<LinktoSomething
											className="Link-asbutton"
											to="/login"
										>
											Login
										</LinktoSomething>
									)}
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}