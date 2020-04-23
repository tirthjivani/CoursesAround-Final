import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

class Links extends React.Component {
  
  render() {
    return (
      <div>
        <ButtonGroup size="lg" className="mb-2">
          <Button >Python</Button>
          <Button>Business</Button>
          <Button>Arts</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Links;
