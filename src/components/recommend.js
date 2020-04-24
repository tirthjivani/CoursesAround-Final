import React from "react";
import "../styles/recommend.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Recommendetion extends React.Component {
  render() {
    return (
        <Card className="text-center">
        <Card.Body>
          <Card.Title><h1>Get Personalized courses</h1><hr /><br /></Card.Title>
          <Card.Text>
            Get started answer some questions.
          </Card.Text>
          <Button variant="primary" onClick={this.handleClick}>Get started</Button>
        </Card.Body>
      </Card>

    //   <div className="styles--banner--2dZ2E" data-purpose="banner">
    //     <div className="styles--banner__title--20L4_">
    //       Get personalized recommendations
    //     </div>
    //     <div class="styles--banner__subtitle--27ZAl">
    //       Answer a few questions for your top picks
    //     </div>
    //     <div data-purpose="onboarding-trigger">
    //       <button
    //         data-purpose="launch-onboarding-trigger--button"
    //         type="button"
    //         class="btn btn-primary"
    //       >
    //         Get started
    //       </button>
    //     </div>
    //   </div>
    );
  }

  handleClick = () => {
    alert("Recommendation Quiz will pop up");
  };
}

export default Recommendetion;
