import React from "react";
import networkError from "../imgs/network-error.PNG";
import '../styles/networkerr.css';

class NetworkError extends React.Component {
  render() {
    return(
      <div>
      <img
        className="network-error"
        src={networkError}
      />
    </div>
    );
  }
}

export default NetworkError;