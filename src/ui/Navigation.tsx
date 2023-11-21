import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { breakPoint } from '../styles/breakpoints';
import Logo from './Logo';
import Mobilenavigation from './Mobilenavigation';

const logoMovie = require('../assets/logoMovie.png');
const logoTvSeires = require('../assets/logoPersons.png');
const logoPersons = require('../assets/logoPersons.png');
const logoHome = require('../assets/LogoHome.png');
const appLogo = require('../assets/logo.png');

type Props = {
	type?: 'mobile' | 'desktop';
};

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

const StyledNavLink = styled(NavLink)`
	display: flex;
	align-items: center;
	padding: 0.8rem 2.4rem;
	margin: 0.4rem 1rem;
	text-decoration: none;
	border-radius: 1.6rem;
	transition: 0.1s;

	@media (max-width: ${breakPoint.extraLarge}px) {
		padding: 0.8rem 1rem;
	}

	& span {
		font-size: 2.4rem;
		font-weight: 600;
		color: #4b5563;

		@media (max-width: ${breakPoint.extraLarge}px) {
			font-size: 2rem;
		}
	}

	&:hover,
	&:active,
	&.active:link,
	&.active:visited {
		background-color: #e7e7e7;
	}
`;

function Navigation({ type }: Props) {
	return (
		<NavigationStyled>
			<NavList>
				{/* {type && <Mobilenavigation />} */}

				<li>
					<StyledNavLink to={'/movies'}>
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
					<StyledNavLink to={'/persons'}>
						<img src={logoPersons} alt='Logo persons' />
						<span>Persons</span>
					</StyledNavLink>
				</li>
			</NavList>
		</NavigationStyled>
	);
}

export default Navigation;
