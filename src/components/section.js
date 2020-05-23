import React from "react";
import "../styles/section.css";

export default function Section({ inhere, id }) {
	return (
		<div className={"section"}>
			<div className="section-content" id={id}>
				{inhere}
			</div>
		</div>
	);
}
