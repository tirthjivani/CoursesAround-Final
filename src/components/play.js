import "../styles/recommend.css";
import Button from "react-bootstrap/Button";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import React, { Fragment } from "react";
import { USER_NAME } from "../Constant";
import CourseBlock from "./courseblock";
import { Mutation } from "react-apollo";
import "../styles/play.css";
import Navbarx3 from "../components/navbar3";
import Navbary3 from "../components/navbary3";
import Circular from "./circular";

const IMPORT_QUESTIONS = gql`
	query($domain: String!) {
		quiz(domain: $domain) {
			questions
			optionA
			optionB
			optionC
			optionD
			correctAnswer
		}
	}
`;

const GET_RECOM = gql`
	mutation($username: String!, $domain: String!, $score: Int!) {
		addResult(username: $username, domain: $domain, userScore: $score) {
			courses {
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
	}
`;

class Play extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			quizEnabled: false,
			quizRecommend: false,
			domain: "",
			currscore: 0,
			agreeCheck: false
		};
		this.updateScore = this.updateScore.bind(this);
	}

	selectDomain = (event) => {
		this.setState({
			domain: event.target.value,
			quizEnabled: true
		});
		console.log(event.target.value);
	};

	handleOptionChange = (event) => {
		this.setState({
			selectedOption: event.target.value
		});
	};

	renderCategories() {
		return (
			<div className="main-block-play">
				<Navbarx3 />
				<Navbary3 />
				<div className="main-block-play-content">
					<div className="main-block-play-heading">
						Select a category
					</div>
					<br />
					<div className="main-block-play-categories">
						<button
							className="content-button-like-look"
							value={"Machine Learning"}
							onClick={this.selectDomain}
						>
							Machine Learning
						</button>
						<button
							className="content-button-like-look"
							value={"Web Development"}
							onClick={this.selectDomain}
						>
							Web Development
						</button>
						<button
							className="content-button-like-look"
							value={"Design"}
							onClick={this.selectDomain}
						>
							Design
						</button>
					</div>
					<div className="main-block-play-categories">
						<button
							className="content-button-like-look"
							value={"Algorithms"}
							onClick={this.selectDomain}
						>
							Algorithms
						</button>
						<button
							className="content-button-like-look"
							value={"Business"}
							onClick={this.selectDomain}
						>
							Business
						</button>
					</div>
				</div>
			</div>
		);
	}

	updateScore(event) {
		let score = 0;
		for (let i = 0; i < 5; i++) {
			if (
				(document.querySelector(
					'input[name="q' + (i + 1) + '"]:checked'
				)
					? document.querySelector(
						'input[name="q' + (i + 1) + '"]:checked'
					).value
					: "0") ===
				document.getElementsByName("a" + (i + 1))[0].defaultValue
			)
				score++;
		}
		this.setState({
			currscore: score,
			agreeCheck: true
		});
	}

	renderList() {
		return (
			<div className="list-here">
				<Navbarx3 />
				<Navbary3 />
				<div className="recommendation-heading">
					<b>
						<h2>Special Recommendation for you on topic,</h2>
						<h1>{this.state.domain}</h1>
					</b>
				</div>
				<div className="recommendation-course">
					<p>
						{" "}
						Your score is{" "}
						<p
							style={{
								fontSize: "30px",
								padding: "0px",
								margin: "0px",
								fontWeight: "bold",
								color: "#47bbc5"
							}}
						>
							{this.state.currscore}/5{" "}
						</p>
					</p>
					{this.state.data.addResult.courses.map((course, i) => (
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
							provider={course.provider}
						/>
					))}
				</div>
			</div>
		);
	}

	scrollToTop = () => {
		window.location.href = "/";
	};

	renderQuiz() {
		return (
			<div className="main-block-play">
				<Navbarx3 />
				<Navbary3 />
				<div className="main-block-play-content2">
					<div className="main-block-play-heading2">
						{this.state.domain}
					</div>
					<Query
						query={IMPORT_QUESTIONS}
						variables={{ domain: this.state.domain }}
					>
						{({ loading, error, data }) => {
							if (loading) return <Circular />;
							if (error) return `Error! ${error.message}`;
							console.log(data.quiz);

							return (
								<div>
									<form>
										{data.quiz.map((question, i) => (
											<div className="content-block-quiz-quiestion">
												<b>
													<h3>
														Q{i + 1}.{" "}
														{question.questions}
													</h3>
												</b>
												<div className="radio">
													<label>
														<input
															type="radio"
															value={
																question.optionA
															}
															name={"q" + (i + 1)}
														/>
														A) {question.optionA}
													</label>
												</div>
												<div className="radio">
													<label>
														<input
															type="radio"
															value={
																question.optionB
															}
															name={"q" + (i + 1)}
														/>
														B) {question.optionB}
													</label>
												</div>
												<div className="radio">
													<label>
														<input
															type="radio"
															value={
																question.optionC
															}
															name={"q" + (i + 1)}
														/>
														C) {question.optionC}
													</label>
												</div>
												<div className="radio">
													<label>
														<input
															type="radio"
															value={
																question.optionD
															}
															name={"q" + (i + 1)}
														/>
														D) {question.optionD}
													</label>
												</div>
												<input
													type="hidden"
													name={"a" + (i + 1)}
													value={
														question.correctAnswer
													}
												/>
												<br />
											</div>
										))}
									</form>
									<input
										type="checkbox"
										defaultChecked={this.state.agreeCheck}
										onChange={() => this.updateScore()}
									/>
									Agree you have attempted the quiz
								</div>
							);
						}}
					</Query>
					<div className="recommendation-bottom">
						<button
							className="button-give-recommendation"
							onClick={window.scrollTo(0, 0)}
						>
							Quit
						</button>
					</div>

					{this.state.agreeCheck && (
						<Mutation
							mutation={GET_RECOM}
							onCompleted={(data) =>
								this.setState({
									data: data,
									quizRecommend: true
								})
							}
							onError={(error) => {
								console.log(
									"=>",
									error.graphQLErrors[0].message
								);
								alert(error.graphQLErrors[0].message);
							}}
							variables={{
								username: localStorage.getItem(USER_NAME),
								domain: this.state.domain,
								score: this.state.currscore
							}}
						>
							{(mutation, { error, data }) => {
								window.scrollTo(0, document.body.scrollHeight);
								console.log(data, error);
								return (
									<div className="recommendation-bottom">
										<button
											className="button-give-recommendation"
											onClick={mutation}
										>
											Get Recommendation
										</button>
									</div>
								);
							}}
						</Mutation>
					)}
				</div>
			</div>
		);
	}

	render() {
		if (this.state.quizEnabled && !this.state.quizRecommend) {
			return this.renderQuiz();
		} else if (!this.state.quizEnabled && !this.state.quizRecommend) {
			return this.renderCategories();
		} else {
			return this.renderList();
		}
	}
}

export default Play;
