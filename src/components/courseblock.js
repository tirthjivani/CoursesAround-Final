import React from "react";
import "../styles/courseblock.css";

class CourseBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			is_expanded: false
		};
	}

	render() {
		if (this.state.is_expanded) {
			return this.renderExpanded();
		} else {
			return this.renderNormal();
		}
	}

	toggleDetails = () => {
		this.setState({
			is_expanded: !this.state.is_expanded
		});
	};

	renderNormal = () => {
		return (
			<div style={{ borderStyle: "solid", width: "80%", height: "150px" }}>
				<h3>
					Name: {this.props.course.name} <br />
					Price: {this.props.course.name}
				</h3>
				<button onClick={this.toggleDetails}>More Details</button>
			</div>
		);
	};

	renderExpanded = () => {
		return (
			<div style={{ borderStyle: "solid", align:"center", width: "80%" }}>
				<div className="popup">
					<div className="popup_inner">
						<img alt="IMG" align="left" src="https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg" />
						<h3>
							Name: {this.props.course.name}<br />
							Price: {this.props.course.name}<br />
						</h3>
						Category: {this.props.course.name}<br />
						Prereq: {this.props.course.name}<br />
						Detail: {this.props.course.description}<br />
						Prof: {this.props.course.name}<br />
						Ramayan: {this.props.course.name}<br />
                        <br />
                        <br />
                        <br />
						<button onClick={this.toggleDetails}>close me</button>
						<a href="https://www.udemy.com/course/react-django-full-stack/?utm_source=adwords&utm_medium=udemyads&utm_campaign=WebDevelopment_v.PROF_la.EN_cc.INDIA_ti.8322&utm_content=deal4584&utm_term=_._ag_82381207618_._ad_392371003676_._kw__._de_c_._dm__._pl__._ti_dsa-774930032289_._li_1007753_._pd__._&matchtype=b&gclid=Cj0KCQiAqY3zBRDQARIsAJeCVxOSS8Gqlih5FqzuPGao85ASoQEAvdjTTleVrNDh06zC5-gS3CN394caAnPzEALw_wcB">
							View Detailed Course
						</a>
						<br />
                        <br />
                        
					</div>
				</div>
			</div>
		);
	};
}

export default CourseBlock;
