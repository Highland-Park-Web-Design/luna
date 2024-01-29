import * as React from 'react';

export const EmailTemplate = ({ fullname, country, content }) => (
	<div>
		<span>
			<strong>{fullname}</strong> From <strong>{country}</strong> sent a message
			saying:
		</span>
		<br />
		<br />
		<span>{content}</span>
	</div>
);
