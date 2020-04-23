import React, { Component } from "react";
import CourseBlock from "./courseblock";

class CourseList extends Component {
  
  // cons sidebar() {
  //   <div>
  //     <ul>
  //       {this.props.datas.map((data) => (
  //         <li key={data.id}>{data.title}</li>
  //       ))}
  //     </ul>
  //   </div>;
  // }

  render() {
    return (
      <div>
        {/* {this.props.data.map((CourseBlock) => (
          <li key={data.id}>{data.title}</li>
        ))} */}
        {/* {this.sidebar} */}
        <CourseBlock course={{
        id: "1",
        description: "Prisma turns your database into a GraphQL API 😎",
        name: "A",
        url: "https://www.prismagraphql.com",
      }} />
      <CourseBlock course={{
        id: "2",
        description: "Any description here",
        name: "B",
        url: "https://www.prismagraphql.com",
      }} />
      </div>
      
    );
  }
}

export default CourseList;
