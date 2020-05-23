import React from "react";
import somethingWentWrong from "../imgs/something-went-wrong.PNG";
import '../styles/sww.css';

class SomethingWentWrong extends React.Component {

  render() {
    return (
      <div>
        <img
          src={somethingWentWrong}
          className="something-went-wrong-error"
        />
      </div>
    );
  }
}
export default SomethingWentWrong;