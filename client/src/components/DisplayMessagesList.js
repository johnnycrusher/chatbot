import React, { Component } from "react";
import DisplayMessageList from "./DisplayMessageItem";
import _ from "lodash";

export default class DisplayMessagesList extends Component {
	renderMessages() {
		if (_.isEmpty(this.props.data)) {
			return "Chat Messages are not avaliable";
		} else {
			const TextMessage = this.props.data;
			const Username = TextMessage.map(TextInfo => {
				return TextInfo.user;
			});
			const Text = TextMessage.map(TextInfo => {
				return TextInfo.text;
			});
			const TimeStamp = TextMessage.map(TextInfo => {
				return TextInfo.timestamp;
			});
			const IPaddress = TextMessage.map(TextInfo => {
				return TextInfo.ip;
			});
			return (
				<div>
					{Username.map((TextInfo, index) => {
						return (
							<DisplayMessageList
								key={index}
								user={TextInfo}
								text={Text[index]}
								timestamp={TimeStamp[index]}
								ip={IPaddress[index]}
							/>
						);
					})}
				</div>
			);
		}
	}
	render() {
		return (
			<div className="container">
				<ul className="list-group" />
				{this.renderMessages()}
			</div>
		);
	}
}
