import React from "react";
import "./styles/App.css";
import searchimg from "./imgs/search.png";
import Contactus from "./components/contactus";
import Blogs from "./components/Blogs";
import Recommendetion from "./components/recommend";
import Button from "react-bootstrap/Button";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CourseBlock from "./components/courseblock";
import Navbar from "./components/navbar";
import Section from "./components/section";

const QUERY_1 = gql`
  query Q1($search: String!) {
    courses(searchName: $search) {
      courseName
      bundlePrice
      offeredBy
      category
      duration
      level
      imageUrl
      skills
      courseUrl
    }
  }
`;

// eslint-disable-next-line
const CourseListQueryResult = (search) => {
  console.log(search);
  return (
    <Query query={QUERY_1} variables={search}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        console.log(data);
        return (
          <div>
            {data.courses.map((course, i) => (
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
              />
            ))}
          </div>
        );
      }}
    </Query>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      showlist: false,
    };
  }

  updateResponse = (event) => {
    this.setState({
      search: event.target.value,
    });
    if (event.key === "Enter") {
      this.clickSearch();
    }
  };

  clickSearch = () => {
    this.setState({
      showlist: true,
    });
  };

  renderHome() {
    return (
      <div className="App">
        <Navbar />
        <Section
          id="section1"
          inhere={
            <div className="mainsearch">
              <span>
                <h1>EduEazy</h1>
                <p>
                  <i>Baseline here</i>
                </p>
                <br />
                <input
                  type="text"
                  onChange={this.updateResponse}
                  value={this.state.search}
                  onKeyPress={this.updateResponse}
                  placeholder="Start typing..."
                />
                <button onClick={this.clickSearch}>
                  <span>
                    <img src={searchimg} style={{ width: "40px" }} />
                  </span>
                </button>
              </span>
            </div>
          }
        />
        <Section
          id="section2"
          inhere={
            <div className="popcat">
              <h1>Popular Categories</h1>
              <br />
              <div class="btn-group">
                <Button className="button" variant="primary">Computer Science</Button>
                <Button className="button" variant="primary">Python</Button>
                <Button className="button" variant="primary">Business</Button>
                <Button className="button" variant="primary">Arts</Button>
                <Button className="button"  variant="primary">Law</Button>
              </div>
            </div>
          }
        />
        <Section
          id="section3"
          inhere={
            <div className="blogs">
              <Blogs />
            </div>
          }
        />
        <Section
          id="section4"
          inhere={
            <div className="recommendation">
              <Recommendetion />
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

  renderList() {
    return (
      <div className="App">
        {/* <div className="mainsearch">
          <span>
            <h1>EduEazy</h1>
            <br />
            <input
              type="text"
              onChange={this.updateResponse}
              value={this.state.search}
              onKeyPress={this.updateResponse}
              placeholder="Type..."
            />
            <button className="button" onClick={this.clickSearch}>
              <span>Search </span>
            </button>
          </span>
        </div> */}
        <a href="/" onClick={this.backToHome}>
          {/* Logo here */}
          <div style={{ fontSize: "50px" }}>EduEazy</div>
        </a>
        <br />
        <input
          onChange={this.updateResponse}
          value={this.state.search}
          onKeyPress={this.updateResponse}
          placeholder={this.state.search}
        />
        <button onClick={this.clickSearch}>Search</button>
        <br />
        {/* <CourseListQueryResult search={this.state.search} /> */}

        <CourseBlock
          courseName="{course.courseName}"
          bundlePrice="{course.bundlePrice}"
          offeredBy="{course.offeredBy}"
          category="{course.category}"
          duration="{course.duration}"
          level="{course.level}"
          imageUrl="https://media-exp1.licdn.com/dms/image/C4D0BAQFsG8fmxly5lQ/company-logo_200_200/0?e=2159024400&v=beta&t=0-B2SbDS1V-obZslNoU5yvQKHjwp3BQSXL0H1cDy-_4"
          skills="{course.skills}"
          courseUrl="https://tirthjivani.github.io"
        />

        <Contactus />
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
