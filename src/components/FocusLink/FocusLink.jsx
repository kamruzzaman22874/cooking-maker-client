import React from 'react';
import { NavLink } from 'react-router-dom';

const FocusLink = ({ to, children }) => {
	return (
		<div>
			<NavLink
				to={to}
				className={({ isActive }) => (isActive ? 'text-pink-600' : '')}>
				{children}
			</NavLink>
		</div>
	);
};

export default FocusLink;
