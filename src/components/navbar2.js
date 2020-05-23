import React, { Component } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";
import logo from "../imgs/logo.png";
import { AUTH_TOKEN, USER_NAME } from "../Constant";
import { Link as LinktoSomething } from "react-router-dom";

const authToken = localStorage.getItem(AUTH_TOKEN);

export default class Navbarx2 extends Component {

	scrollToTop = () => {
		window.location.href = "/";
	};

	render() {
		return (
			<nav className="nav" id="navbar">
				<div className="nav-content">
					<img
						src={logo}
						className="nav-logo"
						alt="Logo"
						onClick={this.scrollToTop}
					/>

					<ul className="nav-items">
						<li className="nav-item">
							<Link
								activeclassName="active"
								to="section1"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Course List
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeclassName="active"
								to="section5"
								spy={true}
								smooth={true}
								offset={-70}
								duration={100}
							>
								Contact Us
							</Link>
						</li>
						<li className="nav-item">
							<div className="flex flex-fixed">
								{authToken ? (
									<div className="dropdown">
										<button className="dropbtn">
											Hello, {localStorage.getItem(USER_NAME)}  ⌄
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
