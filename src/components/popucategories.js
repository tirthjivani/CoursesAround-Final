import React from "react";
import "../styles/popucategories.css";
import comp from "../imgs/Development.svg";
import bjness from "../imgs/Business.svg";
import mrket from "../imgs/Marketing.svg";
import softd from "../imgs/soft.webp";
import eng from "../imgs/eng.webp";
import hum from "../imgs/person-male.png";
import popl from "../animated-svg/tracklowl animated.svg";

class Popcategories extends React.Component {
	onUpdate = (event) => {
		console.log(event.target.value);
		this.props.onFilterUpdate(
			this.props.search,
			event.target.value,
			[],
			1000,
			"",
			0
		);
		window.scrollTo(0, 0);
	};



	render() {
		return (
			<div className="popcat-box">
				<div className="popcat-left">
					<img src={popl} alt="" className="popl-g"></img>
				</div>
				<div className="popcat-right">
					<div className="popcat-heading">
						<h1>Popular Categories</h1>
					</div>
					<br />
					<div className="categories-list">
						<div className="categories-list1">
							<button
								className="button-categories"
								value="Computer Science"
								onClick={this.onUpdate}
							>
								<img
									src={comp}
									alt="Computer Science"
									style={{
										width: "40px",
										height: "40px",
										marginRight: "10px"
									}}
								/>
								Computer Science
							</button>
							<button
								className="button-categories"
								value="Software Development"
								onClick={this.onUpdate}
							>
								<img
									src={softd}
									alt=""
									style={{ width: "40px", height: "40px", marginRight: "10px" }}
								/>
								Software Development
							</button>
							<button
								className="button-categories"
								value="Business"
								onClick={this.onUpdate}
							>
								<img
									src={bjness}
									alt="Design"
									style={{ width: "40px", height: "40px", marginRight: "10px" }}
								/>
								Business
							</button>
						</div>
						<div className="categories-list2">
							<button
								className="button-categories"
								value="Engineering"
								onClick={this.onUpdate}
							>
								<img
									src={eng}
									alt="Marketing"
									style={{ width: "40px", height: "40px", marginRight: "10px" }}
								/>
								Engineering
							</button>
							<button
								className="button-categories"
								value="Design"
								onClick={this.onUpdate}
							>
								<img
									src={mrket}
									alt="Design"
									style={{ width: "40px", height: "40px", marginRight: "10px" }}
								/>
								Design
							</button>
							<button
								className="button-categories"
								value="Humanities"
								onClick={this.onUpdate}
							>
								<img
									src={hum}
									alt="Design"
									style={{ width: "40px", height: "40px", marginRight: "10px" }}
								/>
								Humanities
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Popcategories;
