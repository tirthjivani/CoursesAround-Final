import React from "react";
import "./styles/App.css";
import Contactus from "./components/contactus";
import Blogs from "./components/Blogs";
import Recommendetion from "./components/recommend";
import CourseList from "./components/Courselist";
import Button from "react-bootstrap/Button";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CourseBlock from "./components/courseblock";

const linksToRender = [
  {
    id: "1",
    description: "Prisma turns your database into a GraphQL API 😎",
    name: "A",
    url: "https://www.prismagraphql.com",
  },
  {
    id: "2",
    description: "The best GraphQL client",
    name: "B",
    url: "https://www.apollographql.com/docs/react/",
  },
];

const QUERY_1 = gql`
  query Q1($response: String!) {
    courses(searchName: $response ) {
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

  CourseListQueryResult = (search) => {
    return (
    <Query query={QUERY_1} variables={this.state.search}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <div>
            {data.courses.map((course) => (
              <CourseBlock id="1" name={course.courseName} description={course.skills} url={course.courseUrl} />
            ))}
          </div>
        );
      }}
    </Query>
  );
    }
  renderHome() {
    return (
      <div className="App">
        <main style={{ height: "300px" }}>
          <h1>EduEazy</h1>
          <br />
          <input
            onChange={this.updateResponse}
            value={this.state.search}
            onKeyPress={this.updateResponse}
            placeholder="Search..."
          />
          <button onClick={this.clickSearch}>Search</button>
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
        Search: {this.state.search}
        <CourseList datas={linksToRender} />
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
