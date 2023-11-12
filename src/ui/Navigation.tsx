import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to={'/'}>
						<span>Logo</span>
					</NavLink>
				</li>
				<li>
					<NavLink to={'/movies'}>
						<span>Movies</span>
					</NavLink>
				</li>
				<li>
					<NavLink to={'/tv-series'}>
						<span>Tv-Series</span>
					</NavLink>
				</li>
				<li>
					<NavLink to={'/persons'}>
						<span>Persons</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
