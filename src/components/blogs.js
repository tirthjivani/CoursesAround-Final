import React from "react";
import Article from "./article";
import "../styles/article.css";

class Blogs extends React.Component {

	handleOnClick1 = () => {
		window.open("https://www.ndtv.com/education/parents-children-increasingly-opting-for-new-mode-of-e-learning-amid-covid-19-crisis-survey-2228240");
	};

	handleOnClick2 = () => {
		window.open("https://learningsolutionsmag.com/aticles/how-to-help-at-home-learners-become-good-virtual-learners");
	};

	handleOnClick3 = () => {
		window.open("https://learningsolutionsmag.com/articles/building-an-online-learning-infrastructure-from-scratch");
	};

	render() {
		return (
			<div className="main-block-blog">
				<div className="main-heading-blog">
					<h1>Blogs</h1>
					<br />
				</div>
				<div className="container-bl" onClick={this.handleOnClick1}>
					<div className="column"  >
						<Article
							title="COVID-19"
							category="NEWS"
							excerpt="Parents, Children Increasingly Opting For E-Learning Amid COVID-19 Crisis: Survey ..."
						/>
					</div>
					<div className="column" onClick={this.handleOnClick2}>
						<Article
							title="Learning Solution"
							category="ARTICLE"
							excerpt="For companies looking to help their employees adapt to virtual learning, Gregg..."

						/>
					</div>
					<div className="column" onClick={this.handleOnClick3}>
						<Article
							color="673AB7"
							title="Scratch Learning"
							category="ARTICLE"
							excerpt="Can you offer some guidance for building online learning programs from scratch ...."
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Blogs;
