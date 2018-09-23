import React from "react";

export default props => {
	return (
		<div>
			<ul className="list-group-item">
				<label>
					{props.user}@{props.ip}
				</label>
				<h3>{props.text}</h3>
				<p>{props.timestamp}</p>
			</ul>
		</div>
	);
};
