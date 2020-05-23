import React from "react";
import resourceNotFound from "../imgs/404.PNG";
import '../styles/404.css';

class NotFound extends React.Component {

  render() {
    return (
      <div>
        <img
          src={resourceNotFound}
          className="not-found-error"
        />
      </div>
    );
  }
}


export default NotFound;