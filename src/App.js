import React from "react";
import "./styles/App.css";
import Contactus from "./components/contactus";
import Blogs from "./components/Blogs";
import Recommendetion from "./components/recommend";
import CourseList from "./components/Courselist";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      userid: "",
      showlist: false,
    };
  }

  search_data = (search) => {
    this.setState({ showlist: true, search: search });
  };

  getuserdata = (id) => {
    this.setState({ userid: id });
  };

  backToHome() {
    this.setState({ showlist: false, search: "" });
  }

  renderHome() {
    return (
      <div className="App">
        <main>
          <h1>EduEazy</h1>
          <br />
          <input type="text" placeholder="Search..." />
          <button onClick={this.search_data}>Search</button>
        </main>
        <sec style={{ height: "100vh" }}>
          <h1>Popular Categories</h1>
          <hr /> <br />
          <ButtonGroup size="lg" className="mb-2">
            <Button>Python</Button>
            <Button>Business</Button>
            <Button>Arts</Button>
          </ButtonGroup>
        </sec>
        <third id="#Third" style={{ height: "100vh" }}>
          <Recommendetion />
          <Blogs />
        </third>
        <forth id="#Forth">
          <Contactus />
        </forth>
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
        <input type="text" placeholder="Search..." />
        <button onClick={this.search_data}>Search</button>
        <br />
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
