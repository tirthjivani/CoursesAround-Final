import React from "react";
import "../styles/feature.css";
import onestop from "../imgs/onestop.svg";
import confused from "../imgs/confused.svg";
import filt from "../imgs/filters.svg";

class Features extends React.Component {
	render() {
		return (
			<div className="main-block-features">
				<div className="block-heading-features">
					<h1>Why CoursesAround<b>?</b></h1>
				</div>
				<div className="container-features">
                    <div className="inside-block-features">
                        <img src={filt} alt="Browse"  /><br />
                        <h2>Personalization at its best</h2>
                        <p>Filter your Searches to get quick results!</p>
                    </div>
                    <div className="inside-block-features2">
                        <img src={onestop} alt="Browse"/><br />
                        <h2>One-stop Searching solution</h2>
                        <p>No more jiggling with a bazillion websites to find the course of your dreams!</p>
                    </div>
                    <div className="inside-block-features">
                        <img src={confused} alt="Browse" /><br/>
                        <h2>Confused?</h2>
                        <p>Don't know which course is for you? Give a quick quiz and find out!</p>
                    </div>
                </div>
			</div>
		);
	}
}

export default Features;
