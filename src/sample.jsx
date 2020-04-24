import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const QUERY_1 = gql`
  query Q1($usr: String!) {
    myProjects(username: $usr) {
      projectid
      name
      shortdescription
      createdby {
        username
      }
    }
  }
`;

const usr = "arpit91";

class SampleQuery extends React.Component {
  render() {
    return (
      <Query query={QUERY_1} variables={{ usr }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <div>
              {data.myProjects.map((project) => (
                <>
                  {project.projectid}
                  <br />
                  {project.name}
                  <br />
                  {project.createdby.username}
                </>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}
export default SampleQuery;
