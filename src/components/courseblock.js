import React from "react";
import { Button } from "react-bootstrap";
import "../styles/courseblock.css";
import { motion } from "framer-motion";
import ShowMoreText from "react-show-more-text";

const styles = {
	borderRadius: 10,
	width: 50,
	height: 30,
	margin: "0px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	color: "white",
	cursor: "pointer",
	fontSize: "14px"
};

const variants = {
	active: {
		opacity: 1,
		background: "#7fffd4",
		x: "22px",
		scale: 1,
		color: "#333"
	},
	inActive: {
		opacity: 1,
		background: "#f95c5c",
		x: "-22px",
		scale: 1,
		color: "white"
	}
};

function calculateColor(title) {
	let bgColor;

	switch (title) {
		case "Introductory":
			bgColor = "green";
			break;
		case "Intermediate":
			bgColor = "#d7a700";
			break;
		case "Advanced":
			bgColor = "red";
			break;
		default:
			bgColor = "black";
			break;
	}

	return bgColor;
}

const LevelIndicator = (props) => {
	const { title } = props;
	const { provider } = props;
	const backgroundColor = calculateColor(title);
	return (
		<div style={{ display: "flex" }}>
			<div style={{ backgroundColor: "#093241", borderRadius: "5px", color: "white", padding: "5px", marginRight: "10px", width: "fit-content" }}>{props.provider}</div>
			<div
				style={{
					backgroundColor: backgroundColor,
					color: "white",
					width: "fit-content",
					borderRadius: "5px",
					padding: "4px"

				}}
			>
				{title}
			</div>
		</div>
	);
};

const DetailedCard = (props) => {
	const { prereq } = props;
	const { courseDesc } = props;
	if (courseDesc !== null) {
		return (
			<div className="extended-details">
				<div className="text-in">
					Prereq: <b>{props.prereq}</b>
				</div>
				<div className="text-in">
					Description: <br />
					<b>
						<ShowMoreText
							lines={4}
							more="Show more"
							less="Show less"
							anchorClass=""
							onClick={props.executeOnClick}
							expanded={false}
							width={280}
						>
							{props.courseDesc}
						</ShowMoreText>
					</b>
				</div>
			</div>
		)
	}
	else {
		return (
			<div className="extended-details">
				<div className="text-in">
					No details available please visit course page for more details.
				</div>
			</div>
		)
	}
}

const SkillCard = (props) => {
	const { skills } = props;
	if (skills !== null) {
		return (
			<div className="text-in">
				Skills: <b>{props.skills}</b>
			</div>
		)
	}
	else {
		return (
			<></>
		)
	}
}

class CourseBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			is_expanded: false,
			showMore: false
		};
	}

	render() {
		if (this.state.is_expanded) {
			return this.rExpanded();
		} else {
			return this.rNormal();
		}
	}

	toggleDetails = () => {
		this.setState({
			is_expanded: !this.state.is_expanded
		});
	};

	viewcourse = () => {
		window.open(this.props.courseUrl);
	};

	loading = () => {
		return (
			<img
				src="https://via.placeholder.com/295x295?text=Image+Not+Available"
				alt="No Image"
			/>
		);
	};

	rNormal = () => {
		return (
			<div className="card">
				<div className="sidebar"
				>
					<img
						ref="img"
						src={this.props.imageUrl}
						alt="IMG"
						onError={this.loading}
					/>
				</div>
				<div className="carddata">
					<div className="card-heading">
						<b>{this.props.courseName}</b>
					</div>
					<div className="detaildata">
						<div className="card-basic-detail">
							<div className="text-in">
								<LevelIndicator title={this.props.level} provider={this.props.provider} />
							</div>
							<div className="text-in">
								Category: <b>{this.props.category}</b>
							</div>
							<div className="text-in">
								Duration: <b>{this.props.duration}</b>
							</div>
							<div className="text-in">
								By: <b>{this.props.offeredBy}</b>
							</div>
							<div className="text-in">

							</div>
						</div>
						<div className="card-basic-detail2">
							<div className="price">
								<b>~$ {this.props.bundlePrice}</b>
							</div>
							<div className="footer">
								<Button onClick={this.viewcourse}>
									View course
								</Button>
								<Button onClick={this.toggleDetails}>
									More
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	rExpanded = () => {
		return (
			<div className="card">
				<div className="sidebar">
					<img
						src={this.props.imageUrl}
						alt="IMG"
						style={{ marginBottom: "10px" }}
					/>
					<SkillCard skills={this.props.skills}/>
				</div>
				<div className="carddata">
					<div className="card-heading">
						<b>{this.props.courseName}</b>
					</div>
					<div className="detaildata">
						<div className="card-basic-detail">
							<div className="text-in">
								<LevelIndicator title={this.props.level} provider={this.props.provider} />
							</div>
							<div className="text-in">
								Category: <b>{this.props.category}</b>
							</div>
							<div className="text-in">
								Duration: <b>{this.props.duration}</b>
							</div>
							<div className="text-in">
								By: <b>{this.props.offeredBy}</b>
							</div>
						</div>
						<div className="card-basic-detail2">
							<div className="price">
								<b>~$ {this.props.bundlePrice}</b>
							</div>
							<div className="footer">
								<Button onClick={this.viewcourse}>
									View course
								</Button>
								<Button onClick={this.toggleDetails}>
									Less
								</Button>
							</div>
						</div>
					</div>
					<DetailedCard courseDesc={this.props.courseDesc} prereq={this.props.prereq} />
				</div>
			</div>
		);
	};
}

export default CourseBlock;
