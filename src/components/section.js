import React from "react";

export default function Section({ inhere, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        {inhere}
      </div>
    </div>
  );
}