import React, { Component } from "react";
import { Button } from "react-bootstrap";

import SpeechRecognition from "react-speech-recognition";

class Dictaphone extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			listening: false
		};
	}

	render() {
		const {
			transcript,
			resetTranscript,
			browserSupportsSpeechRecognition,
			startListening,
			stopListening
		} = this.props;

		this.sendResponse = () => {
			stopListening();
			if(transcript!==""){
				console.log(transcript);
				this.props.onUpdate(transcript);
				resetTranscript();	
			}
			else {
				console.log(transcript);
				resetTranscript();
			}
		};

		this.toogleListening = () => {
			this.setState({
				listening: !this.state.listening
			});
		};

		

		this.listenSay = () => {
			startListening();
			if (!browserSupportsSpeechRecognition) {
				return null;
			}
		};

		return (
			<div>
				<Button
					style={{ border: "2px solid black", color: "black", fontSize:"10px" }}
					onMouseDown={this.listenSay}
					onMouseUp={this.sendResponse}
				>
					Voice
				</Button>
			</div>
		);
	}
}

const options = {
	autoStart: false
};

export default SpeechRecognition(options)(Dictaphone);
