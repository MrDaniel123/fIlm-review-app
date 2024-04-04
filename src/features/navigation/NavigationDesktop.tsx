import React from 'react';
import styled from 'styled-components';

import StyledNavLink from './NavigationLink';
import { breakPoint } from '../../styles/style';

const logoMovie = require('../../assets/logoMovie.png');
const logoTvSeires = require('../../assets/logoTvSeries.png');
const logoPersons = require('../../assets/logoPersons.png');

const NavigationStyled = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3.8rem;
	padding: 0.4rem 0;
	list-style: none;

	@media (max-width: ${breakPoint.extraLarge}px) {
		gap: 1.4rem;
	}
	@media (max-width: ${breakPoint.large}px) {
		justify-content: space-around;
	}
`;

const NavList = styled.ul`
	display: flex;
	list-style: none;
`;

function Navigation() {
	return (
		<NavigationStyled>
			<NavList>
				<li>
					<StyledNavLink to={'/movies/popular'}>
						<img src={logoMovie} alt='Logo movie' />
						<span>Movies</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to={'/tv-series'}>
						<img src={logoTvSeires} alt='Logo tv-series' />
						<span>Tv-Series</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to={'/persons/popular'}>
						<img src={logoPersons} alt='Logo persons' />
						<span>Persons</span>
					</StyledNavLink>
				</li>
			</NavList>
		</NavigationStyled>
	);
}

export default Navigation;
