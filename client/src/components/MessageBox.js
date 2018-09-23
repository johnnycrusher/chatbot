import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { sendMessage } from "../action/index";

export class MessageBox extends Component {
	onSubmit(values) {
		this.props.sendMessage(values);
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div className="container">
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<div className="form-group">
						<label>Username:</label>
						<Field
							name="username"
							component="input"
							type="text"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label>text message:</label>
						<Field
							name="text"
							component="input"
							type="text"
							className="form-control"
						/>
					</div>
					<button className="btn btn-primary">Send Message</button>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ sendMessage }, dispatch);
}

export default reduxForm({
	form: "message-input"
})(
	connect(
		null,
		mapDispatchToProps
	)(MessageBox)
);
