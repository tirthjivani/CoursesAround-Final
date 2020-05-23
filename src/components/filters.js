import React, { Fragment, useState } from "react";
import Select from "react-select";
import "../styles/filter.css";

const levelOpt = [
	{ value: "Introductory", label: "Introductory" },
	{ value: "Intermediate", label: "Intermediate" },
	{ value: "Advanced", label: "Advanced" }
];

const offerOpt = [
	{ value: "edx", label: "EdX" },
	{ value: "pluralsight", label: "PluralSight" },
	{ value: "udemy", label: "Udemy" },
	{ value: "udacity", label: "Udacity" }
];

class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isChanged: false,
			offeredBy: [],
			// category: {},
			currentValue: 1000,
			level: "",
			skip: 0,
			response: this.props.search
		};
		this.onUpdate = this.onUpdate.bind(this);
	}

	updateResponse = (event) => {
		this.setState({
			response: event.target.value,
			skip: 0
		});
		if (event.key === "Enter") {
			this.clickSearch();
		}
	};

	clickSearch = () => {
		this.props.onFilterUpdate(
			this.state.response,
			"",
			[],
			60000,
			"",
			this.state.skip
		);
		this.setState({ isChanged: false });
	};

	onUpdate = () => {
		this.props.onFilterUpdate(
			this.props.search,
			this.props.domain,
			this.state.offeredBy,
			this.state.currentValue,
			this.state.level,
			this.state.skip
		);
		this.setState({ isChanged: false });
	};

	onClearUpdate = () => {
		this.setState({
			currentValue: 1000,
			level: "",
			offeredBy: [],
			isChanged: false
		});
		this.onUpdate();
	};

	handlecourseoffered = (event) => {
		this.setState({ offeredBy: event.value, isChanged: true });
		console.log(`Offered By:`, event.value);
	};

	handlelevelchange = (event) => {
		this.setState({ level: event.value, isChanged: true });
	};

	handleUpdateValue = (event) => {
		this.setState({ currentValue: event.target.value, isChanged: true });
	};

	render() {
		return (
			<div className="second-search">
				{/* <form className="form-search"> */}
					<div className="second-search-form">
						<div className="inner-form">
							<div className="input-field first-wrap">
								<input
									id="search"
									type="text"
									onChange={this.updateResponse}
									onKeyPress={this.updateResponse}
									value={this.state.response}
									placeholder="Search..."
								/>
							</div>
							<div className="input-field second-wrap">
								<button
									className="btn-search"
									type="button"
									onClick={this.clickSearch}
								>
									Search
							</button>
							</div>
						</div>
					</div>
				{/* </form> */}
				<div className="filter-row">
					<div className="filter-column">
						<h6>Course Offered By</h6>
						<Select
							value={this.state.offeredBy}
							onChange={this.handlecourseoffered}
							options={offerOpt}
							placeholder={this.state.offeredBy}
						/>
					</div>

					<div className="filter-column">
						<h6>Level</h6>
						<Select
							value={this.state.level}
							onChange={this.handlelevelchange}
							placeholder="Select level"
							options={levelOpt}
							placeholder={this.state.level}
						/>
					</div>

					<div className="filter-column">
						<h6>Price Range</h6>
						<div className="">
							<input
								className="range-slider"
								type="range"
								min="1"
								max="1000"
								value={this.state.currentValue}
								onChange={this.handleUpdateValue}
							/>

							<p style={{ margin: "0px", marginTop: "4px" }}>
								$0 - ${this.state.currentValue}
							</p>
						</div>
					</div>
					<div className="filter-column">
						<button
							className="btn-apply"
							type="button"
							onClick={this.onClearUpdate}
						>
							Clear Filters
						</button>
						<button
							className="btn-apply"
							type="button"
							disabled={!this.state.isChanged}
							onClick={this.onUpdate}
						>
							Apply
						</button>
					</div>

				</div>
			</div>
		);
	}
}

export default Filter;
