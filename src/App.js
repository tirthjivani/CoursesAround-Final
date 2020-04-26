import React from "react";
import "./styles/App.css";
import Contactus from "./components/contactus";
import Blogs from "./components/Blogs";
import Recommendetion from "./components/recommend";
import Button from "react-bootstrap/Button";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CourseBlock from "./components/courseblock";

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
        <main style={{ height: "300px" }}>
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
          <br />
          Search: {this.state.search}
        </main>
        <div id="#Second" style={{ height: "400px" }}>
          <h1>Popular Categories</h1>
          <hr /> <br />
          <Button variant="primary">Computer Science</Button>{" "}
          <Button variant="primary">Python</Button>{" "}
          <Button variant="primary">Business</Button>{" "}
          <Button variant="primary">Arts</Button>{" "}
          <Button variant="primary">Law</Button>{" "}
        </div>
        <div id="#Third" style={{ height: "400px" }}>
          <Recommendetion />
        </div>
        <div id="#Forth" style={{ height: "600px" }}>
          <Blogs />
        </div>
        <div id="#Last">
          <Contactus />
        </div>
      </div>
    );
  }

  renderList() {
    return (
      <div className="App">
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
        <CourseListQueryResult 
        	search = {this.state.search}
        />

        {/* <CourseBlock
          courseName="{course.courseName}"
          bundlePrice="{course.bundlePrice}"
          offeredBy="{course.offeredBy}"
          category="{course.category}"
          duration="{course.duration}"
          level="{course.level}"
          imageUrl="https://media-exp1.licdn.com/dms/image/C4D0BAQFsG8fmxly5lQ/company-logo_200_200/0?e=2159024400&v=beta&t=0-B2SbDS1V-obZslNoU5yvQKHjwp3BQSXL0H1cDy-_4"
          skills="{course.skills}"
          courseUrl="https://tirthjivani.github.io"
        /> */}

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
