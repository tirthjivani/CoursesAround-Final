import React, { useState } from "react";
import "./styles/App.css";
import Contactus from "./components/contactus";
import Blogs from "./components/blogs";
import Recommendetion from "./components/recommend";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CourseBlock from "./components/courseblock";
import Features from "./components/feature";
import Navbarx from "./components/navbar";
import Navbarx2 from "./components/navbar2";
import Navbary from "./components/navbary";
import Navbary2 from "./components/navbary2";
import Filter from "./components/filters";
import Section from "./components/section";
import Popcatagories from "./components/popucategories";
// import Dictaphone from "./components/speech";    I want to impliment this in the code xD
import Circular from "./components/circular";
import { Route } from "react-router";

const QUERY_1 = gql`
	query props(
		$search: String!
		$provider: [String]
		$price: Float!
		$level: String!
		$domain: String!
		$first: Int!
		$skip: Int!
	) {
		filters(
			searchName: $search
			providerList: $provider
			coursePrice: $price
			courseLevel: $level
			courseDomain: $domain
			first: $first
			skip: $skip
		) {
			courseName
			bundlePrice
			offeredBy
			category
			duration
			level
			imageUrl
			skills
			courseUrl
			courseDesc
			monthlyPrice
			prereq
			provider
		}
	}
`;

function QResult(props) {
	return (
		<Query
			query={QUERY_1}
			variables={{
				search: props.search,
				domain: props.domain,
				provider: props.provider,
				price: props.price,
				level: props.level,
				first: props.first,
				skip: props.skip
			}}
		>
			{({ loading, error, data }) => {
				if (loading) return <Circular />;
				if (error) return `Error! ${error.message}`;
				if (!data) return <div>No Courses</div>;
				return (
					<div className="listhere">
						{data.filters.map((course, i) => (
							<CourseBlock
								key={i}
								courseName={course.courseName}
								bundlePrice={course.bundlePrice}
								offeredBy={course.offeredBy}
								category={course.category}
								duration={course.duration}
								level={course.level}
								imageUrl={course.imageUrl}
								skills={course.skills}
								courseUrl={course.courseUrl}
								prereq={course.prereq}
								monthlyPrice={course.monthlyPrice}
								courseDesc={course.courseDesc}
								provider = {course.provider}
							/>
						))}
					</div>
				);
			}}
		</Query>
	);
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first: 10,
			skip: 0,
			search: "",
			showlist: false,
			offeredBy: {},
			price: 1000,
			level: "",
			domain: ""
		};
	}

	previousButton = (e) => {
		this.setState({
			skip: this.state.skip - 10
		});
	};

	isPrevDisabled = () => {
		if (this.state.skip > 0) {
			return false;
		} else {
			return true;
		}
	};

	nextButton = () => {
		this.setState({
			skip: this.state.skip + 10
		});
	};

	updateResponse = (event) => {
		this.setState({
			search: event.target.value
		});
		if (event.key === "Enter") {
			this.clickSearch();
		}
	};

	onUpdate = (search, domain, offeredBy, price, level, skip) => {
		this.setState({
			search: search,
			offeredBy: offeredBy,
			price: price,
			level: level,
			domain: domain,
			skip: skip
		});
		this.clickSearch();
	};

	clickSearch = () => {
		this.setState({
			showlist: true
		});
	};

	renderHome() {
		return (
			<div className="App">
				<Navbarx />
				<Navbary />
				<Section
					id="section1"
					inhere={
						<div className="mainsearch">
							<span>
								<h1>CoursesAround</h1>
								<p>
									<i>Education made easy.</i>
								</p>
								<br />
								<form className="form-search">
									<div className="inner-form">
										<div className="input-field first-wrap">
											<input
												id="search"
												type="text"
												onChange={this.updateResponse}
												value={this.state.search}
												onKeyPress={this.updateResponse}
												placeholder="Start Searching..."
											/>
										</div>
										<div className="input-field second-wrap">
											{/* <Dictaphone
												onUpdate={this.onUpdate.bind(
													this
												)}
											/> */}
											<button
												className="btn-search"
												type="button"
												onClick={this.clickSearch}
											>
												SEARCH
											</button>
										</div>
									</div>
									<p className="info">
										ex. Computer science, Machine Learning{" "}
										<br />
										<br />
										To get all the courses search with empty
										string and Enjoy ;)
									</p>
								</form>
							</span>
						</div>
					}
				/>
				<Section
					id="section2"
					inhere={
						<div className="popcat">
							<Popcatagories
								search={this.state.search}
								onFilterUpdate={this.onUpdate.bind(this)}
							/>
						</div>
					}
				/>
				<Section
					id="section3"
					inhere={
						<div className="features">
							<Features />
						</div>
					}
				/>

				<Section
					id="section5"
					inhere={
						<div className="recommendation">
							<Recommendetion />
						</div>
					}
				/>
				<Section
					id="section4"
					inhere={
						<div className="blogs">
							<Blogs />
						</div>
					}
				/>
				<Section
					id="section6"
					inhere={
						<div className="contact">
							<Contactus />
						</div>
					}
				/>
			</div>
		);
	}

	renderList() {
		return (
			<div className="App">
				
				<Navbarx2 />
				<Navbary2 />
				<Section
					id="section1"
					inhere={
						<div className="filter-list">
							<Filter
								onFilterUpdate={this.onUpdate.bind(this)}
								search={this.state.search}
								domain={this.state.domain}
							/>
							<hr />
							{!this.state.domain && (
								<p
									style={{
										textAlign: "left",
										paddingLeft: "20px"
										
									}}
								>
									Results for "<b>{this.state.search}</b>
									"
								</p>
							)}

							<div className="btn-prev-next">
								<button
									className="btn-prev"
									disabled={this.isPrevDisabled()}
									onClick={this.previousButton}
								>
									&#8249;
								</button>
								<button
									className="btn-prev"
									onClick={this.nextButton}
								>
									&#8250;
								</button>
							</div>

							<QResult
								className="card-list"
								search={this.state.search}
								domain={this.state.domain}
								provider={this.state.offeredBy}
								price={this.state.price}
								level={this.state.level}
								first={this.state.first}
								skip={this.state.skip}
							/>
							<div className="btn-prev-next">
								<button
									className="btn-prev"
									disabled={this.isPrevDisabled()}
									onClick={this.previousButton}
								>
									&#8249;
								</button>
								<button
									className="btn-prev"
									onClick={this.nextButton}
								>
									&#8250;
								</button>
							</div>
						</div>
					}
				/>

				<Section
					id="section5"
					inhere={
						<div className="contact">
							<Contactus />
						</div>
					}
				/>
			</div>


			
		);
	}

	render() {
		if (this.state.showlist) {
			return this.renderList();
		} else {
			return this.renderHome();
		}
	}
}

export default App;
