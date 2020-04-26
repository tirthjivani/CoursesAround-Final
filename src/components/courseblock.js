import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardColumns,
  CardTitle, CardSubtitle, Button, Container, CardGroup } from 'reactstrap';
import '../styles/courseblock.css';

class CourseBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_expanded: false
    };
  }

  render() {
    if (this.state.is_expanded) {
      return this.renderExpanded();
    } else {
      return this.renderNormal();
    }
  }

  toggleDetails = () => {
    this.setState({
      is_expanded: !this.state.is_expanded
    });
  };

  renderNormal = () => {
    return (
     <div className="App" inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
     <Container className="gap">
     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
     <CardColumns>
     <Card>
     <Card body className="text-left" inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width="100%" align="left" src={this.props.imageUrl} alt="Card image cap" />
        <br />
        <br />
     </Card>
     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
	<CardTitle className="skills"><b>Skills:</b>{this.props.skills}</CardTitle>
     </Card>
     </Card>

     <Card style={{width:"110%", height:"60%"}}>
     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
       <CardTitle className="coursename"><b>Course Name :</b> {this.props.courseName}</CardTitle>
     </Card>

     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
     <CardTitle className="offered"><b>Offered By :</b> {this.props.offeredBy}</CardTitle>
   </Card>

   <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
     <CardTitle className="category"><b>Category :</b> {this.props.category}</CardTitle>
   </Card>

     <CardGroup>
     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
       <CardTitle className="price"><b>Bundle Price :</b> {this.props.bundlePrice}</CardTitle>      
     </Card>
     </CardGroup>   

     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
       <CardTitle className="level"><b>Course Level :</b> {this.props.level}</CardTitle>
       <CardTitle className="duration"><b>Course Duration :</b> {this.props.duration}</CardTitle>
     </Card>
    
     <br />
        <Button onClick={this.toggleDetails} color="primary">More Details</Button>
        <br />
     </Card>
</CardColumns>
</Card>
  </Container>
     </div>
    );
  };

  renderExpanded = () => {
    return (
    <div className="App" inverse style={{ backgroundColor: '#349', borderColor: '#333' }}>
     <Container className="gap">
     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
     <CardColumns>
     <Card>
     <Card body className="text-left" inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width="100%" align="left" src={this.props.imageUrl} alt="Card image cap" />
        <br />
        <br />
     </Card>
     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
     <CardTitle className="skills"><b>Skills:</b> {this.props.skills}</CardTitle>
     </Card>
     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
     <CardTitle className="prereq"><b>Prerequisites:</b> None </CardTitle>
     </Card>
     </Card>

     <Card style={{width:"150%", height:"60%"}}>
     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
       <CardTitle className="coursename"><b>Course Name :</b> {this.props.skills}</CardTitle>
     </Card>

     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
       <CardTitle className="offered"><b>Offered By :</b> {this.props.offeredBy}</CardTitle>
     </Card>

     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
       <CardTitle className="category"><b>Category :</b> {this.props.category}</CardTitle>
     </Card>

     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
       <CardSubtitle className="desc"><b>Course Description :</b></CardSubtitle>
       <CardText className="desc">Description</CardText>
     </Card>

     <CardGroup>
     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
       <CardTitle className="price"><b>Bundle Price :</b> {this.props.bundlePrice}</CardTitle>
       <CardTitle className="monthlyprice"><b>Monthly Price :</b> {this.props.bundlePrice}/{this.props.duration} Simple Maths</CardTitle>       
     </Card>

     <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
       <CardTitle className="level"><b>Course Level :</b> {this.props.level}</CardTitle>
       <CardTitle className="duration"><b>Course Duration :</b> {this.props.duration}</CardTitle>
     </Card>
     </CardGroup>   
        
        
        <br />
        <Button onClick={this.toggleDetails} color="primary">Go Back</Button>
        <br />
        <br />
        <CardLink href={this.props.courseUrl}><b>Course URL</b></CardLink>
     </Card>
</CardColumns>
</Card>
  </Container>
     </div>
    );
  };
}

export default CourseBlock;