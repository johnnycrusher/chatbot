import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MessageBox from "./MessageBox";
import DisplayMessagesList from "./DisplayMessagesList";
import { getMessage } from "../action/index";

class App extends Component {
	componentDidMount() {
		this.props.getMessage();
	}
	componentDidUpdate() {
		this.props.getMessage();
	}

	render() {
		return (
			<div>
				<MessageBox />
				<DisplayMessagesList data={this.props.message} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		message: state.GetMessage,
		messageSent: state.SendMessage
	};
}
function mapDispatchToPros(dispatch) {
	return bindActionCreators({ getMessage }, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToPros
)(App);
