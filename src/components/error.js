import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ErrorBox(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{props.heading}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Message</h4>
				<p>{props.message}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={(window.location.href = "/")}>
					Back to Home
				</Button>
				<Button onClick={props.history.goBack}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

// function Error() {
// 	const [modalShow, setModalShow] = React.useState(false);

// 	return (
// 		<>
// 			<Button variant="primary" onClick={() => setModalShow(true)}>
// 				Launch vertically centered modal
// 			</Button>

// 			<MyVerticallyCenteredModal
// 				show={modalShow}
// 				onHide={() => setModalShow(false)}
// 			/>
// 		</>
// 	);
// }

export default ErrorBox;
