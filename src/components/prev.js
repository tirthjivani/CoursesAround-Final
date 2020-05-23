import React from "react";
import "../styles/recommend.css";
import gql from "graphql-tag";
import CourseBlock from "./courseblock";
import { Query } from "react-apollo";
import { USER_NAME } from "../Constant";
import Navbarx3 from "../components/navbar3";
import Navbary3 from "../components/navbary3";
import Circular from "./circular";

const QUERY_PREV = gql`
	query($username: String!) {
		prev(username: $username) {
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

class Prev extends React.Component {
	render() {
		return (
			<Query
				query={QUERY_PREV}
				variables={{
					username: localStorage.getItem(USER_NAME)
				}}
			>
				{({ loading, error, data }) => {
					if (loading) return <Circular />;
					if (error) {
						return alert(error.graphQLErrors[0].message);
					}
					return (
						<>
							<div className="recommendation-heading">
								<b>
									<h2>Your Previous Recommended Courses.</h2>
								</b>
							</div>
							<div className="prev-recom">
								<Navbarx3 />
								<Navbary3 />
								{data.prev.map((course, i) => (
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
						</>
					);
				}}
			</Query>
		);
	}
}

export default Prev;
